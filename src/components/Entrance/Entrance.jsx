import React from 'react'
import './entrance.css'

export default function Entrance() {
	return (
		<section class="section entrance" >
			<div class="container">
				<div class="entrance__wrapper">
					<div class="entrance__col">
						<div class="entrance__title text-80 fw-700">
							Проверьте <span style={{ color: "#78A82C;" }}>состав БАД</span>
						</div>
						<div class="entrance__desc">
							<p>
								Сделайте минимум 2 фото: лицевой стороны и состава или загрузите из галереи. Весь
								текст должен быть виден
							</p>
						</div>
						<div class="entrance__tags">
							<div class="entrance__tag">Без бликов</div>
							<div class="entrance__tag">В фокусе</div>
							<div class="entrance__tag">Весь текст в кадре</div>
						</div>
					</div>
					<div class="entrance__body">
						<form class="entrance__form">
							<div class="upload" data-files="0">
								<input class="upload__field" name="Фото[]" type="file" id="file" multiple=""
									accept="image/*" />
								<div class="upload__wrapper">
									<div class="upload__btn upload__preview">
										<img src="./img/upload/img-1.png" alt="img" />
									</div>
									<div class="upload__list">
										<div class="upload__img">
											<img src="" alt="img" />
											<div class="upload__delete">
												<img src="/img/entrance/delete.svg" alt="img" />
											</div>
										</div>
										<div class="upload__btn upload__load-more">
											<div class="upload__load-more-icon">
												<img src="/img/entrance/load-more.svg" alt="img" />
											</div>
											<div class="upload__load-more-text">
												Добавить еще минимум <span>1</span> фото
											</div>
										</div>
									</div>
									<div class="upload__status">
										<div class="upload__status-icon">
											<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
												viewBox="0 0 20 20" fill="none">
												<g clip-path="url(#clip0_90_329)">
													<circle cx="10" cy="10" r="10" fill="currentColor" />
													<path
														d="M7.75004 13.1499L5.12504 10.5249C5.0564 10.4555 4.97465 10.4003 4.88453 10.3627C4.79441 10.325 4.69771 10.3056 4.60004 10.3056C4.50237 10.3056 4.40568 10.325 4.31556 10.3627C4.22544 10.4003 4.14368 10.4555 4.07504 10.5249C4.00556 10.5936 3.9504 10.6753 3.91275 10.7655C3.8751 10.8556 3.85571 10.9523 3.85571 11.0499C3.85571 11.1476 3.8751 11.2443 3.91275 11.3344C3.9504 11.4246 4.00556 11.5063 4.07504 11.5749L7.21754 14.7174C7.51004 15.0099 7.98254 15.0099 8.27504 14.7174L16.225 6.77494C16.2945 6.7063 16.3497 6.62455 16.3873 6.53443C16.425 6.44431 16.4444 6.34761 16.4444 6.24994C16.4444 6.15228 16.425 6.05558 16.3873 5.96546C16.3497 5.87534 16.2945 5.79359 16.225 5.72494C16.1564 5.65547 16.0746 5.6003 15.9845 5.56265C15.8944 5.525 15.7977 5.50562 15.7 5.50562C15.6024 5.50562 15.5057 5.525 15.4156 5.56265C15.3254 5.6003 15.2437 5.65547 15.175 5.72494L7.75004 13.1499Z"
														fill="white" />
												</g>
												<defs>
													<clipPath id="clip0_90_329">
														<rect width="20" height="20" fill="white" />
													</clipPath>
												</defs>
											</svg>
										</div>
										<div class="upload__status-wrapper">
											<div style={{ color: '#5A616C' }}>
												<span class="upload__status-count">1</span> фото добавлено.
											</div>
											<div class="upload__status-text">
												<div>Добавьте еще минимум 1 фото</div>
												<div>Можно анализировать</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button type="submit" class="entrance__btn btn btn_wide btn_disabled">Проанализировать
								БАД</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
