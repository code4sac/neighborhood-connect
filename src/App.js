import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PriorityDetails from "./components/PriorityDetails";
import PrioritiesPage from "./components/PrioritiesPage";
import NeighborhoodSelector from "./components/NeighborhoodSelector";
import NewEventForm from "./components/NewEventForm";

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

      <Route exact path="/" component={PrioritiesPage} />
      <Route exact path="/addevent" component={NewEventForm} />

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
        path="/newEvent"
        component={NewEventForm}
        )}
      />
    </Router>
  );
}

export default App;
