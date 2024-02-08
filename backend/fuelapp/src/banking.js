import My_nav from "./components/navbar";
import { InputGroup, Form, Button, Accordion } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

export default function Banking() {
  const today = new Date();

  const [banking_me, set_me] = useState(0);
  const [banking_station, set_station] = useState(0);
  async function submit() {
    const formattedDate = format(today, "yyyy-MM-dd");
    console.log(formattedDate);
    const diff = banking_me- banking_station
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/banking/?date=${formattedDate}`
      );
      const [data] = response.data;
      const Url = data.url;
      
      console.log(Url);
      axios.put(`${Url}`, {
        date: formattedDate,
        my_banking: banking_me,
        station_banking: banking_station,
        difference:diff,
      });
    } catch (error) {
      console.log("posting new one");
      axios.post("http://127.0.0.1:8000/banking/", {
        date: formattedDate,
        my_banking: banking_me,
        station_banking: banking_station,
        difference:diff,
      });
    }
  }
  return (
    <div>
      <h2>Daily banking</h2>
      <My_nav />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Banking</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => set_me(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Banking as per station
        </InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => set_station(event.target.value)}
        />
      </InputGroup>
      
      <Button variant="danger" onClick={submit}>
        Submit
      </Button>
    </div>
  );
}
