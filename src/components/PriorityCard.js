import React from "react";
import { Link } from "react-router-dom";

const PriorityCard = ({ title, rank, description, tag }) => {
  return (
      <Link to="/priorityDetails">
          <div className="priorityCard">
              <div className="priorityCard__banner">
                  <p>#{rank} Priority</p>
                  <p>{tag}</p>
              </div>
              <div className="priorityCard__overview">
                  <h2 className="heading-secondary">{title}</h2>
                  <p className="descriptions">{description}</p>
              </div>
          </div>
      </Link>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
