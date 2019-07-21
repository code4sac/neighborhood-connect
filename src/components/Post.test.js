import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import Post from './Post';

describe('Post', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <StaticRouter  location="test.org" >
            <Post />
    </StaticRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
    });
})