import My_nav from "./components/navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { format } from "date-fns";

function Daily_pr() {
  const [data, setData] = useState(null);
  const [profit, setprofit] = useState("");
  const [netprofit, setnet] = useState("");
  

  const expense = [];
  const today = new Date();

  async function handleProfit() {
    const formattedDate = format(today, "yyyy-MM-dd");
    const response = await axios.get(
      `http://127.0.0.1:8000/met/?date=${formattedDate}`
    );
    if (response.data.length > 0) {
      const pms_volume = response.data[0].pms;
      const diesel_volume = response.data[0].diesel;
      const total_volume = pms_volume + diesel_volume;
      //100 shillings is the fixed rate
      const prof = 100 * total_volume;
      setprofit(prof);
    } else {
      window.alert("You havent entered the meter readings for today.");
    }
    
  }

  async function handleNet() {
    const formattedDate = format(today, "yyyy-MM-dd");
    const response0 = await axios.get(
      `http://127.0.0.1:8000/e/?date=${formattedDate}`
    );
    if (response0.data.length > 0) {
      const len = response0.data.length;
      for (let i = 0; i < len; i++) {
        expense.push(response0.data[i].amount);
      }
      const sum = expense.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        
      );
      console.log(sum)
      console.log(expense)
      if (netprofit === ""){
        setnet(profit - sum);
        console.log(profit-sum);
      } else{
        console.log('')

      } 
    } else {
      window.alert("You havent entered any expenses for today.");
    }
  }

  return (
    <div className="App">
      <h2>Daily Profits</h2>
      <My_nav />
      <div>
        <Button variant="danger" onClick={handleProfit}>
          Calculate Gross Profit
        </Button>
        <Button variant="info" onClick={handleNet}>
          Calculate net profit
        </Button>
        <p>Fixed rate of profit for dealer: 100shs per Litre.</p>
        <p>Today gross profit:{profit}</p>
        <p>Today net profit:{netprofit}</p>
      </div>
    </div>
  );
}

export default Daily_pr;
