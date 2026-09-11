import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProgress, setDone, setFailed, setResult, } from '../toolkitRedux/toolkitSlice';

export default function AnalysisListener() {
	const dispatch = useDispatch();
	const analysisId = useSelector(state => state.toolkit.analysisId);

	useEffect(() => {
		if (!analysisId) return;
		const eventSource = new EventSource(`/api/v1/analyses/${analysisId}/stream`);

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

					const response = await fetch(`/api/v1/analyses/${analysisId}`);
					if (!response.ok) {
						throw new Error('Не удалось получить результат');
					}

					const result = await response.json();
					dispatch(setResult(result));
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