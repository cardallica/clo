import React from 'react';
import Modal from 'react-modal';

import BulletPortrait from './BulletPortrait';

import Coppia from '../assets/what/coppia.png';
import EMDR from '../assets/what/EMDR.png';
import Famiglia from '../assets/what/famiglia.png';
import Gravidanza from '../assets/what/gravidanza.png';
import Individuale from '../assets/what/individuale.png';
import PMA from '../assets/what/PMA.png';
import Puerperio from '../assets/what/puerperio.png';
import Sostegno from '../assets/what/sostegno.png';

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
		return (
			<div className="what page">
				<h2 className="pageTitle">Modalità di intervento</h2>
				<p className="pageText">
					Queste sono alcune delle situazioni che, più spesso, portano a chiedere una consulenza o un percorso di psicoterapia:
				</p>
				<div className="bullets">
					<BulletPortrait
              image={Sostegno}
              caption={WhatTxts.ConsulenzaESostegnoPsicologico.title}
              onClick={() => this.openModal(
                  Sostegno,
                  WhatTxts.ConsulenzaESostegnoPsicologico.title,
                  WhatTxts.ConsulenzaESostegnoPsicologico.text
              )}
          />
          <BulletPortrait
              image={Individuale}
              caption={WhatTxts.PsicoTerapiaIndividuale.title}
              onClick={() => this.openModal(
                  Individuale,
                  WhatTxts.PsicoTerapiaIndividuale.title,
                  WhatTxts.PsicoTerapiaIndividuale.text
              )}
          />
					<BulletPortrait
                image={Coppia}
                caption={WhatTxts.PsicoterapiaDiCoppia.title}
                onClick={() => this.openModal(
                    Coppia,
                    WhatTxts.PsicoterapiaDiCoppia.title,
                    WhatTxts.PsicoterapiaDiCoppia.text
                )}
            />
            <BulletPortrait
                image={Famiglia}
                caption={WhatTxts.PsicoterapiaFamiliare.title}
                onClick={() => this.openModal(
                  Famiglia,
                    WhatTxts.PsicoterapiaFamiliare.title,
                    WhatTxts.PsicoterapiaFamiliare.text
                )}
            />
            <BulletPortrait
                image={Gravidanza}
                caption={WhatTxts.SupportoAllaGravidanza.title}
                onClick={() => this.openModal(
                  Gravidanza,
                    WhatTxts.SupportoAllaGravidanza.title,
                    WhatTxts.SupportoAllaGravidanza.text
                )}
            />
            <BulletPortrait
                image={Puerperio}
                caption={WhatTxts.SupportoNelPuerperio.title}
                onClick={() => this.openModal(
                  Puerperio,
                    WhatTxts.SupportoNelPuerperio.title,
                    WhatTxts.SupportoNelPuerperio.text
                )}
            />
            <BulletPortrait
                image={PMA}
                caption={WhatTxts.SostegnoInfertilita.title}
                onClick={() => this.openModal(
                  PMA,
                    WhatTxts.SostegnoInfertilita.title,
                    WhatTxts.SostegnoInfertilita.text
                )}
            />
            <BulletPortrait
                image={EMDR}
                caption={WhatTxts.PsicoterapiaEMDR.title}
                onClick={() => this.openModal(
                  EMDR,
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
            className="modal"
          >
            <img
              className="modal__close"
              src=""
              alt="X"
              onClick={this.closeModal}
            />
            <img
                src={this.state.modalImage}
                alt=""
                className="modal__icon"
            />
            <h2 className="modal__title">{this.state.modalTitle}</h2>
            <p className="modal__text">
                {this.state.modalText}
            </p>
          </Modal>
			</div>
		);
	}
}
