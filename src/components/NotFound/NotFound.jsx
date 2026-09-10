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
						<div className="not-found__title">страница не найдена</div>
						<div className="not-found__desc">и не факт что она здесь была</div>
						<NavLink to='/' className="not-found__btn btn" >
							Перейти на главную
						</NavLink>
					</div>
				</div>
			</section>
		</>
	)
}
