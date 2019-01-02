import React from 'react';
import Logo from './Logo';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="footer__content">
					<div className="footer__content__wrapper">
						<div className="footer__content__logo">
							<Logo />
							<span className="footer__content__text uppercase">
								p.iva 06744840965
							</span>
						</div>
						<div className="footer__content__contacts">
							<span className="footer__content__text">
								via Matteotti, 1 - Lissone 20851 (MB)
							</span>
							<span className="footer__content__text">
								<a href="tel:3334901691">
									tel: 333 4901691
								</a>
							</span>
							<span className="footer__content__text">
								<a href="mailto:robertasalerno@tiscali.it">
									robertasalerno@tiscali.it
								</a>
							</span>
						</div>
					</div>
					<div className="footer__content__copyrights">
						@Copyright 2018
					</div>
				</div>
			</footer>
		);
	}
}
