import React from 'react'
import './result.css'
import { useSelector } from 'react-redux';

export default function Result() {
	const { result } = useSelector(state => state.toolkit);
	return (
		<section className="section result">
			<div className="container">
				<div className="result__wrapper">
					<div className="analytics__heading">
						<div className="analytics__title text-60">
							Готовый <br /> отчёт
						</div>
					</div>
					<div className="result__body">
						{result &&
							<>
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
											<div className="result-card__text">{result.source_info.stated_purpose_summary}</div>
										</div>
									}

								</div>
								<div className="result__panel">
									<div className="result__panel-item">

									</div>
								</div>
							</>
						}
					</div>
				</div>
			</div>
		</section>
	)
}
