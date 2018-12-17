import React from 'react';
import Modal from 'react-modal';

import BulletPortrait from './BulletPortrait';

import AnsiaPng from '../assets/ansia.png';
import AutoStimaPng from '../assets/autostima.png';
import ConflittiPng from '../assets/conflitti.png';

import { WhatTxts} from '../assets/Texts';

export default class WhatPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            modalText: undefined,
            modalTitle: undefined,
            modalImage: undefined
        }
    }

    openModal = (image, title, text) =>
        this.setState({
            isModalOpen: true,
            modalText: text,
            modalTitle: title,
            modalImage: image,
        });

    closeModal = () =>
        this.setState({
            isModalOpen: false,
            modalText: undefined,
            modalTitle: undefined,
            modalImage: undefined
        });

	render() {
	    const modalStyle = {
	        height: 400,
	        width: 600,
        };

		return (
			<div className="what page">
				<h2 className="pageTitle">Modalità di intervento</h2>
				<p className="pageText">
					Queste sono alcune delle situazioni che, più spesso, portano a chiedere una consulenza o un percorso di psicoterapia:
				</p>
				<div className="bullets">
					<BulletPortrait
                        image={AnsiaPng}
                        caption={WhatTxts.ConsulenzaESostegnoPsicologico.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.ConsulenzaESostegnoPsicologico.title,
                            WhatTxts.ConsulenzaESostegnoPsicologico.text
                        )}
                    />
                    <BulletPortrait
                        image={AutoStimaPng}
                        caption={WhatTxts.PsicoTerapiaIndividuale.title}
                        onClick={() => this.openModal(
                            AutoStimaPng,
                            WhatTxts.PsicoTerapiaIndividuale.title,
                            WhatTxts.PsicoTerapiaIndividuale.text
                        )}
                    />
					<BulletPortrait
                        image={ConflittiPng}
                        caption={WhatTxts.PsicoterapiaDiCoppia.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.PsicoterapiaDiCoppia.title,
                            WhatTxts.PsicoterapiaDiCoppia.text
                        )}
                    />
                    <BulletPortrait
                        image={ConflittiPng}
                        caption={WhatTxts.PsicoterapiaFamiliare.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.PsicoterapiaFamiliare.title,
                            WhatTxts.PsicoterapiaFamiliare.text
                        )}
                    />
                    <BulletPortrait
                        image={AutoStimaPng}
                        caption={WhatTxts.SupportoAllaGravidanza.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.SupportoAllaGravidanza.title,
                            WhatTxts.SupportoAllaGravidanza.text
                        )}
                    />
                    <BulletPortrait
                        image={AutoStimaPng}
                        caption={WhatTxts.SupportoNelPuerperio.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.SupportoNelPuerperio.title,
                            WhatTxts.SupportoNelPuerperio.text
                        )}
                    />
                    <BulletPortrait
                        image={AnsiaPng}
                        caption={WhatTxts.SostegnoInfertilita.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.SostegnoInfertilita.title,
                            WhatTxts.SostegnoInfertilita.text
                        )}
                    />
                    <BulletPortrait
                        image={ConflittiPng}
                        caption={WhatTxts.PsicoterapiaEMDR.title}
                        onClick={() => this.openModal(
                            AnsiaPng,
                            WhatTxts.PsicoterapiaEMDR.title,
                            WhatTxts.PsicoterapiaEMDR.text
                        )}
                    />
				</div>
				<p className="pageText">
                    La psicoterapia sistemica considera i sintomi come messaggi che danno informazioni
                    sul mondo relazionale della persona. Scopo del percorso è quello “dar voce” alla sintomatologia,
                    cogliendone il significato e la funzione, così da poter rispondere in maniera diversa,
                    più efficace e sintonica,  alle difficoltà.
				</p>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel={this.state.modalTitle}
                    style={modalStyle}
                >
                    <img
                        src={this.state.modalImage}
                        alt=""
                    />
                    <h2>{this.state.modalTitle}</h2>
                    <p>
                        {this.state.modalText}
                    </p>
                </Modal>
			</div>
		);
	}
}
