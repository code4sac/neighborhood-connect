import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router'
import ActionsPage from './ActionsPage';

describe('ActionPage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <StaticRouter location="{test.org}" >
        <ActionsPage match={{ params: { priorityId: 1 } }} />
      </StaticRouter>
      , div);
    ReactDOM.unmountComponentAtNode(div);
  });
})