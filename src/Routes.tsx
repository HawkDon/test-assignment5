import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCustomer from "./pages/AddCustomer";
import GetAccount from "./pages/GetAccount";
import AddAccount from "./pages/AddAccount";
import { getCustomer } from "./rest";
import GetCustomer from "./pages/GetCustomer";
import Movement from "./pages/Movement";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/addcustomer">
      <AddCustomer />
    </Route>
    <Route path="/addaccount">
      <AddAccount />
    </Route>
    <Route path="/getaccount">
      <GetAccount />
    </Route>
    <Route path="/getcustomer">
      <GetCustomer />
    </Route>
    <Route path="/movement">
      <Movement />
    </Route>
  </Switch>
);

export default Routes;
