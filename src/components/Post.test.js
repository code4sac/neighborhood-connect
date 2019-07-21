import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import Post from './Post';

describe('Post', () => {
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <StaticRouter  location="test.org" >
            <Post data={ { avatar: 'Aang',
                         location: 'earth',
                         name: 'Aang Strom',
                         date: 'now',
                         overview: 'General overview' } }
                         />
    </StaticRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
    });
})