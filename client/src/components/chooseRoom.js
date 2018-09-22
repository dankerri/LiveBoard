import React, { Component } from 'react';
import io from 'socket.io-client';
// self component
import THE_URL from './config';
const socket = io(THE_URL);


export default class ChooseRoom extends Component {
	
	constructor() {

		super()
		this.state = {
			room: ' ',
			res: ' ',
		}
		this.searchRoom = this.searchRoom.bind(this)
		this.handleChange = this.handleChange.bind(this);
	}

	searchRoom(e) {
		e.preventDefault()
		socket.emit('sitdown', this.state.room.toUpperCase())
	}

	handleChange(e) {
		this.setState({
			room: e.target.value
		})
	}

	render() {
		socket.on('exist', (res)=> {
			this.props.history.replace('/LiveBoard/'+this.state.room);
		})
		
		return(
		<div className="searchBar">
			<form onSubmit={this.searchRoom}>
	  		<input
					 className="theText" 
	    		 type="text" 
	    		 placeholder="Input ROOM number"
	    		 onChange={this.handleChange}/>
	  		<input
		 			className="theButton"  
	  		 	type="submit" 
	  		 	value="search"/>
	    </form>

			<p>{this.state.res}</p>
			<a href="./scanner.apk" download>> Get Scanner App</a>
			<a href="./tips.html"> > Learn how to use LiveBoard :) </a>
    </div>

		)
	}
}

