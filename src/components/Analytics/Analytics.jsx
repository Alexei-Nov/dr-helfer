import React from 'react'
import './analytics.css'

export default function Analytics() {
	return (
		<section className='section analytics'>
			<div className="container">
				<div className="analytics__wrapper">
					<div className="analytics__heading">
						<div className="analytics__title text-60">
							Анализируем БАД
						</div>
						<div className="analytics__desc">
							<p>
								Анализ может занять несколько минут: мы проверяем состав, дозировки, формы веществ, доказательность и возможные ограничения
							</p>
						</div>
					</div>
					<div className="analytics__body">
						<div className="analytics__status">
							<div className="status-track">
								<div className="status-track__line">
									<svg width="307" height="81" viewBox="0 0 307 81" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M208.346 53.7098C213.854 74.3672 241.162 102.107 306.321 47.8076" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
										<path d="M0.590332 47.8077C6.099 68.4651 33.4062 96.2052 98.5659 41.9055" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
										<path d="M205.985 26.3142C200.476 5.65668 173.169 -22.0834 108.009 32.2163" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
									</svg>
								</div>
								<div className="status-track__item status-track__item_completed">
									<div className="status-track__item-img">
										<img src="/img/status/img-1.svg" alt="img" />
									</div>

									<div className="status-track__item-icon">
										<img src="/img/status/icon-1.svg" alt="img" />
									</div>
									<div className="status-track__item-name">
										Фото получено
									</div>
								</div>
								<div className="status-track__item status-track__item_processing">
									<div className="status-track__item-img">
										<img src="/img/status/img-2.svg" alt="img" />
									</div>
									<div className="status-track__item-icon">
										<img src="/img/status/icon-1.svg" alt="img" />
									</div>
									<div className="status-track__item-name">
										Состав распознан
									</div>
								</div>
								<div className="status-track__item">
									<div className="status-track__item-img">
										<img src="/img/status/img-3.svg" alt="img" />
									</div>
									<div className="status-track__item-icon">
										<img src="/img/status/icon-1.svg" alt="img" />
									</div>
									<div className="status-track__item-name">
										Проверяем научные источники
									</div>
								</div>
								<div className="status-track__item">
									<div className="status-track__item-img">
										<img src="/img/status/img-4.svg" alt="img" />
									</div>
									<div className="status-track__item-icon">
										<img src="/img/status/icon-1.svg" alt="img" />
									</div>
									<div className="status-track__item-name">
										Готовим отчет
									</div>
								</div>
							</div>
						</div>
						<div className="analytics__bottom-text">
							Можете свернуть страницу, анализ продолжится
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
