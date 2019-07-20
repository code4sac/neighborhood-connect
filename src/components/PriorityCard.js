import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PriorityCard = props => {
  return (
    <Link to="/priorityDetails">
      <div>
        <h2>PriorityCard</h2>
      </div>
    </Link>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
