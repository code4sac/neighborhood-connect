import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default class Header extends React.Component {

  render() {
    let buttonOption = this.props.option ? (
      <Link className="btn btn--secondary-blue btn--aligned" to={this.props.option}>
        <span className="btn__text">
          {this.props.optionIcon && <img src={this.props.optionIcon} alt={this.props.optionName} />}
          {this.props.optionName}
        </span>
      </Link>
    ) : (
        ""
      );

    return (
      <header className="header">
        <h1 className="heading-primary u-margin-left-small">{this.props.title}</h1>
        {buttonOption}
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  option: PropTypes.string,
  optionName: PropTypes.string,
}