// Post Movemen
import * as React from "react";
import { Link } from "react-router-dom";

const Links = () => (
  <ul>
    <li>
      <Link to="/addcustomer">Add new customer</Link>
    </li>
    <li>
      <Link to="/addaccount">Add new account</Link>
    </li>
    <li>
      <Link to="/getaccount">Find account</Link>
    </li>
    <li>
      <Link to="/getcustomer">Get customer / cpr</Link>
    </li>
    <li>
      <Link to="/movement">Add new movement to account</Link>
    </li>
  </ul>
);

export default Links;
