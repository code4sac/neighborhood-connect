import React from 'react';

export default class HeaderBlock extends React.Component {
    render() {
        return (
            <>
            <h2 className="heading-secondary">{this.props.name}</h2>
            <p className="paragraph u-margin-bottom-smallest">{this.props.description}</p>
            </>
        );
    }
}