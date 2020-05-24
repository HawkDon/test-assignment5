import * as React from "react";
import { Account, postMovement, MovementDTO, Actions } from "../rest";
const Movement = () => {
  const [movement, setMovement] = React.useState<MovementDTO>({
    account: {
      number: "",
      balance: 0,
      withdrawals: [],
      deposits: [],
      bank: undefined,
      customer: undefined,
    },
    balance: 0,
    action: Actions.DEPOSIT,
  });

  return (
    <>
      <input
        type="text"
        placeholder="Account Number"
        value={movement.account.number}
        onChange={(e) =>
          setMovement({
            ...movement,
            account: { ...movement.account, number: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="balance"
        value={movement.balance}
        onChange={(e) =>
          setMovement({ ...movement, balance: Number(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="DEPOSIT OR WITHDRAW"
        value={movement.action}
        onChange={(e) =>
          setMovement({ ...movement, action: e.target.value as any })
        }
      />

      <input
        type="button"
        placeholder="DEPOSIT OR WITHDRAW"
        value="DEPOSIT OR WITHDRAW"
        onClick={(e) => postMovement(movement).then((res) => alert(res))}
      />
    </>
  );
};

export default Movement;
