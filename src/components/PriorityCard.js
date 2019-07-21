import React from "react";
import { Link } from "react-router-dom";

const PriorityCard = ({ title, rank, description }) => {
  return (
    <Link
      to="/priorityDetails"
      style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
    >
      <div>
        <div>
          <p>{rank}</p>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
