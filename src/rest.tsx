export interface Movement {
  time: Date;
  amount: number;
}

export interface Bank {
  name: string;
  cvr: string;
}

export interface Customer {
  cpr: string;
  name: string;
  bank?: Bank;
  accounts?: any;
}

export interface MovementDTO {
  account: Account;
  balance: number;
  action: Actions;
}

export enum Actions {
  DEPOSIT,
  WITHDRAW,
}

export interface Account {
  bank: any;
  customer: any;
  number: string;
  balance: number;
  withdrawals: Movement[];
  deposits: Movement[];
}

export const postCustomer = (customer: Customer): Promise<string | Response> =>
  fetch("/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res: Response) => res.text());

export const postAccount = (account: Account): Promise<string | Response> =>
  fetch("/account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(account),
  }).then((res: Response) => res.text());

export const getAccount = (id: string): Promise<string | Response> =>
  fetch("/account/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res: Response) => res.json());

export const getCustomer = (cpr: string): Promise<string | Response> =>
  fetch("/customer/" + cpr, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res: Response) => res.json());

export const postMovement = (
  movement: MovementDTO
): Promise<string | Response> =>
  fetch("/movement", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movement),
  }).then((res: Response) => res.text());
