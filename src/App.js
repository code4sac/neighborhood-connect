import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PriorityDetails from "./components/PriorityDetails";
import PrioritiesPage from "./components/PrioritiesPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={PrioritiesPage} />
      <Route
        exact
        path="/priorityDetails"
        render={props => <PriorityDetails {...props} />}
      />
    </Router>
  );
}

export default App;
