import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(loggedIn, Component, ...rest) =>
      !loggedIn ? <Redirect to="/" /> : <Component {...rest} />
    }
  />
);

export default PrivateRoute;
