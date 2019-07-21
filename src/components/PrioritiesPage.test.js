import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import PrioritiesPage from './PrioritiesPage';

describe('PrioritiesPage', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StaticRouter>
                <PrioritiesPage />
                </StaticRouter>
                , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})
