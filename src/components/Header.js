import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="heading-primary u-margin-left-small">{this.props.title}</h1>
                <Link className="btn btn--aligned" to={this.props.option}><span className="btn__text"><img src={this.props.optionIcon} alt={this.props.optionName} /> {this.props.optionName}</span></Link>
            </header>
        )
    }
}