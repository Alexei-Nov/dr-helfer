import React from 'react'
import './notFound.css'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
	return (
		<>
			<section className='section not-found'>
				<div className="container">
					<div className="not-found__wrapper">
						<div className="not-found__error">
							<div className="not-found__error-num">404</div>
						</div>
						<div className="not-found__title text-60">Cтраница не найдена</div>
						<NavLink to='/' className="not-found__btn btn" >
							Перейти на главную
						</NavLink>
					</div>
				</div>
			</section>
		</>
	)
}
