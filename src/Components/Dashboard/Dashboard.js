import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import House from '../House/House';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <div>
                    <h1>
                        Dashboard
                    </h1>
                    <Link to="/wizard">
                        <button className="add_button">Add New Property</button>
                    </Link>
                </div>
                <div>
                    <House />
                </div>
            </div>
        )
    }
}

export default Dashboard;