import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { WIZ_STEP_ONE } from '../../store';


class WizStepOne extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleNext = () => {
        store.dispatch({
            type: WIZ_STEP_ONE,
            payload: this.state
        });
    };


    render() {
        return (
            <div className="Wizard One forms">
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
                    value={this.state.address}
                    onChange={this.handleChange}
                />
                </div>
                <div className="input_container">
                <h2>City</h2>
                <input
                    value={this.state.city}
                    onChange={this.handleChange}
                />
                </div>
                <div className="input_container">
                <h2>State</h2>
                <input
                    value={this.state.state}
                    onChange={this.handleChange}
                />
                </div>
                <div className="input_container">
                <h2>Zip</h2>
                <input
                    value={this.state.zip}
                    onChange={this.handleChange}
                />
                <Link to="/wizard/step2">
                    <button className="next_button" onClick={this.handleNext}>Next Step</button>
                </Link>
                </div>
            </div>
        )
    }
}

export default WizStepOne;