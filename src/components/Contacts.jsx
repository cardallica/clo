import React from 'react';

export default class ContactsPage extends React.Component {
	render() {
		return (
			<div className="page contacts">
				<h2 className="pageTitle">Contatti</h2>
				<p className="pageText">
					<ul className="contacts__list">
						<li>Tel: <a href="tel:3331234567">333 1234567</a></li>
						<li>Email: <a href="mailto:pippo@pluto.com">pippo@pluto.com</a></li>
						<li>Indirizzo: via Matteotti, 1 - Lissone 20851 (MB)</li>
					</ul>
				</p>
			</div>
		);
	}
}