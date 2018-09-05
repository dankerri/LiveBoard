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
			res: ' '
		}
		this.searchRoom = this.searchRoom.bind(this)
		this.handleChange = this.handleChange.bind(this);
	}

	searchRoom(e) {
		e.preventDefault()
		socket.emit('check', this.state.room)
	}

	handleChange(e) {
		this.setState({
			room: e.target.value.toUpperCase()
		})
	}

	render() {
		socket.on('exist', (res)=> {
			this.props.history.replace('/LiveBoard/'+this.state.room);
		})
		socket.on('unexist', (res)=>{
			this.setState({
				res: res
			})
		})
		
		return(
			<div className="searchBar">
			<form onSubmit={this.searchRoom}>
    		<input 
    		 type="text" 
    		 placeholder="Input classroom number"
    		 onChange={this.handleChange}/>
    		<input  
    		 type="submit" 
    		 value="search"/>
    	</form>

    	<h1>{this.state.res}</h1>
    	</div>
		)
	}
}