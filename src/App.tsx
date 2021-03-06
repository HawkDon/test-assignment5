import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { postCustomer } from "./rest";
import Links from "./Links";
import Routes from "./Routes";
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
