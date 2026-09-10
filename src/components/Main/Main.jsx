import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/Home";
import NotFound from '../NotFound/NotFound';


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
				<div className="leaf-bg">
					<picture className="leaf-bg__img" >
						<source media="(max-width: 768px)" srcSet="./img/leaf-bg/img-1_mob.png" />
						<img src="./img/leaf-bg/img-1.png" alt="img" />
					</picture>
					<picture className="leaf-bg__img">
						<img src="./img/leaf-bg/img-2.png" alt="img" />
					</picture>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/analytics" element={<Home />} />
					<Route exact path="/result" element={<Home />} />

					<Route exact path="*" element={<NotFound />} />
				</Routes>
			</main>
		</>
	)
}