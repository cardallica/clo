import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';

const Header = (props) => (
	<header>
		<nav>
			<div className="mobileHeader">
				<Link
					className="logoLink"
					to="/"
				>
					<Logo />
				</Link>
				<MobileNavigation />
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


export default Header;
