import React from "react";
import PriorityCard from "./PriorityCard";
import Header from './Header';
import LocationHolder from "./LocationHolder";

import edit from "../assets/edit.svg";

export default class PrioritiesOrderPage extends React.Component {
  // DUMMY DATA //

  state = {
    priorities: [
      {
        type: "Homelessness",
        priorityId: '00001', //this should be a UID sent form the db
        rank: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "
      },
      {
        type: "Crime",
        priorityId: '00002',
        rank: 2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        type: "Graffiti",
        priorityId: '00003',
        rank: 3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        type: "Speeding",
        priorityId: '00004',
        rank: 4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        type: "Trash",
        priorityId: '00005',
        rank: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      }
    ]
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
    return (
      <div>
        <Header title={"Priorities"} optionIcon={edit} option={"/editPriorities"} optionName={"Edit Priorities"} />
        <LocationHolder hood={"neighborhood"} />
        <div>
          <h2 style={{ color: '#6A81AC' }}>Rearrange Priorities</h2>
          <ul>
            {sortedData.map((priority, index) => {
              return (
                <li key={priority.priorityId}>
                  <PriorityCard
                    rank={priority.rank}
                    type={priority.type}
                    description={priority.description}
                    promote={() => { this.promoteRank(index) }}
                    demote={() => { this.demoteRank(index) }}
                    location={this.props.location.pathname}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
};