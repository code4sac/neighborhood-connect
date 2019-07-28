import React from 'react';
import whiteArrow from '../assets/chevron-right-white.svg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class LocationHolder extends React.Component {

  render() {

    let visibility;
    this.props.hood ? visibility = "visible" : visibility = "hidden";

    return (
        <div className="locationHolder">
            <div className="locationHolder__container">
                <Link to="/selectNeighborhood">
                    <p className="locationHolder__change">
                        Change Location <img className="locationHolder__image chevronArrow" src={whiteArrow} alt="arrow" />
                    </p>
                </Link>
                <div className="seperator" />
                <Link to="selectNeighborhood" style={{ visibility: `${visibility}` }} className="locationHolder__current btn btn--primary-blue">
                    {this.props.hood}
                </Link>
            </div>
        </div>
    );
  }
}

LocationHolder.propTypes = {
  hood: PropTypes.string,
}