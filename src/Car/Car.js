import React, { Component } from 'react';
import './Car.css';

/**
 * Your task:
 * When the user chooses a color from the list,
 * you should change the element `Car-color` background color accordingly.
 */

class Car extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: ""
		}
	}
	colorChanger(e) {
		console.log(e);
		this.setState({
			color: e.target.value
		});
	}
	render() {
		let cls = this.state.color;
		switch (cls) {
			case "blue":
			  cls = "Car-blue";
			  break;
			case "green":
			  cls = "Car-green";
			  break;
			case "yellow":
			  cls = "Car-yellow";
			  break;
			case "red":
			  cls = "Car-red";
			  break;
			default:
			  cls = "Car-silver";
		  }
		return (
			<div>
				<h1>Choose a color for your car:</h1>
				<select onChange= {this.colorChanger.bind(this)}>
					<option value="silver" >silver</option>
					<option value="red" >red</option>
					<option value="blue" >blue</option>
					<option value="yellow">yellow</option>
					<option value="green" >green</option>
				</select>
				<br />
				<br />
				<div className={cls}>Color example</div>
			</div>
		);
	}
}

export default Car;