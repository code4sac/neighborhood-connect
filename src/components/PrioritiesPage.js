import React from "react";
import PriorityCard from "./PriorityCard";
import styled from "styled-components";

const PrioritiesWrapper = styled.div`
  margin-bottom: 1rem;
`;

const PriorityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 4rem;
`;

const PrioritiesPage = () => {
  return (
    <div>
      <StyledTitle>Priorities</StyledTitle>
      <PrioritiesWrapper>
        <PriorityList>
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
        </PriorityList>
      </PrioritiesWrapper>
    </div>
  );
};

export default PrioritiesPage;
