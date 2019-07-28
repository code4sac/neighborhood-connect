import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Redirect } from "react-router-dom";

import PriorityCard from "./PriorityCard";
import Header from "./Header";
import LocationHolder from "./LocationHolder";
import { apiUrl } from "../config";

export default class PrioritiesOrderPage extends React.Component {
  state = {
    priorities: [],
    prioritiesFetched: false
  };

  componentDidMount() {
    this.fetchPriorities();
  }

  async fetchPriorities() {
    let updatedState = { ...this.state };
    const res = await axios.get(
      `${apiUrl}/priorities/orgs/${this.props.orgId}`
    );
    updatedState.priorities = res.data;
    updatedState.prioritiesFetched = true;
    this.setState(updatedState);
  }
  // Takes index of priority to swap ranks, creating a new sorted array based on the rank, and seet state to new array
  promoteRank = priorityIndex => {
    const updatedState = { ...this.state };
    if (priorityIndex >= 1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex;
      updatedState.priorities[priorityIndex - 1].rank = priorityIndex + 1;
      let sortedData = updatedState.priorities.sort((a, b) =>
        a.rank > b.rank ? 1 : -1
      );
      this.setState({ sortedData });
    }
  };
  // promote ex: 3 => 2.
  async johnsPromoteRank(priorityIdx) {
    const state = { ...this.state };
    // new ranks for the two priorities that are affected by promotion.
    const promotedRank = priorityIdx - 2; // 2
    const demotedRank = priorityIdx - 1; // 3

    // priorities id's for the two priorities affected by promotion
    const promotedId = state.priorities[priorityIdx].id;
    const demotedId = state.priorities[priorityIdx - 1].id;

    try {
      await this.updatePriorityRank(
        promotedId,
        demotedId,
        promotedRank,
        demotedRank
      );
      await this.fetchPriorities();
    } catch (err) {
      // some sort of error handeling
      console.log(err);
    }
  }

  // promote ex: 2 => 3 (base 10
  async johnsDemoteRank(priorityIdx) {
    const state = { ...this.state };
    // range(1-5)new ranks for the two priorities that are affected by promotion.
    const demotedRank = priorityIdx + 2; // 3
    const promotedRank = priorityIdx + 1; // 2

    // priorities id's for the two priorities affected by promotion
    const promotedId = state.priorities[priorityIdx + 1].id;
    const demotedId = state.priorities[priorityIdx].id;
    try {
      await this.updatePriorityRank(
        promotedId,
        demotedId,
        promotedRank,
        demotedRank
      );
      // await this.fetchPriorities();
    } catch (err) {
      // some sort of error handeling
      console.log(err);
    }
  }
  demoteRank = priorityIndex => {
    const updatedState = { ...this.state };
    if (priorityIndex < updatedState.priorities.length - 1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex + 2;
      updatedState.priorities[priorityIndex + 1].rank = priorityIndex + 1;
      let sortedData = updatedState.priorities.sort((a, b) =>
        a.rank > b.rank ? 1 : -1
      );
      console.log("this is the sorted data: ", sortedData);
    }
  };

  async updatePriorityRank(promotedId, demotedId, promotedRank, demotedRank) {
    const body = {
      promotedId: promotedId,
      demotedId: demotedId,
      promotedRank: promotedRank,
      demotedRank: demotedRank
    };
    await axios.post(`${apiUrl}/priorities/updateRank`, body);
  }

  render() {
    let sortedData = [...this.state.priorities].sort((a, b) =>
      a.rank > b.rank ? 1 : -1
    );
    let sortedDataList = sortedData.map((priority, index) => {
      return (
        <li key={priority.id}>
          <PriorityCard
            id={priority.id}
            rank={priority.rank}
            type={priority.prioritytype}
            description={priority.description}
            promote={() => {
              this.johnsPromoteRank(index);
            }}
            demote={() => {
              this.johnsDemoteRank(index);
            }}
            location={this.props.location.pathname}
          />
        </li>
      );
    });

    if (this.props.orgId === null) return <Redirect to="/selectNeighborhood" />;
    return (
      <div>
        <Header title={"Edit Priorities"} />
        <LocationHolder hood={this.props.neighborhood} />
        <div className="prioritiesPage">
          <ul>{sortedDataList}</ul>
        </div>
      </div>
    );
  }
}

PrioritiesOrderPage.propTypes = {
  neighborhood: PropTypes.string,
  orgId: PropTypes.number
};
