import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPriorityCard = styled.div`
  border: solid 2px #000;
  margin-bottom: 1rem;
  padding: 0.5rem;
  display: grid;
  grid: 6rem / 1fr 8fr;
  text-decoration: none;
  font-size: 1.3rem;
`;

const RankWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const CardSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledCardTitle = styled.h2`
  margin: 0;
`;

const StyledCardDescription = styled.p`
  margin: 0;
`;

const PriorityCard = ({ title, rank, description }) => {
  return (
    <Link
      to="/priorityDetails"
      style={{ "text-decoration": "none", color: "#000", cursor: "pointer" }}
    >
      <StyledPriorityCard>
        <RankWrapper>
          <p>{rank}</p>
        </RankWrapper>
        <CardSummaryWrapper>
          <StyledCardTitle>{title}</StyledCardTitle>
          <StyledCardDescription>{description}</StyledCardDescription>
        </CardSummaryWrapper>
      </StyledPriorityCard>
    </Link>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
