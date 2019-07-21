import React from "react";
import PriorityCard from "./PriorityCard";

const PrioritiesPage = () => {
  return (
    <div>
      <h1>Priorities</h1>
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
