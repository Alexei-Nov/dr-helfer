import React from 'react'
import './result.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAnalysisId } from '../../toolkitRedux/toolkitSlice';
import { NavLink } from 'react-router-dom';

export default function Result() {
  const { result } = useSelector(state => state.toolkit);
  const dispatch = useDispatch();


  const startNewAnalysis = () => {
    dispatch(setAnalysisId(null));
  };

  return (
    <section className="section result">
      <div className="container">
        <div className="result__wrapper">
          <div className="result__top">
            <div className="result__heading">
              <div className="result__title text-60">
                Готовый <br /> отчёт
              </div>
            </div>
            <NavLink to='/' className="result__btn btn text-16 fw-500" onClick={() => startNewAnalysis}>
              Начать новый анализ
            </NavLink>
          </div>
          <div className="result__body">
            {result &&
              <div className="result__body-wrapper">
                <div className="result-card">
                  <div className="result-card__top">
                    <div className="result-card__img">
                      <img src="/img/upload/img-1.png" alt="img" />
                    </div>
                    <div className="result-card__name">{result.source_info.product_name}</div>
                  </div>
                  {result.analysis.component_facts.health_effect_description &&
                    <div className="result-card__row">
                      <div className="result-card__subtitle">Описание продукта</div>
                      <div className="result-card__text">{result.analysis.component_facts.health_effect_description}</div>
                    </div>
                  }
                  {result.source_info.stated_purpose_summary &&
                    <div className="result-card__row">
                      <div className="result-card__subtitle">Назначение</div>
                      <div className="result-card__text">{result.source_info.stated_purpose_summary}</div>
                    </div>
                  }
                  {result.source_info.raw_composition &&
                    <div className="result-card__row">
                      <div className="result-card__subtitle">Содержание активного компонента</div>
                      {result.source_info.raw_composition.map(item => (
                        <div className="result-card__text">{item.name} — {item.dosage} {item.unit}</div>
                      ))}
                    </div>
                  }

                </div>
                <div className="result__panel">
                  <div className="result__panel-tag">Отчёт</div>
                  {result.source_info.stated_purpose_summary &&
                    <div className="result__panel-item">
                      <div className="result__panel-title">
                        <div className="result__panel-title-num">01</div>
                        Назначение продукта
                      </div>
                      <div className="result__panel-body">
                        <div className="result__panel-text">
                          {result.source_info.stated_purpose_summary}
                        </div>
                      </div>
                    </div>
                  }
                  {result.analysis.composition_summary &&
                    <div className="result__panel-item">
                      <div className="result__panel-title">
                        <div className="result__panel-title-num">02</div>
                        Вывод о составе продукта
                      </div>
                      <div className="result__panel-body">
                        {result.analysis.composition_summary}
                      </div>
                    </div>
                  }
                </div>
                <div className="result__panel">
                  <div className="result__panel-tag">РЕКОМЕНДАЦИЯ</div>

                  <div className="result__panel-item">
                    <div className="result__panel-title">
                      <div className="result__panel-title-num">01</div>
                      Рекомендуемый продукт
                    </div>
                    <div className="result__panel-body">
                      {result.recommendation.recommendation_text &&
                        <div className="result__panel-text">
                          {result.recommendation.recommendation_text}
                        </div>
                      }
                      {result.recommendation.data_completeness_warning &&
                        <div className="result__panel-warning">
                          <div className="result__panel-warning-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                              <path d="M0 26.5095C0.119851 26.2919 0.184374 25.884 0.265221 25.634C0.600954 24.5959 1.2347 23.6526 1.78228 22.708L3.77497 19.2597L10.0098 8.46681L12.3013 4.50041C13.3816 2.62377 14.0502 1.00868 16.2767 0.276993C17.6524 -0.178738 19.1527 -0.0688393 20.4473 0.582469C21.2055 0.968984 21.8596 1.53241 22.3541 2.2251C22.6995 2.70874 23.064 3.37851 23.3642 3.90121L24.7933 6.37997L29.7205 14.9137L33.7328 21.8648L34.8219 23.7475C35.1371 24.2935 35.4723 24.838 35.6896 25.4344C35.7845 25.6939 35.9019 26.3629 36 26.5571V27.8612C35.859 28.2634 35.7936 28.6959 35.6481 29.0913C35.1435 30.4249 34.1448 31.5131 32.8592 32.13C32.3894 32.3544 31.6554 32.5869 31.1322 32.6096C29.7378 32.6702 28.2923 32.6469 26.8954 32.6469L19.2162 32.6462L10.0374 32.6462C8.43089 32.6462 6.80393 32.6633 5.19866 32.628C4.65005 32.616 4.07018 32.5071 3.55236 32.3213C2.21077 31.8292 1.11759 30.8275 0.510391 29.5339C0.42364 29.3484 0.37055 29.2229 0.306816 29.0378C0.238126 28.8383 0.0830004 28.1022 0 27.985V26.5095ZM18.2139 22.3678C19.7468 22.012 19.5 20.6494 19.5594 19.4137L19.7077 16.8361L19.9067 13.5265C19.9385 12.995 20.0019 12.2991 20.0024 11.7839C20.0032 11.5551 19.9756 11.3271 19.9202 11.1051C19.6857 10.1749 18.7914 9.46676 17.8179 9.61252C16.562 9.74537 15.9053 10.7505 15.9569 11.9645C15.9688 12.2459 15.9908 12.5268 16.0102 12.8078C16.0578 13.4589 16.1003 14.1104 16.1378 14.7622L16.3689 18.8669C16.4076 19.5422 16.4425 20.2177 16.4892 20.8926C16.5592 21.9043 17.2074 22.4137 18.2139 22.3678ZM18.1927 27.7569C19.2795 27.6424 20.0694 26.671 19.9598 25.5836C19.8501 24.4962 18.8821 23.702 17.7942 23.8069C16.6996 23.9124 15.8993 24.8878 16.0097 25.982C16.1201 27.0762 17.0989 27.8721 18.1927 27.7569Z" fill="#3E4553" />
                            </svg>
                          </div>
                          <div className="result__panel-warning-text">
                            {result.recommendation.data_completeness_warning}
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                  {result.source_info.component_sources &&
                    <div className="result__panel-item">
                      <div className="result__panel-title">
                        <div className="result__panel-title-num">02</div>
                        Научные источники
                      </div>
                      <div className="result__panel-body">
                        {result.source_info.component_sources.map(item => (
                          <a href={item.source_url} className="result__link" target='_blank' rel="noopener noreferrer">{item.source_url}</a>
                        ))}
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
