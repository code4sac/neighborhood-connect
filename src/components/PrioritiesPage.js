import React from "react";
import PriorityCard from "./PriorityCard";
import styled from "styled-components";

const PriorityList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PrioritiesPage = () => {
  return (
    <div>
      <h1>Priorities</h1>
      <PriorityList>
        <PriorityCard
          rank={1}
          title={"Homelessness"}
          description={"blah blah blah"}
        />
        <PriorityCard
          rank={2}
          title={"Graffiti"}
          description={"blah blah blah"}
        />
        <PriorityCard rank={3} title={"Crime"} description={"blah blah blah"} />
        <PriorityCard rank={4} title={"Trash"} description={"blah blah blah"} />
      </PriorityList>
    </div>
  );
};

export default PrioritiesPage;
