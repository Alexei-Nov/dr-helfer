import React from 'react';
import { useSelector } from 'react-redux';
import './analytics.css';
import { Navigate, NavLink } from 'react-router-dom';

const statusStages = [
	{
		stage: 'photo_quality_check',
		img: '/img/status/img-1.svg',
		shortname_processing: 'Получаем фото',
		shortname: 'Фото получено',
		name_processing: 'Распознаем полученные фото',
		name: 'Полученные фото распознали',
		number: '01',
	},
	{
		stage: 'recognition',
		img: '/img/status/img-2.svg',
		shortname_processing: 'Распознаем состав',
		shortname: 'Состав распознан',
		name_processing: 'Считываем название и состав',
		name: 'Название и состав считали',
		number: '02',
	},
	{
		stage: 'knowledge_base_match',
		img: '/img/status/img-3.svg',
		shortname_processing: 'Проверяем источники',
		shortname: 'Источники проверены',
		name_processing: 'Проверяем научные источники',
		name: 'Научные источники проверили',
		number: '03',
	},
	{
		stage: 'report_assembly',
		img: '/img/status/img-4.svg',
		shortname_processing: 'Готовим рекомендации',
		shortname: 'Рекомендации готовы',
		name_processing: 'Готовим отчет и рекомендации',
		name: 'Отчет и рекомендации готовы',
		number: '04',
	},
];


export default function Analytics() {
	const { status, stage, errorCode, result, analysisId } = useSelector(state => state.toolkit);

	if (!analysisId) {
		return <Navigate to="/" replace />;
	}

	return (
		<section className="section analytics">
			<div className="container">
				<div className="analytics__wrapper">
					<div className="analytics__heading">
						<div className="analytics__title text-60">
							{result ? 'Отчет успешно создан' : 'Анализируем БАД'}
						</div>
						{!result &&
							<div className="analytics__desc">
								<p>
									Анализ может занять несколько минут: мы проверяем
									состав, дозировки, формы веществ, доказательность
									и возможные ограничения
								</p>
							</div>
						}
						{result &&
							<NavLink to='/result' className='analytics__btn btn'>Посмотреть отчёт</NavLink>
						}
					</div>

					<div className="analytics__body">
						<div className="analytics__col">
							<div className="status-track">
								{result ? (
									<svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
										<path d="M69.0518 3.51469C74.4604 3.23154 80.1055 5.17886 84.2324 8.66224C85.0992 9.39424 85.8826 10.2143 86.7323 10.966C88.634 12.6447 90.8113 13.9822 93.1683 14.9191C95.3449 15.7791 97.6431 16.2896 99.9783 16.4317C101.064 16.5001 102.164 16.4839 103.255 16.5711C108.003 16.9807 112.492 18.9095 116.057 22.0715C120.297 25.828 122.931 31.0694 123.416 36.7126C123.519 37.9084 123.504 39.1332 123.588 40.3399C123.756 42.7708 124.338 45.1551 125.309 47.3903C126.24 49.5435 127.505 51.536 129.058 53.2943C129.772 54.1003 130.534 54.8292 131.239 55.6613C134.355 59.3223 136.187 63.9027 136.455 68.7025C136.793 74.3503 134.951 79.9127 131.309 84.2433C130.549 85.1484 129.698 85.9653 128.922 86.8512C127.291 88.7181 125.991 90.8496 125.078 93.1533C124.204 95.3558 123.691 97.6841 123.559 100.049C123.488 101.173 123.51 102.322 123.406 103.445C122.961 108.224 120.965 112.658 117.775 116.217C113.958 120.431 108.678 123.028 103.011 123.48C101.917 123.572 100.747 123.539 99.6474 123.614C97.2029 123.798 94.8055 124.38 92.549 125.337C90.518 126.218 88.6299 127.399 86.9483 128.839C86.0986 129.572 85.2988 130.41 84.4374 131.143C80.5116 134.485 76.0997 136.213 70.9741 136.484C65.5023 136.704 60.2422 134.999 55.9822 131.515C54.951 130.672 54.041 129.717 53.0418 128.848C51.1941 127.261 49.0975 125.99 46.8363 125.084C44.711 124.243 42.467 123.741 40.186 123.596C39.187 123.536 38.1754 123.56 37.1723 123.486C32.3616 123.149 27.7899 121.261 24.1443 118.104C19.8026 114.365 17.09 109.08 16.5826 103.372C16.4765 102.201 16.4951 101.008 16.4206 99.832C16.2544 97.2986 15.6486 94.8137 14.6303 92.4881C13.7554 90.4914 12.5897 88.6347 11.171 86.9797C10.351 86.0275 9.44783 85.158 8.62232 84.1784C5.70308 80.703 3.94109 76.4025 3.58196 71.8778C3.12362 65.7654 4.93519 60.0973 8.92112 55.4406C9.64505 54.5948 10.4454 53.8332 11.1666 53.0042C12.7847 51.1304 14.0717 48.9948 14.9725 46.6888C15.8053 44.5505 16.297 42.2947 16.4297 40.0039C16.4938 38.9669 16.481 37.9211 16.5614 36.8811C16.9434 32.0958 18.862 27.5623 22.0311 23.9566C25.787 19.7099 31.0295 17.0665 36.6772 16.5719C37.7483 16.475 38.8862 16.4921 39.9732 16.4303C42.5134 16.2868 45.0091 15.7012 47.3482 14.7C49.4841 13.7724 51.4625 12.5179 53.2123 10.9815C53.9574 10.323 54.6548 9.57812 55.4148 8.93001C59.5047 5.44232 63.7766 3.87487 69.0518 3.51469ZM58.7062 81.2854C55.0262 77.458 51.1376 73.7809 47.4358 69.9801C45.8703 68.373 44.5181 67.0364 42.1594 67.0305C38.7745 66.9186 36.0841 69.546 36.0782 72.9244C36.0737 75.4619 37.5199 76.8694 39.2351 78.5216C40.1608 79.4377 41.1621 80.4179 42.0665 81.3462L50.7677 90.047C52.2472 91.527 54.0232 93.4739 55.6799 94.692C56.4315 95.2444 57.8037 95.5356 58.7552 95.5308C59.987 95.5301 61.1857 95.1316 62.1725 94.3947C63.13 93.6701 65.4561 91.2249 66.4088 90.2712L74.8487 81.8275C83.9323 72.8512 92.9632 63.8214 101.94 54.7385C103.228 53.4214 103.939 52.1734 103.908 50.2688C103.891 48.7024 103.247 47.2081 102.121 46.1195C101.144 45.1753 99.7185 44.4881 98.3424 44.5267C98.2877 44.5284 98.233 44.5309 98.179 44.5343C96.3121 44.5622 95.1705 44.8844 93.7958 46.2223C92.9236 47.0714 92.0657 47.9447 91.205 48.8055L85.0622 54.9504L67.7041 72.3098L61.9463 78.0677C60.9053 79.1095 59.772 80.2887 58.7062 81.2854Z" fill="url(#paint0_linear_98_970)" />
										<defs>
											<linearGradient id="paint0_linear_98_970" x1="70.0034" y1="3.48755" x2="70.0034" y2="136.503" gradientUnits="userSpaceOnUse">
												<stop stop-color="#78A82C" />
												<stop offset="1" stop-color="#94C24A" />
											</linearGradient>
										</defs>
									</svg>
								) : (
									<>
										<div className="status-track__line">
											<svg width="307" height="81" viewBox="0 0 307 81" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M208.346 53.7098C213.854 74.3672 241.162 102.107 306.321 47.8076" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
												<path d="M0.590332 47.8077C6.099 68.4651 33.4062 96.2052 98.5659 41.9055" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
												<path d="M205.985 26.3142C200.476 5.65668 173.169 -22.0834 108.009 32.2163" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
											</svg>
										</div>

										{statusStages.map(item => (
											<StatusItem key={item.stage} item={item} stage={stage} status={status} />
										))}
									</>
								)}

							</div>

							<div className="analytics-card">
								<div className="analytics-card__body">
									{result &&
										<div className="analytics-card__status">Уже распознали БАД</div>
									}
									<div className="analytics-card__img">
										<img src="/img/upload/img-1.png" alt="img" />
									</div>
								</div>
								<div className="analytics-card__info">
									{result &&
										<div className="analytics-card__name">{result.source_info.product_name}</div>
									}
									{/* <div className="analytics-card__desc">
										Индол - 3 карбидол 200 мг
									</div> */}
									<div className="analytics-card__tag">Состав не найден</div>
								</div>
							</div>

							<div className="analytics-status">
								{result &&
									<div className="analytics-status__title">Готово</div>
								}
								<div className="analytics-status__list">
									{statusStages.map((item, index) => (
										<StatusStageItem key={item.stage} item={item} index={index} status={status} stage={stage} />
									))}
								</div>
							</div>
						</div>

						{status === 'failed' && (
							<div className="analytics__error">
								Ошибка анализа: {errorCode}
							</div>
						)}

						{!result &&
							<div className="analytics__bottom-text">
								Можете свернуть страницу, анализ продолжится
							</div>
						}
					</div>
				</div >
			</div >
		</section >
	);
}

function getStageStatus(itemStage, currentStage, status) {
	const currentIndex = statusStages.findIndex(item => item.stage === currentStage);
	const itemIndex = statusStages.findIndex(item => item.stage === itemStage);

	return {
		isDone: status === 'done' || itemIndex < currentIndex,
		isActive: status === 'processing' && itemStage === currentStage,
	};
}

function StatusItem({ item, status, stage }) {
	const { isDone, isActive } = getStageStatus(item.stage, stage, status);

	let className = 'status-track__item';
	if (isDone) {
		className += ' status-track__item_completed';
	}
	if (isActive) {
		className += ' status-track__item_processing';
	}

	return (
		<div className={className}>
			<div className="status-track__item-img">
				<img src={item.img} alt="img" />
			</div>
			<div className="status-track__item-icon">
				<img src="/img/status/icon-1.svg" alt="img" />
			</div>
			<div className="status-track__item-name">
				{isDone ? item.shortname : item.shortname_processing}
			</div>
		</div>
	);
}

function StatusStageItem({ item, status, stage }) {
	const { isDone, isActive } = getStageStatus(item.stage, stage, status);

	return (
		<div className={`analytics-status__item ${isDone ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`}>
			<div className="analytics-status__icon">
				{isDone ? (
					<img src="/img/status/icon-3.svg" alt="img" />
				) : isActive ? (
					<img className="analytics-status__loader" src="/img/status/icon-2.svg" alt="img" />
				) : (
					<div className="analytics-status__number">{item.number}</div>
				)}
			</div>

			<div className="analytics-status__name">
				{isDone ? item.name : item.name_processing}
			</div>

			{!isActive && (
				<div className="analytics-status__arrow">
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
						<path d="M0.5 0.5L4.5 3.88678L8.5 0.5" stroke="#A1A1A1" strokeLinecap="round" />
					</svg>
				</div>
			)}
		</div>
	);
}