import React from "react";
import neighborhood from '../assets/neighborhood.svg';

export default class Action extends React.Component {
    render() {
        const { avatar, location, name, date, overview } = this.props.data;

        return (
            <div className="action">
                <ul className="action__list">
                    <li className="action__item">
                        <span className="action__image">
                            <img src={avatar} alt="placeholder" />
                        </span>
                        <span className="action__org">
                            <h3 className="action__name">{name}</h3>
                            <p className="action__location"><img className="u-margin-right-smallest" src={neighborhood} alt="location" />{location}</p>
                        </span>
                        <span className="action__absolute">
                            <p className="action__date">{date}</p>
                        </span>
                    </li>
                    <li className="action__item">
                        <p className="action__overview">{overview}</p>
                    </li>
                </ul>
            </div>
        );
    }
}
