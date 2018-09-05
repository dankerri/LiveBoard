import React, { Component } from 'react';
import QRCode from 'qrcode';
import io from 'socket.io-client';
// self component
import theUrl from './config';
const socket = io(theUrl)


class LiveBoard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			code: 'wait a moument',
			room: this.props.match.params.id
		}
	}
	
	componentDidMount() {
		// join the room
		socket.emit('addUser', this.state.room)
	}

	generateCode() {
			// generate qrcode
			var canvas = document.getElementById('canvas')

			QRCode.toCanvas(canvas, this.state.code, function (error) {
			  if (error) console.error(error)
			})
	}

	render() {
		socket.on('newCode', code=>{
			this.setState({
				code: code
			})

			this.generateCode()
		})
		return(
			<div>
				<h1>{this.state.room.toUpperCase()}</h1>
				<canvas id="canvas"></canvas>
				<p className="title">{this.state.code}</p>
			</div>
		)
	}
}

export default LiveBoard