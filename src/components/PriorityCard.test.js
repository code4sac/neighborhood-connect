import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import PriorityCard from './PriorityCard';

describe('PriorityCard', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StaticRouter>
                <PriorityCard />
                </StaticRouter>
                , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
