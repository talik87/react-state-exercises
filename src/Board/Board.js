import React, { Component } from 'react';
import './Board.css';

/**
 * There are 3 boards. They all have a blue border.
 * Your task:
 * When clicking on one of the boards, the following should happen:
 * 1. The board you clicked on should have a red border color
 * 2. The other boards will return to their usual color (blue).
 */

class Board extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toggle1: false,
			toggle2: false,
			toggle3: false
		}
	}
	clickHandler1() {
		this.setState({
			toggle1:!this.state.toggle1
		});
	}
	clickHandler2() {
		this.setState({
			toggle2:!this.state.toggle2
		});
	}
	clickHandler3() {
		this.setState({
			toggle3:!this.state.toggle3
		});
	}
	render() {
		const color1 = this.state.toggle1? "Board-option2":"Board-option";
		const color2 = this.state.toggle2? "Board-option2":"Board-option";
		const color3 = this.state.toggle3? "Board-option2":"Board-option";
		return (
			<div className="Board">
				<h1>Choose board:</h1>
				<div className="boards">
					<div className={color1} onClick={this.clickHandler1.bind(this)}>1</div>
					<div className={color2} onClick={this.clickHandler2.bind(this)}>2</div>
					<div className={color3} onClick={this.clickHandler3.bind(this)}>3</div>
				</div>
			</div>
		);
	}
}

export default Board;