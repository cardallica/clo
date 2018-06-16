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
								p.iva 12345678911
							</span>
						</div>
						<div className="footer__content__contacts">
							<span className="footer__content__text">
								via Matteotti, 1 - Lissone 20851 (MB)
							</span>
							<span className="footer__content__text">
								<a href="tel:3331234567">
									tel: 333 1234567
								</a>
							</span>
							<span className="footer__content__text">
								<a href="mailto:pippo@pluto.com">
									pippo@pluto.com
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