import React from "react";

export default class Post extends React.Component {
    render() {
        const { avatar, location, name, date, overview } = this.props.data;

        return (
            <div>
                <ul className="Post__list">
                    <li className="Post__item">
                        <span className="Post__owner">
                            <span className="Post__image">
                                <img src={avatar} alt="placeholder" />
                            </span>
                            <span>
                                <h3>{name}</h3>
                                <p>{date}</p>
                            </span>
                        </span>
                        <p>{location}</p>
                    </li>
                    <li>
                        <p>{overview}</p>
                    </li>
                    <li className="Post__social">
                        <span>&#10084;</span>
                        <span>&#8594;</span>
                    </li>
                </ul>
            </div>
        );
    }
}
