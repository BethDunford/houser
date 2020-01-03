import React, { Component } from "react";
import { Link } from "react-router-dom";
import House from '../House/House';
import axios from "axios";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            house: []
        };
        this.editHouse = this.editHouse.bind(this);
    }

    editHouse(id) {
        const { name, address, city, state, zip, img, mortgage, rent } = this.state;
        let body = {
            id,
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        };
        axios.put(`/api/house/${id}`, body).then(response => {
            this.props.updateHouses(response.data);
        });
        this.setState({
            editStatus : false
        })
    }



    render() {
        const houses = this.state.houses.map((house,i) => {
            return(
                <House
                key={i}
                name={house.name}
                address={house.address}
                city={house.city}
                state={house.state}
                zipcode={house.zipcode}
                />
            );
        });

        
        const DashboardDetail = ({ match }) => {
            console.log('match', match);
            return (
                <div className="Dashboard">
                <div>
                    <h1>
                        {match.params.dashboardId}
                    </h1>
                    <h2>
                        Home Listings
                    </h2>
                    <Link to="/wizard/step1">
                        <button className="add_button">Add New Property</button>
                    </Link>
                    <div className="card_container">{houses}</div>
                </div>
            </div>
        )
    }
    }
}

export default Dashboard;