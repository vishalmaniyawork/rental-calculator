import { useEffect, useState } from "react";
import axios from "axios";
var CurrencyFormat = require("react-currency-format");

export default function Calculator() {
  const [inputItem, setInputItem] = useState({
    asking_price: 0,
    down_payment: 20,
    rate: 1.35,
    loan_years: 30
  });

  const [resItem, setResItem] = useState({
    proprty_tax_yearl: 0,
    proprty_tax_monthly: 0,
    insurance_monthly: 0,
    monthly_payment: 0,
    revenue: 0,
    down_payment_amount: 0,
    lawyer_fees: 0,
    welcome_tax: 0,
    inspection_fees: 500,
    cash_needed: 0,
    cash_needed_pp: 0
  });
  const baseURL = "https://rental-calculator-api.herokuapp.com/calculate";
  // const baseURL = "https://kdkuby.sse.codesandbox.io/";

  useEffect(() => {
    console.log("call api ==>");
    fetch(
      baseURL +
        "?" +
        Object.keys(inputItem)
          .map((key) => key + "=" + inputItem[key])
          .join("&")
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setResItem(data);
        console.log("RESITEM", resItem);
      });
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
          <th align="left">Property Tax(Yerly)</th>
          <td>
            <CurrencyFormat
              value={resItem.proprty_tax_yearl}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Proprty Tax(Monthly)</th>
          <td>
            <CurrencyFormat
              value={resItem.proprty_tax_monthly}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Insurace(Monthly)</th>
          <td>
            <CurrencyFormat
              value={resItem.insurance_monthly}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <hr />
        <tr>
          <th align="left">Down Payment</th>
          <td>
            <CurrencyFormat
              value={resItem.down_payment_amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Lawyer Fees</th>
          <td>
            <CurrencyFormat
              value={resItem.lawyer_fees}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Welcome Tax</th>
          <td>
            <CurrencyFormat
              value={resItem.welcome_tax}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Inspection Fees</th>
          <td>
            <CurrencyFormat
              value={resItem.inspection_fees}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <hr />
        <tr>
          <th align="left">Monthly Payment</th>
          <td>
            <CurrencyFormat
              value={resItem.monthly_payment}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Revenue</th>
          <td>
            <CurrencyFormat
              value={resItem.revenue}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <hr />
        <tr>
          <th align="left">Cash Nedded</th>
          <td>
            <CurrencyFormat
              value={resItem.cash_needed}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
        <tr>
          <th align="left">Cash Needded (PP)</th>
          <td>
            <CurrencyFormat
              value={resItem.cash_needed_pp}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tr>
      </table>
    </div>
  );
}
