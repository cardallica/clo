import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../assets/ico_burger.png';
import Close from '../assets/Close_white.svg';

class MobileNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  toggleMenu = () =>
    this.setState({ isOpen: !this.state.isOpen });

  render() {
    const {
      isOpen,
    } = this.state;
    return (
      <Fragment>
        <div
          className={`mobileNavigation__icon ${isOpen ? 'open' : 'close'}`}
          onClick={this.toggleMenu}
        >
          <img
            src={isOpen ? Close : Burger}
            alt="-"
          />
        </div>
        { this.state.isOpen &&
          <div className="mobileNavigation__menu">
            <NavLink to="/chi-sono" onClick={this.toggleMenu}>
              Chi Sono
            </NavLink>
            <NavLink to="/cosa-faccio" onClick={this.toggleMenu}>
              Cosa Faccio
            </NavLink>
            <NavLink to="/psicologo" onClick={this.toggleMenu}>
              Lo Psicologo
            </NavLink>
            <NavLink to="/contatti" onClick={this.toggleMenu}>
              Contatti
            </NavLink>
          </div>
        }
      </Fragment>
    );
  }
}

export default MobileNavigation;
