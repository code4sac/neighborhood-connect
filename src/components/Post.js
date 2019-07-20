import React from "react";
import placeholder from "../assets/placeholder.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostWrapper = styled.div`
    padding: 1rem;
    border: 0.1rem solid grey;
    margin-bottom: 1rem;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-align: left;
    }

    li {
        margin: 0.5rem 0;
    }

    img {
        width: 4rem;
        border-radius: 2.5rem;
    }

    .Post__image {
        padding-right: 1rem;
    }

    .Post__owner {
        display: flex;
        flex-direction: row;
    }

    .Post__item {
        display: flex;
        justify-content: space-between;
    }

    .Post__social {
        display: flex;
        justify-content: space-between;
    }
    a {
        margin-left: 1rem;
    }
`;

export default class Post extends React.Component {
    render() {
        const { avatar, location, name, date, overview } = this.props.data;

        return (
            <PostWrapper>
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
            </PostWrapper>
        );
    }
}
