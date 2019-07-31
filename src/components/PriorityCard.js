import React from "react";
import { Redirect } from "react-router-dom";
import chevronright from '../assets/chevron-right-black.svg';
import chevronup from '../assets/chevron-up-black.svg';
import chevrondown from '../assets/chevron-down-black.svg';
import PropTypes from 'prop-types';
// const PriorityCard = ({ rank, type, description, promote, demote, location }) => {

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

    //render option based on route: nav to more details or re-rank priorities
    let controlOption = location === "/editPriorities" ? 
          <div className="priorityCard__control">
            <button id="promote" onClick={() => { promote() }}><img className="chevronArrow" src={chevronup} alt="arrow" /></button>
            <button id="demote" onClick={() => { demote() }}><img className="chevronArrow" src={chevrondown} alt="arrow" /></button>
          </div>
          :
          <img className="priorityCard__image chevronArrow" onClick={() => { this.navToPriority(id) }} src={chevronright} alt="arrow" />;

    return (
      <div className="priorityCard" style={this.props.style}>
        <div className="priorityCard__banner">
          <p>#{rank} Priority</p>
          <p>{type}</p>
        </div>
        <div className="priorityCard__overview">
          <h2 className="heading-tertiary">{type}</h2>
          <p className="descriptions">{description}</p>
        </div>
        {controlOption}
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
