import React from 'react';
import { geolocated } from 'react-geolocated';
import DogsPage from './Components/Pages/Dogs';

class Geolocation extends React.Component {
	render() {
		return (
			<>
				{!this.props.isGeolocationAvailable ? (
					<div>Your browser does not support Geolocation</div>
				) : !this.props.isGeolocationEnabled ? (
					<div>Geolocation is not enabled</div>
				) : (
					<DogsPage geolocatoinData={this.props} />
				)}
			</>
		);
	}
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000,
	watchPosition: true
})(Geolocation);
