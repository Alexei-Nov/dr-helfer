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
	{
		stage: 'report_assembly',
		img: '/img/status/img-4.svg',
		name: 'Готовим отчет',
	},
];

export default function Analytics() {
	const { status, stage, progress, elapsedSeconds, errorCode } = useSelector(state => state.analysis);

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
						<div className="analytics__progress">
							{progress}%
						</div>

						<div className="analytics__status">
							<div className="status-track">
								{statusTrackStages.map((item, index) => (
									<StatusItem key={item.stage} item={item} index={index} currentStage={stage} />
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

function StatusItem({ item, index, currentStage, }) {
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