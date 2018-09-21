import React from 'react';

const TableRow = ({ title, children }) => (
    <div className="psychiatrist__table__row">
        <aside className="psychiatrist__table__smallColumn">
            {title}
        </aside>
        <article className="psychiatrist__table__largeColumn">
            {children}
        </article>
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
                            <TableRow
                                title={"come"}
                            >
                                {
                                    <p>
                                        Lo strumento principe dello psicologo è il colloquio e l'utilizzo di domande:
                                        porsi e porre domande attiva e stimola il processo di pensiero.
                                        Infatti, non sono tanto importanti  le risposte in sè, quanto
                                        piuttosto il fatto che, nel percorso di terapia, ci si interroghi su strategie
                                        e visioni alternative del problema, cominciando a fare collegamenti,
                                        riconoscendo e individuando i "nodi" della propria storia e, trovando chiavi
                                        interpretative nuove e differenti rispetto ai soliti modelli operativi.
                                        Nei momenti di crisi, la visione della propria condizione subisce
                                        un irrigidimento, impedendo di ipotizzare qualunque tipo di cambiamento:
                                        ci si sente senza possibilità, si svalutano le proprie risorse e si perde
                                        la consapevolezza del  ruolo attivo che ognuno di noi gioca nelle diverse
                                        situazioni e nel mantenimento di queste.
                                        Ecco perché, in terapia, si cerca di coinvolgere e stimolare a un livello
                                        sia emotivo che cognitivo:  riuscire a mettere in discussione le strategie
                                        e le soluzioni adottate, ampliare la visione delle cose,
                                        accrescere la flessibilità, fornire diverse possibilità
                                        interpretative e di scelta, aiutano le persone ad approcciarsi
                                        alla propria condizione di disagio in modo nuovo, più adeguato e funzionale.
                                    </p>
                                }
                            </TableRow>
                            <TableRow
                                title="perchè"
                            >
                                {
                                    <p>
                                        Rivolgersi ad uno psicologo non è un segno di debolezza o
                                        di scarsa indipendenza, quanto, piuttosto, indice di consapevolezza
                                        del proprio malessere e desiderio di lavorare sulle motivazioni
                                        che impediscono il cambiamento e contribuiscono al mantenimento
                                        della propria condizione di disagio o sofferenza.psicologo.
                                    </p>
                                }
                            </TableRow>
                        </div>
                        <div className="homepage__quote">
                            <q className="tenColumnWidth">
                                Il paziente, il miglior <strong>collega</strong>
                            </q>
                            <span className="homepage__author">
                                Wilfred R. Bion
                            </span>
                        </div>
                        <p className="pageText">
                            È importante sottolineare che lo psicologo non trova le soluzioni al posto
                            della persona - perché sarebbero soluzioni adatte a lui e non a chi si rivolge a lui -
                            ma mette a disposizione la propria formazione e professionalità per permettere di capire
                            cosa impedisca il superamento di una data situazione, cosa si opponga inconsapevolmente
                            al raggiungimento di quello cui si aspira o cosa mette in uno stato
                            di conflitto interiore e perché.
                            In altre parole, lo psicologo accompagna la persona in un "viaggio" che, ampliando le
                            possibilità di visione e interpretazione della situazione, aiuta a vedere il problema
                            con occhi diversi, facilitando la consapevolezza, l'evoluzione e il cambiamento.
                        </p>
                    </div>
                </div>
			</div>
		);
	}
}