import React from "react";
import Action from "./Action";
// import { Link } from "react-router-dom";
import { seed, seed2 } from "./seed";
import Header from "./Header";
import edit from "../assets/edit.svg";

//Test endpoints for GET requests
// const API_PAST = "https://nameless-garden-17654.herokuapp.com";
// const API_UPCOMING = "https://nameless-garden-17654.herokuapp.com";
// const API_ADD = "https://whimsical.com/32AqWM2AASAS7Ja6fqTp9a";

export default class PriorityDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pastData: [],
            upcomingData: [],
            addEvent: {},
            toggle: 1
        };
    }

    componentDidMount() {
        this.loadPast();
    }

    //Currently mocking API data with seed data
    loadPast() {
        this.setState({
            pastData: seed,
            toggle: 1
        });
    }

    loadUpcoming() {
        this.setState({
            upcomingData: seed2,
            toggle: 2
        });
    }

    //Actual AJAX requests for backend API

    // loadPast() {
    //   return fetch(API_PAST)
    //     .then(res => {
    //       if(!res.ok) {
    //         return Promise.reject(res.statusText);
    //       }
    //       return res.json();
    //     })
    //     .then(response => {
    //       this.setState({
    //         pastData: response
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

    // loadUpcoming() {
    //   return fetch(API_UPCOMING)
    //     .then(res => {
    //       if(!res.ok) {
    //         return Promise.reject(res.statusText);
    //       }
    //       return res.json();
    //     })
    //     .then(response => {
    //       this.setState({
    //         upcomingData: response
    //       });
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }

    render() {

        //Render Conditionally for Past or Current events, not sure if still needed
        let formedData;
        if (this.state.toggle === 1 && this.state.pastData) {
            formedData = this.state.pastData.map((post, index) => {
                return <Action data={post} index={index} key={index} />;
            });
        }

        if (this.state.toggle === 2 && this.state.upcomingData) {
            formedData = this.state.upcomingData.map((post, index) => {
                return <Action data={post} index={index} key={index} />;
            });
        }

        return (
            <div>
                <Header title={"Priorities"} optionIcon={edit} option={"/addNewEvent"} optionName={"Add Event"} />
                <div className="details">
                    <div>
                        <h2 className="heading-secondary">Events</h2>
                    </div>
                    <button onClick={() => this.loadPast()}>Past Events</button>
                    <button onClick={() => this.loadUpcoming()}>Upcoming Events</button>
                    {formedData}
                </div>
            </div>
        );
    }
}
