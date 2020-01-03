import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { WIZ_STEP_TWO, WIZ_STEP_ONE } from '../../store';


class WizStepTwo extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            imgUrl: reduxState.imgUrl
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({
                imgUrl: reduxState.imgUrl
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
            type: WIZ_STEP_TWO,
            payload: this.state
        });
    };

    handlePrevious = () => {
        store.dispatch({
            type: WIZ_STEP_ONE,
            payload: this.state
        })
    }

    render() {
        return (
            <div className="Wizard two forms">
                <div className="input_container">
                <h2>Property Name</h2>
                <input
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                </div>
                <Link to="/wizard/step1">
                    <button className="previous_button" onClick={this.handlePrevious}>Previous</button>
                </Link>
                <Link to="/wizard/step3">
                    <button className="next_button" onClick={this.handleNext}>Next</button>
                </Link>
            </div>
        )
    }
}

export default WizStepTwo;