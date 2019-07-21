import React from "react";
import neighborhood from '../assets/neighborhood.svg';
import right from '../assets/chevron-right.svg';

export default class Post extends React.Component {
    render() {
        const { avatar, location, name, date, overview } = this.props.data;

        return (
            <div className="post">
                <ul className="post__list">
                    <li className="post__item">
                        <span className="post__image">
                            <img src={avatar} alt="placeholder" />
                        </span>
                        <span className="post__org">
                            <h3 className="post__name">{name}</h3>
                            <p className="post__location"><img className="u-margin-right-smallest" src={neighborhood} alt="location" />{location}</p>
                        </span>
                        <span className="post__absolute">
                            <p className="post__date">{date}</p>
                        </span>
                    </li>
                    <li className="post__item">
                        <p className="post__overview">{overview}</p>
                    </li>
                </ul>
                <img className="post__arrow" src={right} alt="arrow" />
            </div>
        );
    }
}
