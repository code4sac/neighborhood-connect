import React from 'react';
import { Link } from 'react-router-dom';

export default class LinkToPage extends React.Component {
    render() {
        return (
            <Link to={this.props.form}>
                <div className="link">
                    <div className="u-flex-row">
                        <img className="link__icon" src={this.props.icon} alt="icon" />
                        <p className="link__name">{this.props.optionName}</p>
                    </div>
                    <img className="link__pointer" src={this.props.image} alt="pointer" />
                </div>
            </Link>
        );
    }
}