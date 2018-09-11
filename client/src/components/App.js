import React from 'react'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'
// self component
import ChooseRoom from './chooseRoom'
import LiveBoard from './liveBoard'
// style
import '../css/App.css'

const App = () => (
	<Router>
		
		<div>
			<Route exact path="/" component={ChooseRoom} />
			<Route path="/LiveBoard/:id" component={LiveBoard} />
		</div>

	</Router>
)

export default App;
