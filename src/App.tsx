import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { postCustomer } from "./rest";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Links />
        <Routes />
      </BrowserRouter>
    </>
  );
};
// Post Movement

const Links = () => (
  <ul>
    <li>
      <Link to="/addcustomer">Add new customer</Link>
    </li>
    <li>
      <Link to="/getaccount">Find account</Link>
    </li>
    <li>
      <Link to="/getcustomer">Get customer / cpr</Link>
    </li>
    <li>
      <Link to="/getbalance">Get balance</Link>
    </li>
    <li>
      <Link to="/movement">Add new movement to account</Link>
    </li>
  </ul>
);
const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/addcustomer">
      <AddCustomer />
    </Route>
  </Switch>
);

const Home = () => <>Hello Home</>;

const AddCustomer = () => {
  const [customer, setCustomer] = React.useState({
    cpr: "",
    name: "",
    bank: undefined,
    accounts: undefined,
  });
  return (
    <>
      <input
        type="text"
        value={customer.cpr}
        onChange={(e) => setCustomer({ ...customer, cpr: e.target.value })}
      />
      <input
        type="text"
        value={customer.name}
        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
      />
      <input
        type="submit"
        value="add customer!"
        onClick={() => postCustomer(customer).then((res) => alert(res))}
      />
    </>
  );
};
export default App;
