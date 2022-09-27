import React, { Component } from "react";
import io from 'socket.io-client';

import Board from "../board/Board";

import './style.css';


let URL = 'http://localhost:4130' // 

class Container extends Component {

	socket = io(URL);

	constructor(props) {
		super(props);
		this.state = {
			strokeColor: '#000000',
			strokeWidth: 3,
		};
	}

	onStroke = (stroke) => {
		// export an image from the canvas and returns a promise which resolves to base64 data URL of the sketch
		stroke.exportImage().then((dataUrl) => {
			this.socket.emit('canvas-data', dataUrl)
		});
	}


	render() {
		return (
			<div className="container">
				<div className="tool-bar-container">

				</div>

				<div className="board-container">
					<Board
						strokeColor={this.state.strokeColor}
						strokeWidth={this.state.strokeWidth}
						onStroke={this.onStroke}
					/>
				</div>


			</div>
		);
	}
}
export default Container;