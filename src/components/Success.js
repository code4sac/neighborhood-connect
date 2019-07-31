import React from 'react';
import check from '../assets/check.svg'

export default class Success extends React.Component {
    render() {
        return <div className="success"><img className="success__image" src={check} alt="check mark" />{this.props.message}</div>;
    }
}