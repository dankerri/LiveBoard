import React, { Component } from 'react'
import io from 'socket.io-client'
import THE_URL from './config'
const socket = io(THE_URL)


class Emu extends Component {
	constructor() {
		super();
		this.getRoom = this.getRoom.bind(this);
		this.getCode = this.getCode.bind(this);
		this.send = this.send.bind(this);
	}

	getRoom(e) {
		this.setState({
			room: e.target.value.toUpperCase()
		})
	}
	getCode(e) {
		this.setState({
			code: e.target.value
		})
	}
	send(e) {
		e.preventDefault()
		socket.emit('addScanner', this.state.room)
		socket.emit('updateCode', {
			room: this.state.room,
			code: this.state.code
		})
	}


	render() {
		return(
			<form onSubmit={this.send}>
				<input 
					type="text" 
					placeholder="input room"
					onChange={this.getRoom}
				/>

				<input
					type="text"
					placeholder="input code"
					onChange={this.getCode}
				/>

				<input 
					type="submit"
					value="update code"
				/>
			</form>
		)
	}
}

export default Emu