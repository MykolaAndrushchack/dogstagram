import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = props => {
	const authorizated = true;
	return (
		<ul className='toolbar_navigation_list'>
			<li>
				<NavLink to='/my-dogs' onClick={props.onClick}>
					My dogs
				</NavLink>
			</li>
			<li>
				<NavLink to='/dogs' onClick={props.onClick}>
					Dogs
				</NavLink>
			</li>
			<li>
				{authorizated ? (
					<NavLink to='/logout' onClick={props.onClick}>
						Logout
					</NavLink>
				) : (
					<NavLink to='/login' onClick={props.onClick}>
						Login
					</NavLink>
				)}
			</li>
		</ul>
	);
};

export default Links;
