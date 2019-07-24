import React from 'react';
import whiteArrow from '../assets/chevron-right-white.svg'
import { Link } from 'react-router-dom';

export default class LocationHolder extends React.Component {
    render() {
        return (
            <div className="locationHolder">
                <Link to="/selectNeighborhood">
                    <p className="locationHolder__change">
                        Change Location <img className="locationHolder__image chevronArrow" src={whiteArrow} alt="arrow" />
                    </p>
                </Link>
                <div className="seperator" />
                <div className="locationHolder__current">{this.props.hood}</div>
            </div>
        );
    }
}