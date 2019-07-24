import React from "react";
import { Link } from "react-router-dom";
import blackArrow from '../assets/chevron-right-black.svg';

const PriorityCard = ({ rank, type, description, promote, demote, location }) => {
  return (
    <div className="priorityCard">
      <div className="priorityCard__banner">
        <p>#{rank} Priority</p>
        <p>{location}</p>
      </div>
      <div className="priorityCard__overview">
        <h2 className="heading-tertiary">{type}</h2>
        <p className="descriptions">{description}</p>
      </div>
      {(location === '/editPriorities') && (
        <div style={{ margin: '1rem' }}>
          <button onClick={() => { promote() }} style={{ height: '15px', width: '60px' }}>^</button>
          <button onClick={() => { demote() }} style={{ height: '15px', width: '60px' }}>V</button>
        </div>
      )}
      <Link to="/priorityDetails">
        <img className="priorityCard__image chevronArrow" src={blackArrow} alt="arrow" />
      </Link>
    </div>
  );
};

PriorityCard.propTypes = {};

export default PriorityCard;
