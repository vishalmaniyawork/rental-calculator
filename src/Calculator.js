import { useEffect, useState } from "react";
import axios from "axios";

export default function Calculator() {
  const [inputItem, setInputItem] = useState({
    asking_price: 0,
    down_payment: 20,
    rate: 1.35,
    loan_years: 30
  });
  const baseURL = "https://api.sampleapis.com/beers/ale";

  useEffect(() => {
    console.log("changed");
    fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, [inputItem]);

  return (
    <div>
      <h2>Morgate Calculator</h2>
      <table>
        <tr>
          <th align="left">Purchase price</th>
          <td>
            <input
              type="number"
              name="purchase_price"
              value={inputItem.asking_price}
              onChange={(e) =>
                setInputItem({ ...inputItem, asking_price: e.target.value })
              }
            />
            $
          </td>
        </tr>
        <tr>
          <th align="left">Down Payment</th>
          <td>
            <input
              type="text"
              name="down_payment"
              value={inputItem.down_payment}
              onChange={(e) =>
                setInputItem({ ...inputItem, down_payment: e.target.value })
              }
            />
            %
          </td>
        </tr>
        <tr>
          <th align="left">Rate</th>
          <td>
            <input
              type="text"
              name="rate"
              value={inputItem.rate}
              onChange={(e) =>
                setInputItem({ ...inputItem, rate: e.target.value })
              }
            />
            %
          </td>
        </tr>
        <tr>
          <th align="left">Loan Years</th>
          <td>
            <input
              type="text"
              name="loan_years"
              value={inputItem.loan_years}
              onChange={(e) =>
                setInputItem({ ...inputItem, loan_years: e.target.value })
              }
            />
            Yr
          </td>
        </tr>
      </table>
      <hr />
      <table>
        <tr>
          <th align="left">Monthly Payment</th>
          <td>${inputItem.asking_price}</td>
        </tr>
      </table>
    </div>
  );
}
