import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = (props) => (
	<header>
		<nav>
			<Link
			className="logoLink"
				to="/"
			>	
				<Logo />
			</Link>
			<div className="links">
				<NavLink to="/chi-sono">
					Chi Sono
				</NavLink>
				<NavLink to="/cosa-faccio">
					Cosa Faccio
				</NavLink>
				<NavLink to="/psicologo">
					Lo Psicologo
				</NavLink>
				<NavLink to="/contatti">
					Contatti
				</NavLink>
			</div>
		</nav>
	</header>
);


export default Header;