import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PriorityDetails from "./components/PriorityDetails";
import PrioritiesPage from "./components/PrioritiesPage";
import NeighborhoodSelector from "./components/NeighborhoodSelector";
import NewEventForm from "./components/NewEventForm";
import NewPriorityForm from "./components/NewPriorityForm";
import PrioritiesOrderPage from './components/PrioritiesOrderPage';

function App() {
  // TO-DO: Change this to retrieve neighborhood value from cookie/localstate
  const [neighborhood, setNeighborhood] = useState("Sacramento");

  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => <PrioritiesPage neighborhood={neighborhood} />}
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
      <Route path="/addNewEvent" component={NewEventForm} />
      <Route exact path="/addNewPriority" component={NewPriorityForm} />
      <Route exact path="/sort" component={PrioritiesOrderPage} />
    </Router>
  );
}

export default App;
