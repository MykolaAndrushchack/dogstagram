import React from 'react';
import { NavLink } from 'react-router-dom';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import Links from '../Links/Links';

const Toolbar = props => (
	<header className='toolbar'>
		<nav className='toolbar_navigation'>
			<div className='toolbar_toggle_button'>
				<DrawerToggleButton click={props.drawerClickHandler} />
			</div>
			<div className='toolbar_logo'>
				<NavLink to='/dogs'>Dogstagram</NavLink>
			</div>
			<div className='spacer' />
			<div className='toolbar_navigation_items'>
				<Links />
			</div>
		</nav>
	</header>
);

export default Toolbar;
