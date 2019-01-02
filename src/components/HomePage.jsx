import React from 'react';
import { Link } from 'react-router-dom';
import HomePageHero from '../assets/homepage_hero.png';
import Carousel from './Carousel';
import ansiaImg from '../assets/ansia.png';
import conflittiImg from '../assets/conflitti.png';
import autostimaImg from '../assets/autostima.png';

const BeltIcon = ({ figure, figCaption }) => (
    <figure className="homepage__belt__icon twoColumnWidth">
        <img src={figure} alt="icon"/>
        <figcaption className="homepage__belt__icon__caption">
            {figCaption}
        </figcaption>
    </figure>
);

export default class HomePage extends React.Component {
	render() {
		return (
			<div className="homepage">
				<div className="topBanner">
					<q className="topBanner__quote">
						Le cose non cambiano, siamo noi che cambiamo
					</q>
					<span className="topBanner__author">
						H. D. Thoreau
					</span>
					<img
						src={HomePageHero}
						alt="hero homepage"
						className="topBanner__image"
					/>
				</div>
				<h1 className="homepage__title eightColumnWidth">
					Ciao, mi chiamo <strong>Roberta Salerno</strong>,
					sono una <strong>psicologa</strong> e <strong>psicoterapeuta </strong>
					e ricevo a <strong>Lissone</strong>.
				</h1>
				<Link className="link" to="/chi-sono">
					Di più su di me...
				</Link>
				<div className="homepage__belt lightBackground">
					<div className="homepage__belt__container page">
						<div className="homepage__belt__content sixColumnWidth">
							<h2 className="homepage__belt__title">
								Il mio studio
							</h2>
							<p className="homepage__belt__text">
								Questo è il luogo in cui faccio Terapia.
								È un luogo <strong>semplice</strong>, con due poltrone
								 orientate l'una verso l'altra,
								in modo da favorire il <strong>contatto visivo</strong>, la vicinanza emotiva ed
								intraprendere comodamente un viaggio di <strong>scoperta</strong> e
								<strong> riscoperta</strong> delle
								proprie risorse.
								È un luogo che porta ad altri "luoghi" interni e relazionali,
								da cui cerco di far vedere, al mio paziente, "scorci" di posti conosciuti
								e abitati, ma con nuovi occhi, guardandoli da nuove prospettive.
							</p>
						</div>
						<div className="homepage__belt__content sixColumnWidth">
							<div className="homepage__belt__carousel">
								<Carousel />
							</div>
						</div>
					</div>
				</div>
				<div className="homepage__quote">
					<q className="tenColumnWidth">
						Un luogo non è mai solo <strong>quel</strong> luogo:
						quel luogo siamo un po' anche <strong>noi</strong>. In qualche modo, senza saperlo,
						ce lo portavamo dentro e un giorno, per caso, ci siamo arrivati
					</q>
					<span className="homepage__author">
						Antonio Tabucchi
					</span>
				</div>
				<div className="homepage__belt">
					<div className="homepage__belt__container tenColumnWidth flexColumn">
						<h2 className="homepage__belt__title">
							Problematiche più frequenti
						</h2>
						<p className="homepage__belt__text">
							La <strong>psicoterapia sistemica</strong> considera i
							<strong> sintomi</strong> come <strong>messaggi</strong> che danno
							informazioni sul mondo relazionale della persona.
							Scopo del percorso è quello "dar voce" alla sintomatologia,
							cogliendone il <strong>significato</strong> e la <strong>funzione</strong>,
							così da poter rispondere
							in maniera diversa, più efficace e sintonica, alle difficoltà.
						</p>
						<p className="homepage__belt__text">
							Queste sono alcune delle situazioni che, più spesso,
							portano a chiedere una consulenza o un percorso di psicoterapia:
						</p>
					</div>
					<div className="homepage__belt__icons">
                        <BeltIcon
                            figCaption={"Attacchi di panico"}
                            figure={ansiaImg}
                        />
                        <BeltIcon
                            figCaption={"Stati emotivi sgradevoli che perdurano da tempo"}
                            figure={autostimaImg}
                        />
                        <BeltIcon
                            figure={conflittiImg}
                            figCaption={"Attacchi di panico"}
                        />
                        <BeltIcon
                            figure={ansiaImg}
                            figCaption={"Attacchi di panico"}
                        />
                        <BeltIcon
                            figCaption={"Attacchi di panico"}
                            figure={ansiaImg}
                        />
                        <BeltIcon
                            figCaption={"Stati emotivi sgradevoli che perdurano da tempo"}
                            figure={autostimaImg}
                        />
                        <BeltIcon
                            figure={conflittiImg}
                            figCaption={"Attacchi di panico"}
                        />
                        <BeltIcon
                            figure={ansiaImg}
                            figCaption={"Attacchi di panico"}
                        />
                        <BeltIcon
                            figCaption={"Attacchi di panico"}
                            figure={ansiaImg}
                        />
                        <BeltIcon
                            figCaption={"Stati emotivi sgradevoli che perdurano da tempo"}
                            figure={autostimaImg}
                        />
                        <BeltIcon
                            figure={conflittiImg}
                            figCaption={"Attacchi di panico o ansia"}
                        />
                        <BeltIcon
                            figure={ansiaImg}
                            figCaption={"Attacchi di panico"}
                        />
                        <BeltIcon
                            figCaption={"Attacchi di panico"}
                            figure={ansiaImg}
                        />
                        <BeltIcon
                            figCaption={"Stati emotivi sgradevoli che perdurano da tempo"}
                            figure={autostimaImg}
                        />
                        <BeltIcon
                            figure={conflittiImg}
                            figCaption={"Conflitti"}
                        />
                        <BeltIcon
                            figure={ansiaImg}
                            figCaption={"Attacchi di panico"}
                        />
					</div>
				</div>
			</div>
		);
	}
}
