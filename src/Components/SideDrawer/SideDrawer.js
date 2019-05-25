import React from 'react';

import './SideDrawer.css';
import Links from '../Links/Links';

const SideDrawer = props => {
	return (
		<nav className={props.show ? 'side-drawer open' : 'side-drawer'}>
			<Links onClick={props.click} />
		</nav>
	);
};

export default SideDrawer;
