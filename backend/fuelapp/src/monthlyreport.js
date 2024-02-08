import React, { useState } from "react";
import My_nav from "./components/navbar";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format, eachDayOfInterval } from "date-fns";

function Monthly() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  async function report() {
    const start = format(startDate, "yyyy-MM-dd");
    const end = format(endDate, "yyyy-MM-dd");

    const daysInRange = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });

    for (const day of daysInRange) {
      const formattedDay = format(day, "yyyy-MM-dd");
      try {
        const expenses = await axios.get(`http://127.0.0.1:8000/e/?date=${formattedDay}`);
        const meter = await axios.get(`http://127.0.0.1:8000/met/?date=${formattedDay}`);
        const electronics = await axios.get(`http://127.0.0.1:8000/elect/?date=${formattedDay}`);

        console.log(expenses.data.length)
        console.log(meter.data.length)
        console.log(electronics.data.length)
      } catch (error) {
        console.log('there was an error')
      }
    }
  }
  return (
    <div className="App">
      <My_nav />
      <div style={{ marginBottom: "20px" }}>
        <h3>Starting date</h3>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <div>
        <h3>Ending Date</h3>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <Button variant="danger" onClick={report}>Get Report</Button>
    </div>
  );
}

export default Monthly;
