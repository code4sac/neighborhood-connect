import React from 'react';
import whiteArrow from '../assets/chevron-right-white.svg'
import { Link } from 'react-router-dom';

export default class LocationHolder extends React.Component {
    render() {

        console.log(this.props.hood)

        let currentNeighborhood = this.props.hood ? (
            <Link to="selectNeighborhood" className="locationHolder__current btn btn--primary-blue">
                {this.props.hood}
            </Link>
        ) : (
            <Link to="selectNeighborhood" style={{ visibility: "hidden" }} className="locationHolder__current btn btn--primary-blue">
                {this.props.hood}
            </Link>
        );

        return (
            <div className="locationHolder">
                <Link to="/selectNeighborhood">
                    <p className="locationHolder__change">
                        Change Location <img className="locationHolder__image chevronArrow" src={whiteArrow} alt="arrow" />
                    </p>
                </Link>
                <div className="seperator" />
                {/* This.props.hood is rendering as just neighborhood? shouldn't it be receiving the name of the saved neighborhood as props?? */}
                {/* I am just linkeding to the selectNeighborhood component for now, since I'm not sure if clicking it is supposed to be bring us to that neighborhood specifically */}
                {currentNeighborhood} 
            </div>
        );
    }
}