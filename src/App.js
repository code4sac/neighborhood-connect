import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PriorityDetails from './components/PriorityDetails';
import PrioritiesPage from './components/PrioritiesPage';
import NeighborhoodSelector from './components/NeighborhoodSelector';
import NewPriorityForm from './components/NewPriorityForm';
import PrioritiesOrderPage from './components/PrioritiesOrderPage';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import ActionsPage from './components/ActionsPage';
import NewActionForm from './components/NewActionForm';

function App() {
  const [neighborhood, setNeighborhood] = useState(() => {
    const initialName = localStorage.getItem('neighborhoodName');
    return initialName;
  });

  const [orgId, setOrgId] = useState(() => {
    const initialId = localStorage.getItem('orgId');
    return initialId;
  });

  const [searchType, setSearchType] = useState(() => {
    const initialType = localStorage.getItem('searchType');
    return initialType;
  });
  return (
    <Router>
      <Route
        exact
        path="/"
        render={(props) => (
          <PrioritiesPage
            orgId={orgId}
            neighborhood={neighborhood}
            searchType={searchType}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/priorityDetails"
        render={(props) => <PriorityDetails {...props} />}
      />
      <Route
        exact
        path="/selectNeighborhood"
        render={(props) => (
          <NeighborhoodSelector
            neighborhood={neighborhood}
            setNeighborhood={setNeighborhood}
            setOrgId={setOrgId}
            setSearchType={setSearchType}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/editPriorities"
        render={(props) => (
          <PrioritiesOrderPage
            neighborhood={neighborhood}
            orgId={Number(orgId)}
            {...props}
          />
        )}
      />
      <Route
        path="/actions/:priorityId" // change later to some regex to match 'priority-asd' or something similar
        render={(props) => <ActionsPage {...props} />}
      />
      <Route
        exact
        path="/addPriority"
        render={props => <NewPriorityForm
          orgId={orgId}
          {...props} />
        }
      />
      <Route exact path="/login" component={Login} />
      <Route exact path="/createAccount" component={CreateAccount} />
      <Route exact path="/newAction/:priorityId" component={NewActionForm} />
    </Router>
  );
}

export default App;
