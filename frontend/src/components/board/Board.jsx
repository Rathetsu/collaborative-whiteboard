import React, { Component } from "react";

import { Canvas } from '../Canvas';
import './style.css';

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Canvas />
		);
	}

}
export default Board;