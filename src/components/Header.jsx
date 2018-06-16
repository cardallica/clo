import React from 'react';
import { Link } from 'react-router-dom';
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
				<Link to="/chi-sono">
					Chi Sono
				</Link>
				<Link to="/cosa-faccio">
					Cosa Faccio
				</Link>
				<Link to="/psicologo">
					Lo Psicologo
				</Link>
				<Link to="/contatti">
					Contatti
				</Link> 
			</div>
		</nav>
	</header>
);


export default Header;