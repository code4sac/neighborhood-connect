import React from "react";
import { Redirect } from "react-router-dom";
import PriorityCard from "./PriorityCard";

const PrioritiesPage = ({ neighborhood, setNeighborhood }) => {
  // DUMMY DATA //
  const priorities = [
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
  ];

  const renderPriority = ({ title, rank, description }) => {
    return <PriorityCard title={title} rank={rank} description={description} />;
  };

  const selectLocation = () => {
    return <Redirect to={"/selectNeighborhood"} />
  }

  return (
    <div>
      <h1>Priorities for {neighborhood}</h1>
      <button onClick={
        () => selectLocation()
        }>Change Location</button>
      <div>
        <ul>
          <li>
            <PriorityCard
              rank={1}
              title={"Homelessness"}
              description={"blah blah blah"}
            />
          </li>
          <li>
            <PriorityCard
              rank={2}
              title={"Graffiti"}
              description={"blah blah blah"}
            />
          </li>
          <li>
            <PriorityCard
              rank={3}
              title={"Crime"}
              description={"blah blah blah"}
            />
          </li>
          <li>
            <PriorityCard
              rank={4}
              title={"Trash"}
              description={"blah blah blah"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrioritiesPage;
