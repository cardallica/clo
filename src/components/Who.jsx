import React from 'react';
import { Link } from 'react-router-dom';

export default class WhoPage extends React.Component {
	componentDidMount() {
		window.scrollTo(0,0);
	}

	render() {
		return (
			<div className="who">
				<div className="who__quote">
					<h1 className="eightColumnWidth">
						Sono una <strong>Psicologa-Psicoterapeuta. </strong>
						Vivo e lavoro a <strong>Lissone</strong> e ricevo nel mio
						studio in via
						<Link className="link" to="/contatti"> Matteotti 1.</Link>
					</h1>
				</div>
				<div className="who__text tenColumnWidth">
					<p>
					Come Psicoterapeuta seguo<strong> adulti, coppie e famiglie</strong>, sia in percorsi di terapia
					che di consulenza.
					Inoltre, ormai da anni,  mi occupo di sostenere i genitori con bambini in età evolutiva
					o in fase adolescenziale, in percorsi di <strong>sostegno alla genitorialità.</strong>
					</p>
					<p>
					Come terapeuta a orientamento <strong>Sistemica-Relazionale</strong>,
					il focus del mio lavoro è sulle <strong>relazioni</strong> in cui ciascuno di noi è immerso: con i propri genitori nella famiglia di
					origine, all'interno della coppia e nel sistema familiare attuale, nel contesto
					lavorativo, con i propri figli, nel gruppo dei pari.
					Ognuno costruisce e fornisce  significato alle propria esperienza sulla base delle
					relazioni che sperimenta con gli altri significativi della propria vita.
					Inoltre, i diversi rapporti che intessiamo nel corso della nostra esistenza
					spingono a mettere in gioco parti di noi.
					</p>
					<p>
					Nel lavoro terapeutico con i miei pazienti, mi propongo, quindi, di creare <strong>connessioni </strong>
					 tra il mondo interno  e quello esterno dell'individuo, mantenendo l'interesse verso
					  i <strong>sistemi di significato</strong> che generano collegamenti tra azioni,
					   <strong> emozioni</strong> e <strong>relazioni</strong>.
				  	</p>
					<p>
					Inoltre, la mia formazione come <strong>terapeuta EMDR</strong>, mi consente l'utilizzo, in terapia,
					di questo  approccio, considerato strumento elettivo per l'elaborazione di traumi
					significativi o, anche, eventi di vita avversi che possono accompagnarsi a vissuti
					traumatici.
					</p>
				</div>
				<div className="who__studies">
					<div className="who__studies__content page">
						<h2>
						La mia formazione
						</h2>
						<div className="who__studies__wrapper">
							<h3 className="who__studies__wrapper__year threeColumnWidth">
							2006
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
							Mi sono laureata in <strong>Psicologia Clinica e di Comunità</strong> presso l'università
							degli studi Milano Bicocca con una tesi dal titolo
							<strong> "Psicopatologia e psicoterapia nell'ottica etnopsichiatrica attuale”</strong>.
							</p>
							<p>
							Dal <strong>2006</strong> al <strong>2009</strong> ho svolto attività clinica
							e di<strong> ricerca</strong> presso l'<strong>Unità
							Operativa di Psicologia Clinica dell' Azienda Ospedaliera San Gerardo,
							di Monza</strong>. Nello specifico, in quegli anni, ho svolto percorsi di consulenza
							e sostegno con persone sottoposte a rivascolarizzazione e interventi
							cardiaci complessi, con il fine di elaborare la nuova condizione fisica e
							favorire l'utilizzo di nuove strategie e risorse psicologiche adattive.
							</p>
							</div>
							<h3 className="who__studies__wrapper__year threeColumnWidth">
							2007
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
							A seguito del superamento dell'esame di stato, sono <strong> abilitata</strong>
							alla <strong> professione di psicologa</strong>.
							Sono inserita nell'elenco degli Psicoterapeuti della Lombardia
							avendo conseguito la specializzazione quadriennale in
							<strong> Psicoterapia a orientamento Sistemico Relazionale</strong> presso il
							"Centro Milanese di Terapia della Famiglia"
							(sede torinese Episteme del dott. Paolo Bertrando e dott. Marco Bianciardi).
							</p>
							<p>
							Sono abilitata all'uso della tecnica <strong>EMDR </strong>
							(Eye Movement Desensitization and Reprocessing),
							particolarmente efficace nell'elaborazione di situazioni traumatiche
							pregresse o attuali.
							</p>
							</div>
							<h3 className="who__studies__wrapper__year threeColumnWidth">
							2009
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
							Dal <strong>2009</strong> svolgo attività di <strong> psicologa/psicoterapeuta</strong>
							 presso il <strong>consultorio Genitori Oggi</strong> attraverso percorsi
							 psicologici sia individuali sia di coppia/familiari
							Dal <strong>2009</strong> presso la <strong>fondazione IRCC Mangiagalli di Milano</strong>,
							grazie ad un progetto ponte tra il consultorio privato accreditato
							Genitori Oggi e la clinica Osterico-Ginecologica, svolgo attività
							clinica come <strong>psicoterapeuta nel reparto del nido/puerperio</strong>,
							fornendo colloqui di supporto alle donne e alle
							coppie incontrate nei primi giorni del post parto e
							interventi mirati di prevenzione primaria coordinati
							con il personale medico e ostetrico del reparto.
							</p>
							<p>
							Ho svolto attività di <strong>ricerca</strong> sulla <strong>prevenzione della
							depressione post partum</strong>, attraverso un progetto di ricerca -
							intervento, mirato alla promozione del benessere psicologico
							della coppia legato a questo specifico periodo di vita.
							Sono stati <strong>pubblicati due articoli</strong> sui risultati ottenuti.
							Sto concludendo un nuovo progetto di ricerca - <strong>intervento sul
							trauma da parto e sulle difficoltà di allattamento da trattare
							con l'utilizzo dell'EMDR</strong>. Scopo di queste ricerche è la tutela
							del legame tra madre, padre e bambino fin dai primi giorni di vita.
							Collaboro con il reparto di patologia neonatale della clinica
							Mangiagalli, seguendo coppie o singoli che vivono la dolorosa
							esperienza di avere un figlio ricoverato in Terapia Intensiva
							Neonatale. Seguo coppie che hanno deciso di sottoporsi,
							o stanno già affrontando, un percorso di Procreazione Medicalmente Assistita,
							fornendo loro interventi psicologici mirati appositamente per la
							rielaborazione di questo cammino emotivamente e relazionalmente molto complesso.
							</p>
							</div>
							<h3 className="who__studies__wrapper__year threeColumnWidth">
							2012
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
							Nel <strong>2012</strong> ho lavorato per l'<strong>Unità Operativa di Psicologia Clinica
							dell' Azienda Ospedaliera San Gerardo</strong>, presso la casa circondariale di
							Monza su un progetto regionale volto alla <strong>prevenzione del rischio
							auto ed etero lesivo</strong>. Inoltre ho collaborato con l'ambulatorio di
							<strong> ansia e depressione afferente all'U.O. di Psicologia Clinica del San Gerardo</strong>.
							Tale collaborazione ha previsto lo svolgimento di colloqui clinici e
							la somministrazione di test alle persone afferenti al servizio.
							Negli anni<strong> 2011</strong> e<strong> 2012</strong> ho lavorato,
							come consulente al progetto regionale <strong>"LA VALIGIA DELLE MAMME: mappe, reti e relazioni a
							sostegno della maternità". Interventi integrati personalizzati per il
							benessere delle madri sul territorio della Brianza"</strong>,
							volto alla promozione del benessere delle famiglie, al sostegno della
							genitorialità e allo sviluppo di dinamiche relazionali per la tutela
							dello sviluppo e del benessere infantile.
							</p>
							</div>
							<h3 className="who__studies__wrapper__year threeColumnWidth">
							2017
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
							Da settembre <strong>2017</strong> lavoro come <strong>Psicologa Psicoterapeuta</strong> presso il
							<strong> "Centro per la Famiglia"</strong> di Sesto, svolgendo percorsi di sostegno,
							terapia individuale o di coppia alle persone che si rivolgono presso il
							consultorio. Collaboro, inoltre con  l'associazione <strong>GEPO </strong>
							(Gruppo Educazionale Pediatrico Ostetrico) di Milano in cui svolgo
							corsi di preparazione al parto e percorsi di consulenza,
							sostegno e psicoterapia individuale o di coppia.
							</p>
							</div><h3 className="who__studies__wrapper__year threeColumnWidth">
							2018
							</h3>
							<div className="who__studies__wrapper__activity eightColumnWidth">
							<p>
								Da settembre <strong>2018</strong> collaboro con <strong>Humanitas</strong> presso la <strong>Clinica Pio X</strong> in un progetto di prevenzione
								della depressione post parto e sostegno alla maternità. Oltre ai colloqui con le puerpere della clinica,
								l'attività prevede colloqui di psicoterapia focale individuale o di coppia in regime ambulatoriale.
								Inoltre, da luglio 2018, collaboro con l'ospedale <strong>San Gerardo di Monza</strong>: nello specifico, mi
								occupo del trattamento di sindromi da disadattamento, ansia e depressione, per l'<strong>ambulatorio Vademecum</strong>;
								presso l'<strong>ambulatorio psichiatrico di Brugherio</strong>, invece, svolgo psicoterapie e colloqui di sostegno per
								i pazienti affenti al Servizio, in un'ottica integrata con le diverse figure di cura.
							</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
