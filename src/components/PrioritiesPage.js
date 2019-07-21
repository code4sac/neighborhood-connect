import React from "react";
import PriorityCard from "./PriorityCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PrioritiesWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StyledPriorityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 4rem;
`;

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

  return (
    <div>
      <StyledTitle>Priorities</StyledTitle>
      <span>Neighborhood: {neighborhood}</span>
      <Link to="/selectNeighborhood">
        <button>Choose Neighborhood</button>
      </Link>
      <PrioritiesWrapper>
        <StyledPriorityList>
          {priorities.map(priority => {
            return <li>{renderPriority(priority)}</li>;
          })}
        </StyledPriorityList>
      </PrioritiesWrapper>
    </div>
  );
};

export default PrioritiesPage;
