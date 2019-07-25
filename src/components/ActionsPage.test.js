import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import ActionPage from './ActionsPage';

describe('ActionPage', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <StaticRouter  location="test.org" >
            <ActionPage />
    </StaticRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
    });
})