import React from "react";
import Post from "./Post";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { seed, seed2 } from "./seed";

const PriorityDetailsWrapper = styled.div`
    .details {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .details__heading {
    }

    .details__number {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 1.6rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        border: 0.1rem solid lightgrey;
        margin-right: 0.5rem;
    }
`;

const API_PAST = "https://nameless-garden-17654.herokuapp.com";
const API_UPCOMING = "https://nameless-garden-17654.herokuapp.com";
const API_ADD = "https://whimsical.com/32AqWM2AASAS7Ja6fqTp9a";

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
        console.log("triggered");
        this.loadPast();
    }

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
        console.log(this.state.pastData);
        console.log(seed);

        let formedData;
        if (this.state.toggle === 1 && this.state.pastData) {
            formedData = this.state.pastData.map((post, index) => {
                return <Post data={post} index={index} key={index} />;
            });
        }

        if (this.state.toggle === 2 && this.state.upcomingData) {
            formedData = this.state.upcomingData.map((post, index) => {
                return <Post data={post} index={index} key={index} />;
            });
        }

        return (
            <PriorityDetailsWrapper>
                <div className="details">
                    <span className="details__number">1</span>
                    <h2 className="details__heading">Homelessness</h2>
                </div>
                <button onClick={() => this.loadPast()}>Past Events</button>
                <button onClick={() => this.loadUpcoming()}>Upcoming Events</button>
                <Link to="/addevent">
                    <button>Add Events</button>
                </Link>
                {formedData}
            </PriorityDetailsWrapper>
        );
    }
}
