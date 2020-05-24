import * as React from "react";
import { Account, postAccount } from "../rest";

const AddAccount = () => {
  const [account, setAccount] = React.useState<Account>({
    bank: undefined,
    customer: undefined,
    number: "",
    balance: 0,
    withdrawals: [],
    deposits: [],
  });

  return (
    <>
      <input
        type="text"
        value={account.number}
        onChange={(e) => setAccount({ ...account, number: e.target.value })}
      />
      <input
        type="text"
        value={account.balance}
        onChange={(e) =>
          setAccount({ ...account, balance: Number(e.target.value) })
        }
      />
      <input
        type="button"
        value="Click to create account"
        onClick={() => postAccount(account).then((res) => alert(res))}
      />
    </>
  );
};

export default AddAccount;
