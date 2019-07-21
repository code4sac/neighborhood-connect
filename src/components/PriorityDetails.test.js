import React from 'react';
import ReactDOM from 'react-dom';
import PriorityDetails from './PriorityDetails';
import { StaticRouter } from 'react-router'

describe('PriorityDetails', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <StaticRouter location="some.test" >
          <PriorityDetails />
        </StaticRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
