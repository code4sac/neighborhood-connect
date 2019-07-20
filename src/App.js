import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PriorityDetails from "./components/PriorityDetails";
import PrioritiesPage from "./components/PrioritiesPage";
import NewEventForm from "./components/NewEventForm";

function App() {
  return (
    <Router>
      <Route exact path="/" component={PrioritiesPage} />
      <Route exact path="/addevent" component={NewEventForm} />
      <Route
        exact
        path="/priorityDetails"
        render={props => <PriorityDetails {...props} />}
      />
    </Router>
  );
}

export default App;
