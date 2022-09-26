import React, { Component } from "react";

import Board from "../board/Board";

import './style.css';

class Container extends Component {

	constructor(props) {
		super(props);
		this.state = {
			strokeColor: '#000000',
			strokeWidth: 3,
		};
	}

	onStroke = (stroke) => {
		// export an image from the canvas and returns a promise which resolves to base64 data URL of the sketch
		// stroke.exportImage().then((dataUrl) => {
		// 	console.log(dataUrl);
		// });
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