import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'

export default function Header() {
	const location = useLocation();
	return (
		<>
			<header className="header" >
				<div className="container">
					<div className="header__wrapper">
						<div className="header__logo">
							<img src="/img/logo.svg" alt="logo" />
						</div>
					</div>
				</div>
			</header>
			<div className="leaf-bg">
				<picture className="leaf-bg__img" >
					<source media="(max-width: 768px)" srcSet="./img/leaf-bg/img-1_mob.png" />
					<img src="./img/leaf-bg/img-1.png" alt="img" />
				</picture>
				<picture className="leaf-bg__img">
					<img src="./img/leaf-bg/img-2.png" alt="img" />
				</picture>
			</div>
		</>
	)
}
