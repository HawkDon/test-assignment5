import * as React from "react";
import { getCustomer, Customer } from "../rest";

const GetCustomer = () => {
  const [cpr, setCpr] = React.useState("");

  const [customer, setCustomer] = React.useState<Customer | undefined>(
    undefined
  );

  return (
    <>
      <input type="text" value={cpr} onChange={(e) => setCpr(e.target.value)} />
      <input
        type="button"
        value="Find account"
        onClick={(e) => getCustomer(cpr).then((res) => setCustomer(res as any))}
      />

      {customer === undefined ? null : (
        <>
          <h1>Customer information:</h1>
          <h3>Name: {customer.name}</h3>
          <h3>Cpr: {customer.cpr}</h3>
        </>
      )}
    </>
  );
};

export default GetCustomer;
