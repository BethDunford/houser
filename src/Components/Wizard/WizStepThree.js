import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { WIZ_STEP_THREE } from '../../store';


class WizStepThree extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleComplete = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handlePrevious = () => {
        store.dispatch({
            type: WIZ_STEP_THREE,
            payload: this.state
        })
    }

    render() {
        return (
            <div className="Wizard three forms">
                <div className="input_container">
                <h2>Property Name</h2>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                </div>
                <div className="input_container">
                <h2>Address</h2>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                </div>
                <Link exact path="/">
                    <button className="complete_button" onClick={this.handleComplete}>Complete</button>
                </Link>
                <Link to="/wizard/step2">
                    <button className="previous_button" onClick={this.handlePrevious}>Previous Step</button>
                </Link>
            </div>
        )
    }
}

export default WizStepThree;