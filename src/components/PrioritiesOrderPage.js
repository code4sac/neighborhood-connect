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

  async updatePriorityRank(priorityIds) {
    // //priorityIds are an object with the two updated priorities
    // axios.post(`${apiUrl}/priorities/${priorityId1}/${rankId1}`);
    // const urls = [
    //   `${apiUrl}/priorities/${priorityId1}/${rankId1}`,
    //   `${apiUrl}/priorities/${priorityId2}/${rankId2}`
    // ];
    // // use map() to perform a fetch and handle the reponse for each url
    // Promise.all(
    //   urls.map((url, index) =>
    //     axios
    //       .patch(url)
    //       .then(() =>
    //         console.log(
    //           `Patched ${index === 1 ? "selected" : "replaced"} priority`
    //         )
    //       )
    //       .catch(() =>
    //         console.log(
    //           `Error patching ${index === 1 ? "selected" : "replaced"} priority`
    //         )
    //       )
    //   )
    // );
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
