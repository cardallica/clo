import React from 'react';

export default class ContactsPage extends React.Component {
	render() {
		return (
			<div className="page contacts">
				<h2 className="pageTitle">Contatti</h2>
				<p className="pageText">
					<ul className="contacts__list">
						<li>Tel: <a href="tel:3334901691">333 4901691</a></li>
						<li>Email: <a href="mailto:robertasalerno@tiscali.it">robertasalerno@tiscali.it</a></li>
						<li>Indirizzo: via Matteotti, 1 - Lissone 20851 (MB)</li>
					</ul>
				</p>
			</div>
		);
	}
}
