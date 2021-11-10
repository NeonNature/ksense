import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import '../src/assets/styles/scss/styles.scss';

import AnimatedSwitch from './assets/scripts/routes';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<AnimatedSwitch />
			</BrowserRouter>
		);
	}
}

export default App;