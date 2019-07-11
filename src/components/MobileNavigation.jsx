import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../assets/ico_burger.png';
import Close from '../assets/Close_white.svg';

class MobileNavigation extends React.Component {
  render() {
    const {
      isOpen,
      toggleMenu,
    } = this.props;
    return (
      <Fragment>
        <div
          className={`mobileNavigation__icon ${isOpen ? 'open' : 'close'}`}
          onClick={toggleMenu}
        >
          <img
            src={isOpen ? Close : Burger}
            alt="-"
          />
        </div>
        { isOpen &&
          <div className="mobileNavigation__menu">
            <NavLink to="/chi-sono" onClick={toggleMenu}>
              Chi Sono
            </NavLink>
            <NavLink to="/cosa-faccio" onClick={toggleMenu}>
              Cosa Faccio
            </NavLink>
            <NavLink to="/psicologo" onClick={toggleMenu}>
              Lo Psicologo
            </NavLink>
            <NavLink to="/contatti" onClick={toggleMenu}>
              Contatti
            </NavLink>
          </div>
        }
      </Fragment>
    );
  }
}

export default MobileNavigation;
