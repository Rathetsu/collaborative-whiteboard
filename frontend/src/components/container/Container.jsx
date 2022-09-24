import React, { Component } from "react";

import Board from "../board/Board";

import './style.css';

class Container extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}


	render() {
		return (
			<div className="container">
				<div className="tool-bar-container">

				</div>

				<div className="board-container">
					<Board />
				</div>


			</div>
		);
	}
}
export default Container;