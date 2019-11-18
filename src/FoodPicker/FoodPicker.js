import React, { Component } from 'react';
import './FoodPicker.css';
/**
 * See the component below? there are 4 fields: name, restaurant, meal and desert.
 * Once the user changes the form, it should be reflected on the "Your reservation" paragraph.
 */

class FoodPicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			restaurant:"",
			meal:"",
			desert:false
		}
	}
	desertTypeHandler(e) {
        this.setState({
			desert: !this.state.desert
        });
    }
	nameTypeHandler(e) {
        this.setState({
            name: e.target.value
        });
    }
	resTypeHandler(e) {
        this.setState({
            restaurant: e.target.value
        });
    }
	mealTypeHandler(e) {
        this.setState({
            meal: e.target.value
        });
    }
	render() {
		const cls = this.state.desert? "":"desert";
		return (
			<div>
				<h1>Order special meal:</h1>
				<div>
					Your name:
					<input onKeyUp={this.nameTypeHandler.bind(this)} type="text" />
				</div>
				<div>
					Choose restaurant:
					<select onChange={this.resTypeHandler.bind(this)}>
						<option value="Frangelico">Frangelico</option>
						<option value="Mina Tomei">Mina Tomei</option>
						<option value="Rak Basar">Rak Basar</option>
						<option value="Texas BBQ">Texas BBQ</option>
					</select>
				</div>
				<div>
					Favorite meal:
					<input onKeyUp={this.mealTypeHandler.bind(this)} type="text" />
				</div>
				<div>
					Want a desert?
					<input onClick={this.desertTypeHandler.bind(this)} type="checkbox" />
				</div>

				<div>
					<h2>Your reservation:</h2>
					Hi {this.state.name}! <br />
					We are glad you want to reserve a table at {this.state.restaurant}.<br />
					We will make sure that your favorite meal, {this.state.meal} is available.<br />
					<span className={cls}>Additionally, our chef will make a special desert for you!</span><br />
				</div>
			</div>
		);
	}
}

export default FoodPicker;