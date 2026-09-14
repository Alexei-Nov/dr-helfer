import React from 'react'
import TitleAndMetaTags from '../components/TitleAndMetaTags/TitleAndMetaTags'
import Analytics from '../components/Analytics/Analytics'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AnalyticsPage() {
	const { analysisId } = useSelector(state => state.toolkit);
	if (!analysisId) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<TitleAndMetaTags />
			<Analytics />
		</>
	)
}
