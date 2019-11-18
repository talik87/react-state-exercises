import React, { Component } from 'react';

/**
 * Make a clock component that updates every second!
 * It should look like in the attached image: src/Clock/clock.gif
 * Open the image to see the animation.
 */

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: this.getTime()
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({date: this.getTime()});
            console.log('hey');
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    getTime() {
        return (new Date()).toString();
    }

    render() {
        return (
            <div >
                <h1>Clock</h1>
                <span>The time is: {this.state.date}</span>
            </div>
        );
    }
}

export default Clock;