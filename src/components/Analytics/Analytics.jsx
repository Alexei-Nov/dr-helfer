import React from 'react';
import { useSelector } from 'react-redux';
import './analytics.css';

const statusTrackStages = [
	{
		stage: 'photo_quality_check',
		img: '/img/status/img-1.svg',
		name: 'Фото получено',
	},
	{
		stage: 'recognition',
		img: '/img/status/img-2.svg',
		name: 'Состав распознан',
	},
	{
		stage: 'knowledge_base_match',
		img: '/img/status/img-3.svg',
		name: 'Проверяем научные источники',
	},
	{
		stage: 'recommendation',
		img: '/img/status/img-4.svg',
		name: 'Готовим рекомендации',
	},
];

const analyticsStatusStages = [
	{
		stage: 'photo_quality_check',
		number: '01',
		title: 'Полученные фото распознали',
	},
	{
		stage: 'recognition',
		number: '02',
		title: 'Считали название и состав',
	},
	{
		stage: 'knowledge_base_match',
		number: '03',
		title: 'Проверяем научные источники',
	},
	{
		stage: 'report',
		number: '04',
		title: 'Готовим отчет и рекомендации',
	},
];


export default function Analytics() {
	const { status, stage, errorCode, } = useSelector(state => state.toolkit);

	return (
		<section className="section analytics">
			<div className="container">
				<div className="analytics__wrapper">
					<div className="analytics__heading">
						<div className="analytics__title text-60">
							Анализируем БАД
						</div>
						<div className="analytics__desc">
							<p>
								Анализ может занять несколько минут: мы проверяем
								состав, дозировки, формы веществ, доказательность
								и возможные ограничения
							</p>
						</div>
					</div>

					<div className="analytics__body">
						<div className="analytics__col">
							<div className="status-track">
								<div className="status-track__line">
									<svg width="307" height="81" viewBox="0 0 307 81" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M208.346 53.7098C213.854 74.3672 241.162 102.107 306.321 47.8076" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
										<path d="M0.590332 47.8077C6.099 68.4651 33.4062 96.2052 98.5659 41.9055" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
										<path d="M205.985 26.3142C200.476 5.65668 173.169 -22.0834 108.009 32.2163" stroke="#94C24A" strokeWidth="1.18043" strokeLinecap="round" />
									</svg>
								</div>

								{statusTrackStages.map((item, index) => (
									<StatusItem key={item.stage} item={item} index={index} currentStage={stage} />
								))}
							</div>

							<div className="analytics-card">
								<div className="analytics-card__body">
									<div className="analytics-card__status">Уже распознали БАД</div>
									<div className="analytics-card__img">
										<img src="/img/upload/img-1.png" alt="img" />
									</div>
								</div>
								<div className="analytics-card__info">
									<div className="analytics-card__name">Индол - 3 карбидол</div>
									<div className="analytics-card__desc">
										Индол - 3 карбидол 200 мг
									</div>
									<div className="analytics-card__tag">Состав не найден</div>
								</div>
							</div>

							<div className="analytics-status">
								{analyticsStatusStages.map((item, index) => (
									<StatusStageItem key={item.stage} item={item} index={index} status={status} stage={stage} />
								))}
							</div>
						</div>

						{status === 'failed' && (
							<div className="analytics__error">
								Ошибка анализа: {errorCode}
							</div>
						)}

						<div className="analytics__bottom-text">
							Можете свернуть страницу, анализ продолжится
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function StatusItem({ item, index, currentStage }) {
	const currentIndex = statusTrackStages.findIndex(stage => stage.stage === currentStage);
	let className = 'status-track__item';

	if (index < currentIndex) {
		className += ' status-track__item_completed';
	}

	if (index === currentIndex) {
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
				{item.name}
			</div>
		</div>
	);
}

function StatusStageItem({ item, index, status, stage }) {
	const currentStageIndex = analyticsStatusStages.findIndex(stage => stage.stage === stage);
	const isLastStage = item.stage === 'report';

	const isDone = status === 'done' || (!isLastStage && index < currentStageIndex) || (isLastStage && (stage === 'report_assembly' || status === 'done'));
	const isActive = status === 'processing' && (item.stage === stage || (isLastStage && (stage === 'recommendation' || stage === 'report_assembly')));

	return (
		<div key={item.stage} className={`analytics-status__item ${isDone ? 'is-done' : ''} ${isActive ? 'is-active' : ''}`}>
			<div className="analytics-status__icon">
				{isDone ? (
					<img src="/img/status/icon-3.svg" alt="img" />
				) : isActive ? (
					<img className="analytics-status__loader" src="/img/status/icon-2.svg" alt="img" />
				) : (
					<div className="analytics-status__number">{item.number}</div>
				)}
			</div>

			<div className="analytics-status__title">
				{item.title}
			</div>

			{!isActive && (
				<div className="analytics-status__arrow">
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
						<path d="M0.5 0.5L4.5 3.88678L8.5 0.5" stroke="#A1A1A1" stroke-linecap="round" />
					</svg>
				</div>
			)}
		</div>
	);
}