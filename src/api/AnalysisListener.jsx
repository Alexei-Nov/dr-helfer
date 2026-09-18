import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress, setDone, setFailed, setResult, setResultComparison, setRecomendedProduct, } from '../toolkitRedux/toolkitSlice';
import { getComparison } from './getComparison';
import { getRecomendedProduct } from './getRecomendedProduct';

export default function AnalysisListener() {
  const dispatch = useDispatch();
  const analysisId = useSelector(state => state.toolkit.analysisId);

  useEffect(() => {
    if (!analysisId) return;
    const eventSource = new EventSource(`https://suschik.com/api/v1/analyses/${analysisId}/stream`);

    eventSource.onmessage = async (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.status === 'processing') {
          dispatch(updateProgress(data));
          return;
        }

        if (data.status === 'done') {
          dispatch(setDone());
          eventSource.close();

          const response = await fetch(`https://suschik.com/api/v1/analyses/${analysisId}`);
          if (!response.ok) {
            throw new Error('Не удалось получить результат');
          }

          const result = await response.json();
          dispatch(setResult(result.result));
          console.log('ANALYSIS RESULT:', result.result);

          const dataComparison = await getComparison(analysisId)
          dispatch(setResultComparison(dataComparison));
          console.log('COMPARISON RESULT:', dataComparison);

          const dataRecomendedProduct = await getRecomendedProduct(result.result.recommendation.recommended_products[0].product_id)
          dispatch(setRecomendedProduct(dataRecomendedProduct));
          console.log('RECOMENDED PRODUCT:', dataRecomendedProduct);

          return;
        }

        if (data.status === 'failed') {
          dispatch(setFailed(data.error_code));
          eventSource.close();
        }

      } catch (error) {
        console.error('SSE error:', error);
      }
    };

    eventSource.onerror = () => {
      console.log('SSE connection lost');
    };

    return () => {
      eventSource.close();
    };
  }, [analysisId, dispatch]);

  return null;
}