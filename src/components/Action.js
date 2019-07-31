import React from "react";
import PropTypes from "prop-types";
import right from "../assets/chevron-right-black.svg";

import neighborhood from "../assets/neighborhood.svg";

export default class Action extends React.Component {
    render() {
        const { id, avatar, location, title, date, description } = this.props;
        const formattedDate = new Date(date).toDateString();

        return (
            <div className="action" style={this.props.style}>
                <ul className="action__list">
                    <li className="action__item" id={id}>
                        <span className="action__image">
                            <img src={avatar} alt="avatar needed from db" />
                        </span>
                        <span className="action__org">
                            <span className="action__details">
                                <h3 className="action__name">{title}</h3>
                                <p className="action__date">{formattedDate}</p>
                            </span>
                            <p className="action__location">
                                <img className="u-margin-right-smallest" src={neighborhood} alt="location" />
                                {location || "need location from db"}
                            </p>
                        </span>
                    </li>
                    <li className="action__item">
                        <p className="action__overview">{description}</p>
                    </li>
                    <img className="action__arrow" src={right} alt="arrow" />
                </ul>
            </div>
        );
    }
}

Action.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string, //not in db model yet
    location: PropTypes.string, //not in db model yet
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string
};
