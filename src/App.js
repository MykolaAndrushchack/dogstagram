import React from 'react';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import RouteNav from './Components/Routes/Route';
import { Container } from 'semantic-ui-react';

class App extends React.Component {
	state = {
		sideDrawerOpen: false
	};

	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandle = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		return (
			<div style={{ height: '100%' }}>
				<Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
				<SideDrawer
					show={this.state.sideDrawerOpen}
					click={this.backdropClickHandle}
				/>
				{this.state.sideDrawerOpen && (
					<Backdrop click={this.backdropClickHandle} />
				)}
				<Container>
					<RouteNav />
				</Container>
			</div>
		);
	}
}

export default App;
