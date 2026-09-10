import React from 'react'
import './header.css'

export default function Header() {
	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__wrapper">
						<div className="header__logo">
							<img src="/img/logo.svg" alt="logo" />
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
