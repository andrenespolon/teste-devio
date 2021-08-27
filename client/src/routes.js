import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Checkout from "./pages/Checkout";
import Kitchen from "./pages/Kitchen";
import Delivery from "./pages/Delivery";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
      <Route path="/kitchen">
        <Kitchen />
      </Route>
      <Route path="/delivery">
        <Delivery />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default Routes;
