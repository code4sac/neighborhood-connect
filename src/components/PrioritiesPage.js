import React from "react";
import PriorityCard from "./PriorityCard";
import Header from './Header';
import edit from "../assets/edit.svg";


const PrioritiesPage = ({ neighborhood, setNeighborhood }) => {
  // DUMMY DATA //
  const priorities = [
      {
          title: "Homelessness",
          tag: "Homelessness",
          rank: 1,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. "
      },
      {
          title: "Crime",
          tag: "Homelessness",
          rank: 2,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
          title: "Graffiti",
          tag: "Homelessness",
          rank: 3,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
          title: "Speeding",
          tag: "Homelessness",
          rank: 4,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      },
      {
          title: "Trash",
          tag: "Homelessness",
          rank: 5,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      }
  ];

  const renderPriority = ({ title, rank, description }) => {
    return <PriorityCard title={title} rank={rank} description={description} />;
  };

  return (
    <div>
    <Header title={"Priorities"} optionIcon={edit} option={"/editpriorities"} optionName={"Edit Priorities"}  />
      <div className="prioritiesPage">
        <ul>
          <li>
            <PriorityCard
              rank={1}
              title={"Title of priority"}
              description={"Brief description of the priority. Brief description of the priority. Brief description of the priority."}
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={2}
              title={"Graffiti"}
              description={"blah blah fffffffffffffffffffffffffffffff  blah"}
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={3}
              title={"Crime"}
              description={"blah blah blah"}
              tag={"Homelessness"}
            />
          </li>
          <li>
            <PriorityCard
              rank={4}
              title={"Trash"}
              description={"blah blah blah"}
              tag={"Homelessness"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrioritiesPage;
