import React from 'react';

import BulletPortrait from './BulletPortrait';

import AnsiaPng from '../assets/ansia.png';
import AutoStimaPng from '../assets/autostima.png';
import ConflittiPng from '../assets/conflitti.png';

export default class WhatPage extends React.Component {
	render() {
		return (
			<div className="what page">
				<h2 className="pageTitle">Modalità di intervento</h2>
				<p className="pageText">
					Queste sono alcune delle situazioni che, più spesso, portano a chiedere una consulenza o un percorso di psicoterapia:
				</p>
				<div className="bullets">
					<BulletPortrait image={AnsiaPng} text="consulenza e sostegno psicologico"/>
                    <BulletPortrait image={AutoStimaPng} text="psicoterapia individuale"/>
					<BulletPortrait image={AnsiaPng} text="psicoterapia di coppia"/>
					<BulletPortrait image={ConflittiPng} text="psicoterapia familiare"/>
                    <BulletPortrait image={AnsiaPng} text="supporto alla gravidanza"/>
					<BulletPortrait image={AutoStimaPng} text="supporto nel puerperio e sostegno alla genetorialità"/>
					<BulletPortrait image={AnsiaPng} text="sostegno in casi di infertilità e nella PMA"/>
                    <BulletPortrait image={ConflittiPng} text="psicoterapia EMDR"/>
				</div>
				<p className="pageText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		);
	}
}