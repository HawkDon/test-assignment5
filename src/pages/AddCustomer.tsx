import * as React from "react";
import { postCustomer } from "../rest";

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

export default AddCustomer;
