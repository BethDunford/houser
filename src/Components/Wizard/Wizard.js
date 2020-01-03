import React, { Component } from "react";
import { Link } from "react-router-dom";
// import express from "express";
// import axios from "axios";
// import { render } from "@testing-library/react";
// import store from '../../store';


class Wizard extends Component {
    constructor(props) {
        super(props);
        // const reduxState = store.getState();
        this.state = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        }
    }

    handleNameChange(nameVal) {
        this.setState({
            name: nameVal
        });
    }

    handleAddressChange(nameVal) {
        this.setState({
            address: nameVal
        });
    }

    handleCityChange(nameVal) {
        this.setState({
            city: nameVal
        });
    }

    handleStateChange(nameVal) {
        this.setState({
            state: nameVal
        });
    }

    handleZipChange(numVal) {
        this.setState({
            zipcode: numVal
        })
    }


    render() {
        return (
            <div className="Wizard forms">
                <h1>Add New Listing</h1>
                <div className="input_container">
                <h2>Property Name</h2>
                <input
                    value={this.state.name}
                    onChange={e => this.handleNameChange(e.target.value)}
                />
                </div>
                <div className="input_container">
                <h2>Address</h2>
                <input
                    value={this.state.name}
                    onChange={e => this.handleAddressChange(e.target.value)}
                />
                </div>
                <div className="input_container">
                <h2>City</h2>
                <input
                    value={this.state.name}
                    onChange={e => this.handleCityChange(e.target.value)}
                />
                </div>
                <div className="input_container">
                <h2>State</h2>
                <input
                    value={this.state.name}
                    onChange={e => this.handleStateChange(e.target.value)}
                />
                </div>
                <div className="input_container">
                <h2>Zip</h2>
                <input
                    value={this.state.name}
                    onChange={e => this.handleZipChange(e.target.value)}
                />
                </div>
                <Link to="/">
                    <button className="cancel_button">Cancel</button>
                </Link>
            </div>
        )
    }
}

export default Wizard;


// Now that routing is setup, the first thing you will do is set up the form in the Wizard View.

// Set up initial state in Wizard for name, address, city, state, and zipcode.
// Create a corresponding input box in the JSX for each property in state.
// Set up the input boxes to update the correct piece of state on change.