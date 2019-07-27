import React from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import PriorityCard from "./PriorityCard";
import Header from './Header';
import LocationHolder from "./LocationHolder";
import { apiUrl } from '../config';

export default class PrioritiesOrderPage extends React.Component {

  state = {
    priorities: []
  }

  componentDidMount() {
    const fetchPriorities = async () => {
      const res = await axios.get(
        `${apiUrl}/priorities/orgs/${this.props.orgId}`
      )
      this.setState({ priorities: res.data })
    }
    fetchPriorities();
  }
  // Takes index of priority to swap ranks, creating a new sorted array based on the rank, and seet state to new array
  promoteRank = (priorityIndex) => {
    const updatedState = { ...this.state };
    if (priorityIndex >= 1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex;
      updatedState.priorities[priorityIndex - 1].rank = priorityIndex + 1;
      let sortedData = updatedState.priorities.sort((a, b) => (a.rank > b.rank ? 1 : -1));
      this.setState({ sortedData });
    }
  }

  demoteRank = (priorityIndex) => {
    const updatedState = { ...this.state };
    if (priorityIndex < updatedState.priorities.length - 1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex + 2;
      updatedState.priorities[priorityIndex + 1].rank = priorityIndex + 1;
      let sortedData = updatedState.priorities.sort((a, b) => (a.rank > b.rank ? 1 : -1));
      this.setState({ sortedData });
    }
  }

  render() {
    let sortedData = [...this.state.priorities].sort((a, b) => (a.rank > b.rank ? 1 : -1));
    let sortedDataList = sortedData.map((priority, index) => {
      return (
        <li key={priority.id}>
          <PriorityCard
            id={priority.id}
            rank={priority.rank}
            type={priority.prioritytype}
            description={priority.description}
            promote={() => {
              this.promoteRank(index);
            }}
            demote={() => {
              this.demoteRank(index);
            }}
            location={this.props.location.pathname}
          />
        </li>
      );
    });
    //temporarily turned this off to allow for easier development, not having to constantly select a neighborhood
    // if (this.props.orgId === null) return <Redirect to='/selectNeighborhood' />
    return (
      <div>
        <Header title={"Edit Priorities"} />
        <LocationHolder hood={this.props.neighborhood} />
        <div className='prioritiesPage'>
          <ul>
            {sortedDataList}
          </ul>
        </div>
      </div>
    )
  }
};

PrioritiesOrderPage.propTypes = {
  neighborhood: PropTypes.string,
  orgId: PropTypes.number,
}