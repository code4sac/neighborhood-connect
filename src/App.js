import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PriorityDetails from "./components/PriorityDetails";
import PrioritiesPage from "./components/PrioritiesPage";
import NeighborhoodSelector from "./components/NeighborhoodSelector";
import NewEventForm from "./components/NewEventForm";
import NewPriorityForm from "./components/NewPriorityForm";
import PrioritiesOrderPage from './components/PrioritiesOrderPage';
import Login from './components/Login';
import CreateAccount from "./components/CreateAccount";
import ActionsPage from "./components/ActionsPage";


function App() {
  // TO-DO: Change this to retrieve neighborhood value from cookie/localstate
  const [neighborhood, setNeighborhood] = useState("");
  // TO-DO: Add state hook to store the neighborhoodId in addition to hood name

  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => <PrioritiesPage orgId={1} neighborhood={neighborhood} {...props} />}
      />
      <Route
        exact
        path="/priorityDetails"
        render={props => <PriorityDetails {...props} />}
      />
      <Route
        exact
        path="/selectNeighborhood"
        render={props => (
          <NeighborhoodSelector
            neighborhood={neighborhood}
            setNeighborhood={setNeighborhood}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/editPriorities"
        render={props => <PrioritiesOrderPage neighborhood={neighborhood} {...props} />}
      />
      <Route exact path="/addNewEvent" component={NewEventForm} />
      <Route exact path="/addNewPriority" component={NewPriorityForm} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/createAccount" component={CreateAccount} />
      <Route exact path="/actions" component={ActionsPage} />
    </Router>
  );
}

export default App;
