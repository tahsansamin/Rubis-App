import { useState } from "react";
import My_nav from "./components/navbar";
import { InputGroup, Button, Form, Badge } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

function Stocks() {
  const [pmsstock, setpmsstock] = useState(0);
  const [dieselstock, setdieselstock] = useState(0);
  const [pmsprice, setpmsprice] = useState(0);
  const [dieselprice, setdieselprice] = useState(0);
  const [enterpms, setpms] = useState(0);
  const [enterdiesel, setdiesel] = useState(0);
  
  const today = new Date();
  async function start() {
    const response = await axios.get("http://127.0.0.1:8000/stock/1/");
    setpmsstock(response.data.pms_stock);
    setdieselstock(response.data.diesel_stock);
  }

  useEffect(() => {
    start();
  }, []);

  async function addStock() {
    const formattedDate = format(today, "yyyy-MM-dd");
    const newpms = pmsstock + parseInt(enterpms);
    const newdiesel = dieselstock + parseInt(enterdiesel);
    const response = await axios.get("http://127.0.0.1:8000/stock/1/");
    axios.put("http://127.0.0.1:8000/stock/1/", {
      pms_stock: newpms,
      diesel_stock: newdiesel,
    });
    setpmsstock(newpms);
    setdieselstock(newdiesel);
    const sum1 = parseInt(enterpms) + parseInt(enterdiesel)
    const my_cost = sum1 * 19

    const pmscost = parseInt(pmsprice) * enterpms;
    const dieselcost = parseInt(dieselprice) * enterdiesel;

    console.log(dieselprice);
    console.log(pmsprice);
    console.log(enterpms);
    console.log(enterdiesel);

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/b/?date=${formattedDate}`
      );
      console.log(`http://127.0.0.1:8000/b/?date=${formattedDate}`);
      const [data] = response.data;
      const Url = data.url;
      axios.put(`${Url}`, {
          date: formattedDate,
          pms_bought: enterpms,
          diesel_bought: enterdiesel,
          pms_rate: pmsprice,
          diesel_rate: dieselprice,
          dealer_fee: my_cost,
        });
      
        // Handle the case where response.data.url is undefined
        
      
    } catch (error) {
      console.error("adding a new one");

      // Handle the error and make a POST request if necessary
      await axios.post("http://127.0.0.1:8000/b/", {
        date: formattedDate,
        pms_bought: enterpms,
        diesel_bought: enterdiesel,
        pms_rate: pmsprice,
        diesel_rate: dieselprice,
        dealer_fee: my_cost,
      });
    }
  }

  return (
    <div className="App">
      <h2>Stocks</h2>
      <My_nav />
      <h3>
        <Badge bg="info">Current PMS stock -litres-</Badge>
        {pmsstock}
      </h3>
      <h3>
        <Badge bg="success">Current Diesel stock -litres-</Badge>
        {dieselstock}
      </h3>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Amount of PMS to Add-Litres-
        </InputGroup.Text>
        <Form.Control
          id="pms"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setpms(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Amount of Diesel to Add-Litres-
        </InputGroup.Text>
        <Form.Control
          id="diesel"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setdiesel(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          PMS buying rate per litre -UGX-
        </InputGroup.Text>
        <Form.Control
          id="pmsprice"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setpmsprice(event.target.value)}
        />
      </InputGroup>
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">
          Diesel buying rate per litre -UGX-
        </InputGroup.Text>
        <Form.Control
          id="dieselprice"
          type="number"
          min="0"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setdieselprice(event.target.value)}
        />
      </InputGroup>

      
      <Button variant="danger" onClick={addStock}>
        Add to stock and Expenses
      </Button>
      <Button variant="info">test</Button>
    </div>
  );
}

export default Stocks;
