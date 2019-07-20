import React from "react";
import Post from "./Post";
import styled from "styled-components";

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
        margin-right: .5rem;
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
      addEvent: {}
    }
  }

  componentDidMount() {
    this.loadPast();
  }
  
  loadPast() {
    return fetch(API_PAST)
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(response => {
        this.setState({
          pastData: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  loadUpcoming() {
    return fetch(API_UPCOMING)
      .then(res => {
        if(!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(response => {
        this.setState({
          upcomingData: response
        });
      })
      .catch(err => {
        console.log(err);
      });
  }



  render() {
    console.log(this.state.pastData);
    return (
        <PriorityDetailsWrapper>
            <div className="details">
              <span className="details__number">1</span><h2 className="details__heading">Homelessness</h2>
            </div>
            <button onClick={() =>this.loadPast()}>Past Events</button>
            <button onClick={() => this.loadUpcoming()}>Upcoming Events</button>
            <button>Add Events</button>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </PriorityDetailsWrapper>
    );
  }
}
