import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../assets/ico_burger.png';

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
    return (
      <Fragment>
        <div
          className="mobileNavigation__icon"
          onClick={this.toggleMenu}
        >
          <img
            src={Burger}
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
