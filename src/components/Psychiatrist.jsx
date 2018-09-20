import React from 'react';

const TableRow = ({ smallText, largeText }) => (
    <div className="psychiatrist__table__row">
        <div className="psychiatrist__table__smallColumn">
            {smallText}
        </div>
        <div className="psychiatrist__table__largeColumn">
            {largeText}
        </div>
    </div>
);

export default class PhychiatristPage extends React.Component {
	render() {
		return (
			<div className="psychiatrist">
				<div className="topBanner">
                    <span className="topBanner__text">
                        Nel corso della vita, a fronte di <strong>cambiamenti</strong> o <strong>tappe importanti</strong>
                        della propria storia
                        (sposarsi, interrompere una relazione, divorziare, cambiare lavoro, avere figli…)
                        e di <strong>eventi particolarmente stressanti</strong> o <strong>dolorosi</strong> (affrontare un lutto o una malattia…)
                        è possibile avvertire un <strong>disagio psicologico</strong> e/o <strong>relazionale</strong> che, se protratto nel tempo,
                        rischia di compromettere il proprio benessere psico-fisico e la qualità di vita.
                    </span>
				</div>
                <div className="lightBackground psychiatrist__content">
                    <div className="page">
                        <h2 className="pageTitle">
                            Lo psicologo: quando, come e perchè
                        </h2>
                        <div className="psychiatrist__table">
                            <TableRow
                                title={"Quando"}
                            >
                                {
                                    <p>
                                        <p>
                                            Il disagio che può derivare da queste situazioni può manifestarsi in molti
                                            e differenti modi, a seconda delle caratteristiche e della storia di ognuno:
                                            ansia, depressione, disturbi psicosomatici, attacchi di panico,
                                            disturbi alimentari, o, ancora, difficoltà nella comunicazione
                                            o nella relazioni con gli altri, sono solo alcuni esempi.
                                            Si possono sperimentare malessere, paura e stress che, a loro volta,
                                            riverberano negativamente sulla consapevolezza delle proprie risorse e capacità,
                                            influenzando, di conseguenza, scelte e relazioni. In questi momenti ci si sente bloccati,
                                            senza possibilità di cambiamento,"incastrati" nella propria condizione di sofferenza.
                                            In queste e in altre circostanze, per risolvere efficacemente
                                            le situazioni problematiche, risulta necessario interrogarsi sui motivi
                                            e le cause profonde del proprio disagio e rivolgersi a uno psicologo.
                                        </p>
                                        <p>
                                            I percorsi psicologici non si rivolgono solo a persone che vivono una situazione di malessere o di disagio, ma possono essere intrapresi anche da persone che posseggono un buon livello di benessere globale, ma che si trovano temporaneamente nella condizione di beneficiare di un focus esterno in relazione a scelte e momenti di vita complessi.
                                        </p>
                                    </p>
                                }
                            </TableRow>
                        </div>
                    </div>
                </div>
			</div>
		);
	}
}