import { useState } from "react";
import My_nav from "./components/navbar";
import { InputGroup, Form, Button } from "react-bootstrap";
import { format } from "date-fns";
import axios from "axios";
function Daily_el() {
  const [momo, setmomo] = useState("");
  const [airtel, setairtel] = useState("");
  const [rubis, setrubis] = useState("");
  const [cd, setcd] = useState("");
  const [app,setapp] = useState("");
  const today = new Date();

  async function handleSubmit() {
    const formattedDate = format(today, "yyyy-MM-dd");
    console.log(formattedDate);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/elect/?date=${formattedDate}`
      );
      const [data] = response.data;
      const Url = data.url;
      axios.put(`${Url}`, {
        momo_pay: momo,
        rubis_card_pay: rubis,
        airtel_pay: airtel,
        cd_pay: cd,
        app_pay:app,
        date: formattedDate,
      });

      console.log(Url);
    } catch (error) {
      axios.post('http://127.0.0.1:8000/elect/', {
        momo_pay: momo,
        rubis_card_pay: rubis,
        airtel_pay: airtel,
        cd_pay: cd,
        app_pay:app,
        date: formattedDate,
      });
      console.log("posted new one");
    }
  }
  return (
    <div className="App">
      <h2>Daily Electronic Sales</h2>
      <My_nav />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Momo pay -UGX
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setmomo(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Airtel pay UGX
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setairtel(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          rubis card pay UGX
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setrubis(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          credit card and debit card pay UGX
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setcd(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          App pay -shillings-
        </InputGroup.Text>
        <Form.Control
          id="amountSpent"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setapp(event.target.value)}
        />
      </InputGroup>
      <Button variant="danger" onClick={handleSubmit}>
        Submit
      </Button>
      <h4><a href="http://127.0.0.1:8000/elect/">View All Instances of Daily Electronics</a></h4>
    </div>
  );
}

export default Daily_el;
