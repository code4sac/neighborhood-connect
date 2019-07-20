import React from 'react';
import placeholder from '../assets/placeholder.jpg';
import styled from 'styled-components';

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
        margin: .5rem 0;
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
        return (
            <PostWrapper>
                <ul className="Post__list">
                    <li className="Post__item">
                        <span className="Post__owner">
                        <span className="Post__image">
                            <img src={placeholder} alt="placeholder" />
                        </span>
                        <span>
                            <h3>NextDoor</h3>
                            <p>June 21, 2019</p>
                        </span>
                        </span>
                        <p>Sacramento</p>
                        
                    </li>
                    <li>
                        <p>3 new Nextdoor incidents add. Making 48 in the past week.</p>
                    </li>
                    <li className="Post__social">
                        <span>&#10084;</span>
                        <span>
                        <a href="https://whimsical.com/32AqWM2AASAS7Ja6fqTp9a">Share</a>
                        <a href="https://whimsical.com/32AqWM2AASAS7Ja6fqTp9a">Help Out</a>
                        </span>
                    </li>
                </ul>
            </PostWrapper>
        );
    }
}