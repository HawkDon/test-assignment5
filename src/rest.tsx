interface Bank {
  name: string;
  cvr: string;
}

interface Customer {
  cpr: string;
  name: string;
  bank?: Bank;
  accounts?: any;
}

export const postCustomer = (customer: Customer): Promise<string | Response> =>
  fetch("/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res: Response) => res.text());
