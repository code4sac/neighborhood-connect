import React from "react";
import { Redirect } from "react-router-dom";
import blackArrow from '../assets/chevron-right-black.svg';
import PropTypes from 'prop-types';
// const PriorityCard = ({ rank, type, description, promote, demote, location }) => {
const buttonStyle = {
  height: '25px', width: '100px', backgroundColor: '#6A81AC', color: 'white', borderRadius: '25px', border: '1px solid #6A81AC', margin: '0 1rem'
};
class PriorityCard extends React.Component {
  state = {
    redirect: false,
    reRoute: '/',
  }

  navToPriority = (priorityId) => {
    if (window.event.target.id !== 'promote' && window.event.target.id !== 'demote') {
      this.setState({
        redirect: true,
        reRoute: priorityId,
      });
    }
  }

  render() {
    const { id, rank, type, description, promote, demote, location } = this.props; //needs priorityId
    if (this.state.redirect) return <Redirect to={`/actions/${this.state.reRoute}`} />;
    return (
      <div className="priorityCard" onClick={() => { this.navToPriority(id) }}>
        <div className="priorityCard__banner">
          <p>#{rank} Priority</p>
          <p>{type}</p>
        </div>
        <div className="priorityCard__overview">
          <h2 className="heading-tertiary">{type}</h2>
          <p className="descriptions">{description}</p>
        </div>
        {(location === '/editPriorities') && (
          <div style={{ margin: '1rem' }}>
            <button id="promote" onClick={() => { promote() }} style={buttonStyle}>Promote Priority</button>
            <button id="demote" onClick={() => { demote() }} style={buttonStyle}>Demote Priority</button>
          </div>
        )}
        <img className="priorityCard__image chevronArrow" src={blackArrow} alt="arrow" />
      </div>
    );
  }
};

PriorityCard.propTypes = { //needs a priorityId
  rank: PropTypes.number,
  type: PropTypes.string,
  description: PropTypes.string,
  promote: PropTypes.func,
  demote: PropTypes.func,
  location: PropTypes.string,
};

export default PriorityCard;
