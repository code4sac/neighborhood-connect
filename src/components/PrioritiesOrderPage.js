import React from "react";
import PriorityCard from "./PriorityCard";

export default class PrioritiesPage extends React.Component {
  // DUMMY DATA //

  state = {
    priorities: [
      {
        title: "Homelessness",
        rank: 1,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "
      },
      {
        title: "Crime",
        rank: 2,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        title: "Graffiti",
        rank: 3,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        title: "Speeding",
        rank: 4,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
        title: "Trash",
        rank: 5,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      }
    ]
  }

  // Takes index of priority to swap ranks, creating a new sorted array based on the rank, and seet state to new array
  promoteRank = (priorityIndex) => {
    const updatedState = {...this.state};
    if (priorityIndex >= 1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex;
      updatedState.priorities[priorityIndex-1].rank = priorityIndex + 1;
      let sortedData = updatedState.priorities.sort((a, b) => (a.rank > b.rank ? 1 : -1));
      this.setState({sortedData});
    }
    console.log("updated ^", updatedState.priorities);
  }
  
  demoteRank = (priorityIndex) => {
    const updatedState = {...this.state};
    if (priorityIndex < updatedState.priorities.length-1) {
      updatedState.priorities[priorityIndex].rank = priorityIndex + 2;
      updatedState.priorities[priorityIndex+1].rank = priorityIndex+1;
      let sortedData = updatedState.priorities.sort((a, b) => (a.rank > b.rank ? 1 : -1));
      this.setState({sortedData});
    }
    console.log("update V", updatedState.priorities);
  }

  render() {
    let sortedData = [...this.state.priorities].sort((a, b) => (a.rank > b.rank ? 1 : -1));
    console.log(sortedData);
    return (
      <div>
        <h1>Edit Priorities</h1>
        <div>
          <h2>Add New Priority</h2>
          <p>Noticed something new in your comunity?</p>
        </div>
        <div>
          <h2>Rearrange Priorities</h2>
          <p>Change the priority order by selecting the arrows.</p>
          <ul>
            {sortedData.map((priority, index) => {
              return (
                <li key={priority.title}>
                  <PriorityCard
                    rank={priority.rank}
                    title={priority.title}
                    description={priority.description}
                  />
                  <button onClick={() => {this.promoteRank(index)}}>^</button>
                  <button onClick={() => {this.demoteRank(index)}}>V</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
};