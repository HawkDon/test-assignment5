import * as React from "react";
import { getAccount, Account } from "../rest";

const GetAccount = () => {
  const [id, setId] = React.useState("");

  const [account, setAccount] = React.useState<Account | undefined>(undefined);
  return (
    <>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input
        type="button"
        value="Find account"
        onClick={(e) => getAccount(id).then((res) => setAccount(res as any))}
      />
      {account === undefined ? null : (
        <>
          <h1>Info on account</h1>
          <h3>Number: {account.number}</h3>
          <h3>Balance: {account.balance}</h3>
          <h3>
            Movements on account:{" "}
            {account.deposits.length + account.withdrawals.length} in total
          </h3>
        </>
      )}
    </>
  );
};

export default GetAccount;
