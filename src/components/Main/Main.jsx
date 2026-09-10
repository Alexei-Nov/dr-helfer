import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from '../NotFound/NotFound';
import AnalyticsPage from '../../pages/AnalyticsPage';


export default function Main() {
	const location = useLocation();
	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0
		});
	}, [location])

	return (
		<>
			<main className="main">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/analytics" element={<AnalyticsPage />} />
					<Route exact path="/result" element={<Home />} />

					<Route exact path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	)
}