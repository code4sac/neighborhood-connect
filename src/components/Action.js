import React from "react";
import PropTypes from 'prop-types';

import neighborhood from "../assets/neighborhood.svg";

export default class Action extends React.Component {
  render() {
    const { id, avatar, location, title, date, description } = this.props;
    const formattedDate = new Date(date).toDateString();

    return (
      <>
        <li className="action__item" id={id}>
          <span className="action__image">
            <img src={avatar} alt="avatar needed from db" />
          </span>
          <span className="action__org">
            <h3 className="action__name">{title}</h3>
            <p className="action__location">
              <img className="u-margin-right-smallest" src={neighborhood} alt="location" />
              {location || 'need location from db'}
            </p>
          </span>
          <span className="action__absolute">
            <p className="action__date">{formattedDate}</p>
          </span>
        </li>
        <li className="action__item">
          <p className="action__overview">{description}</p>
        </li>
      </>
    );
  }
}

Action.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string, //not in db model yet
  location: PropTypes.string, //not in db model yet
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
}