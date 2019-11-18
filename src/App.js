import React from 'react';
import './App.css';
import FoodPicker from './FoodPicker/FoodPicker';
import Clock from './Clock/Clock';
import Board from './Board/Board';
import Counter from './Counter/Counter';
import Car from './Car/Car';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isShown: true
      }
  }

  toggle() {
      this.setState({
          isShown: !this.state.isShown
      });
  }

  render() {
      return (
          <div className="App">
              <FoodPicker />

              <hr />

              <button onClick={this.toggle.bind(this)}>Toggle me</button>
              {this.state.isShown ? <Clock /> : null}

              <hr />

              <Board />

              <hr />

              <Counter />

              <hr />

              <Car />

              <hr />
          </div>
      );
  }

}

export default App;
