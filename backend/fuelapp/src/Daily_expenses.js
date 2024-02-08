import My_nav from "./components/navbar";
import { InputGroup, Form, Button, Accordion } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

function Daily_ex() {
  const today = new Date();
  const [garbage, setgarbage] = useState(0);
  const [soap, set_soap] = useState(0);
  const [car_fuel, set_fuel] = useState(0);
  const [food, set_food] = useState(0);
  const [broom, set_broom] = useState(0);
  const [transport, set_transport] = useState(0);
  const [airtime, set_airtime] = useState(0);
  const [survey, set_survey] = useState(0);
  const [security, set_security] = useState(0);
  const [hose, set_hose] = useState(0);
  const [salary, set_salary] = useState(0);
  const [staff_advance, set_advance] = useState(0);
  const [waterbill, set_water] = useState(0);
  const [generator, set_generator] = useState(0);
  const [shortage, set_shortage] = useState(0);
  const [others, set_others] = useState(0);

  async function handleExpense() {
    const formattedDate = format(today, "yyyy-MM-dd");
    console.log(formattedDate);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/e/?date=${formattedDate}`
      );
      const [data] = response.data
      const Url = data.url
      console.log(Url);
      axios.put(`${Url}`, {
        date: formattedDate,
        garbage: garbage,
        liquid_soap: soap,
        car_fuel: car_fuel,
        food: food,
        broom: broom,
        transport: transport,
        airtime: airtime,
        price_survey: survey,
        hosepipe_rubber: hose,
        salary: salary,
        staff_advance: staff_advance,
        water_bill: waterbill,
        generator: generator,
        shorteg: shortage,
        others: others,
      });
    } catch (error) {
      console.log("posting new one");
      axios.post("http://127.0.0.1:8000/e/", {
        date: formattedDate,
        garbage: garbage,
        liquid_soap: soap,
        car_fuel: car_fuel,
        food: food,
        broom: broom,
        transport: transport,
        airtime: airtime,
        price_survey: survey,
        hosepip_rubber: hose,
        salary: salary,
        staff_advance: staff_advance,
        water_bill: waterbill,
        generator: generator,
        shorteg: shortage,
        others: others,
      });
    }
  }

  return (
    <div className="App">
      <h2>Daily Expenses</h2>
      <My_nav />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Garbage</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={garbage}
          onChange={(event) => setgarbage(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Liquid soap</InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={soap}
          onChange={(event) => set_soap(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Car fuel</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={car_fuel}
          onChange={(event) => set_fuel(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Food</InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={food}
          onChange={(event) => set_food(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Brooms</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={broom}
          onChange={(event) => set_broom(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Transport</InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={transport}
          onChange={(event) => set_transport(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Airtime</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={airtime}
          onChange={(event) => set_airtime(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Price Survey
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={survey}
          onChange={(event) => set_survey(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Security</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={security}
          onChange={(event) => set_security(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Hose pipe and rubber
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={hose}
          onChange={(event) => set_hose(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Salary</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={salary}
          onChange={(event) => set_salary(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Staff advance
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={staff_advance}
          onChange={(event) => set_advance(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Water Bill</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={waterbill}
          onChange={(event) => set_water(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Generator</InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={generator}
          onChange={(event) => set_generator(event.target.value)}
        />
      </InputGroup>

      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Shortage</InputGroup.Text>
        <Form.Control
          id="expenseName"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={garbage}
          onChange={(event) => set_shortage(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Others</InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          value={others}
          onChange={(event) => set_others(event.target.value)}
        />
      </InputGroup>

      <Button variant="danger" onClick={handleExpense}>
        Add Expense
      </Button>
      <h4>
        <a href="http://127.0.0.1:8000/e/">View All Instances of Expenses</a>
      </h4>
    </div>
  );
}

export default Daily_ex;
