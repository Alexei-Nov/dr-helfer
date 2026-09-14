import React from 'react'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ResultPage() {
	const { analysisId } = useSelector(state => state.toolkit);
	if (!analysisId) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<TitleAndMetaTags />
			<div>Готовый отчёт</div>
		</>
	)
}
