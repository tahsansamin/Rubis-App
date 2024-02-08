import My_nav from "./components/navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { format, parse } from "date-fns";
import axios from "axios";

function Daily_sales() {
  const [lubsales, setlub] = useState(0);
  const [gassales, setgas] = useState(0);

  const [pmsprice, setpmsprice] = useState(0);
  const [dieselprice, setdieselprice] = useState(0);
  const [otherearnings,setothers] = useState(0)

  const today = new Date();

  async function handleSales() {
    const formattedDate = format(today, "yyyy-MM-dd");
    console.log(formattedDate);
    

    try {
      const response0 = await axios.get(
        `http://127.0.0.1:8000/met/?date=${formattedDate}`
      );

      if (response0.data.length > 0) {
        
        const response = await axios.get(
          `http://127.0.0.1:8000/fu/?date=${formattedDate}`
        );
        console.log(response.data)

        
        
        const p_sales = parseInt(response0.data[0].pms)* parseInt(pmsprice)
        
        const d_sales = parseInt(response0.data[0].diesel)* parseInt(dieselprice)
        try {
          const [data] = response.data;
          const Url = data.url;
          axios.put(`${Url}`, {
            pms_price: pmsprice,
            diesel_price: dieselprice,
            date: formattedDate,
            lubs:lubsales,
            gas:gassales,
            date:formattedDate,
            pms_sales:p_sales,
            diesels_sales:d_sales,
            others:otherearnings,
          });
        } catch (error) {
          const response = await axios.post("http://127.0.0.1:8000/fu/", {
            pms_price: pmsprice,
            diesel_price: dieselprice,
            date: formattedDate,
            lubs:lubsales,
            gas:gassales,
            date:formattedDate,
            pms_sales:p_sales,
            diesels_sales:d_sales,
            others:otherearnings,
          });
        }
      } else {
        window.alert('Please enter meter readings for today first.')
      }
      

      console.log("updated");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <h2>Daily Sales</h2>
      <My_nav />
      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Lubricant Sales-UGX-
          </InputGroup.Text>
          <Form.Control
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setlub(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Gas Sales-UGX-
          </InputGroup.Text>
          <Form.Control
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setgas(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            PMS Price-UGX-
          </InputGroup.Text>
          <Form.Control
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setpmsprice(event.target.value)}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Diesel price -UGX-
          </InputGroup.Text>
          <Form.Control
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setdieselprice(event.target.value)}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Other Earnings -UGX-
          </InputGroup.Text>
          <Form.Control
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setothers(event.target.value)}
          />
        </InputGroup>
      </div>
      <Button variant="danger" onClick={handleSales}>
        Submit
      </Button>
    </div>
  );
}

export default Daily_sales;
