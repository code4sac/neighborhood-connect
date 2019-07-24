import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import Action from './Action';

describe('Action', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <StaticRouter  location="test.org" >
            <Action />
    </StaticRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
    });
})