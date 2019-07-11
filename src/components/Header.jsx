import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
	}

	toggleMenu = () =>
		this.setState({ isOpen: !this.state.isOpen });

	closeMenu = () =>
		this.setState({ isOpen: false });

	render() {
		const {
			isOpen,
		} = this.state;

		return (
			<header className={`${isOpen ? 'mobileOpen' : 'mobileClose'}`}>
				<nav>
					<div className="mobileHeader">
						<Link
							className="logoLink"
							to="/"
							onClick={this.closeMenu}
						>
							<Logo/>
						</Link>
						<MobileNavigation
							isOpen={isOpen}
							toggleMenu={this.toggleMenu}
						/>
					</div>
					<div className="links">
						<NavLink to="/chi-sono" className="headerLink">
							Chi Sono
						</NavLink>
						<NavLink to="/cosa-faccio" className="headerLink">
							Cosa Faccio
						</NavLink>
						<NavLink to="/psicologo" className="headerLink">
							Lo Psicologo
						</NavLink>
						<NavLink to="/contatti" className="headerLink">
							Contatti
						</NavLink>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
