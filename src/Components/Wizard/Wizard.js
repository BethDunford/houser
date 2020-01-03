import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import WizStepOne from "./WizStepOne";
import WizStepTwo from "./WizStepTwo";
import WizStepThree from "./WizStepThree";
import routes from "../../routes";
import store, { CLEAR_FIELDS } from '../../store';


class Wizard extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState();
        this.state = {
            houses: reduxState.houses
        }
    }

    handleCancel = () => {
        store.dispatch({
            type: CLEAR_FIELDS
        });
    };

    render() {
        return (
            <div className="Wizard forms">
                <h1>Add New Listing</h1>
                <Route>
                    <div className="Wizard Steps">
                        <WizStepOne />
                        <WizStepTwo />
                        <WizStepThree />
                        {routes}
                    </div>
                </Route>
                <Link exact path="/">
                    <button className="cancel_button" onClick={this.handleCancel}>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;