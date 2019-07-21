import React from 'react';
import right from '../assets/chevron-right.svg'
import { Link } from 'react-router-dom';

export default class LocationHolder extends React.Component {
    render() {
        return (
            <div className="locationHolder">
                <Link to="/selectNeighborhood">
                <p className="locationHolder__name">
                    Change Location <img className="locationHolder__image" src={right} alt="arrow" />
                </p>
                </Link>
                <div className="seperator"></div>
            </div>
        );
    }
}