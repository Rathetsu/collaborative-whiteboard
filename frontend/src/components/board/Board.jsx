import React, { Component } from "react";

import './style.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<canvas className={'board'} id={'board'}>

			</canvas>
		);
	}

}
export default Board;