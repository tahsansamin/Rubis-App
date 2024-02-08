import { useState } from "react";
import My_nav from "./components/navbar";
import { InputGroup, Form, Button } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { useEffect } from "react";

function My_meter() {
  const today = new Date();

  const [openpms1, setopenpms1] = useState(0);
  const [openpms2, setopenpms2] = useState(0);
  const [openpms3, setopenpms3] = useState(0);
  const [openpms4, setopenpms4] = useState(0);
  const [opendiesel1, setopendiesel1] = useState(0);
  const [opendiesel2, setopendiesel2] = useState(0);
  const [opendiesel3, setopendiesel3] = useState(0);
  const [opendiesel4, setopendiesel4] = useState(0);
  const [closepms1, setclosepms1] = useState(0);
  const [closepms2, setclosepms2] = useState(0);
  const [closepms3, setclosepms3] = useState(0);
  const [closepms4, setclosepms4] = useState(0);
  const [closediesel1, setclosediesel1] = useState(0);
  const [closediesel2, setclosediesel2] = useState(0);
  const [closediesel3, setclosediesel3] = useState(0);
  const [closediesel4, setclosediesel4] = useState(0);
  const [pmsrtt,setpmsrtt] = useState(0);
  const [dieselrtt,setdieselrtt] = useState(0)
  const [pmsdip,setpmsdip] = useState(0)
  const [dieseldip,setdieseldip] = useState(0)


  
  const [test,settest] = useState(0)
  async function start(){
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const formattedDate = format(yesterday, "yyyy-MM-dd");


    const response = await axios.get(`http://127.0.0.1:8000/met/?date=${formattedDate}`)
    if (response.data.length >0) {
      setopenpms1(response.data[0].closingpms1)
      setopenpms2(response.data[0].closingpms2)
      setopenpms3(response.data[0].closingpms3)
      setopenpms4(response.data[0].closingpms4)
      
      setopendiesel1(response.data[0].closingdiesel1)
      setopendiesel2(response.data[0].closingdiesel2)
      setopendiesel3(response.data[0].closingdiesel3)
      setopendiesel4(response.data[0].closingdiesel4)
      console.log(response.data[0].closingpms1)
      console.log(openpms1)


    }else {
      setopenpms1(0)
      setopenpms2(0)
      setopenpms3(0)
      setopenpms4(0)
      
      setopendiesel1(0)
      setopendiesel2(0)
      setopendiesel3(0)
      setopendiesel4(0)
      console.log(`http://127.0.0.1:8000/met/?date=${formattedDate}`)
      

    }
  }

  useEffect(()=>{
    start()
    

  },[])



  async function handleSubmit() {
    const formattedDate = format(today, "yyyy-MM-dd");
    console.log(formattedDate);

    const p1 = closepms1 - openpms1;
    const p2 = closepms2 - openpms2;
    const p3 = closepms3 - openpms3;
    const p4 = closepms4 - openpms4;
    const d1 = closediesel1 - opendiesel1;
    const d2 = closediesel2 - opendiesel2;
    const d3 = closediesel3 - opendiesel3;
    const d4 = closediesel4 - opendiesel4;
    const p = (p1 + p2 + p3 + p4)-pmsrtt;
    const d = (d1 + d2 + d3 + d4)- dieselrtt;

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/met/?date=${formattedDate}`
      );
      const [data] = response.data;
      const Url = data.url;
      axios.put(`${Url}`, {
        openingpms1: openpms1,
        openingpms2: openpms2,
        openingpms3: openpms3,
        openingpms4: openpms4,
        openingdiesel1: opendiesel1,
        openingdiesel2: opendiesel2,
        openingdiesel3: opendiesel3,
        openingdiesel4: opendiesel4,
        closingpms1: closepms1,
        closingpms2: closepms2,
        closingpms3: closepms3,
        closingpms4: closepms4,
        closingdiesel1: closediesel1,
        closingdiesel2: closediesel2,
        closingdiesel3: closediesel3,
        closingdiesel4: closediesel4,
        pms1: p1,
        pms2: p2,
        pms3: p3,
        pms4: p4,
        diesel1: d1,
        diesel2: d2,
        diesel3: d3,
        diesel4: d4,
        date: formattedDate,
        pms: p,
        diesel: d,
        pms_rtt:pmsrtt,
        ago_rtt:dieselrtt,
        dippingpms:pmsdip,
        dippingago:dieseldip
      });

      console.log(Url);
      console.log("updated");
    } catch (error) {
      axios.post("http://127.0.0.1:8000/met/", {
        openingpms1: openpms1,
        openingpms2: openpms2,
        openingpms3: openpms3,
        openingpms4: openpms4,
        openingdiesel1: opendiesel1,
        openingdiesel2: opendiesel2,
        openingdiesel3: opendiesel3,
        openingdiesel4: opendiesel4,
        closingpms1: closepms1,
        closingpms2: closepms2,
        closingpms3: closepms3,
        closingpms4: closepms4,
        closingdiesel1: closediesel1,
        closingdiesel2: closediesel2,
        closingdiesel3: closediesel3,
        closingdiesel4: closediesel4,
        pms1: p1,
        pms2: p2,
        pms3: p3,
        pms4: p4,
        diesel1: d1,
        diesel2: d2,
        diesel3: d3,
        diesel4: d4,
        date: formattedDate,
        pms: p,
        diesel: d,
        pms_rtt:pmsrtt,
        ago_rtt:dieselrtt,
        dippingpms:pmsdip,
        dippingago:dieseldip,
      });
      console.log("posted new one");
    }
    const response1 = await axios.get("http://127.0.0.1:8000/stock/1/");
    console.log(response1.data.pms_stock);
    const newpms = response1.data.pms_stock - p;
    const newdiesel = response1.data.diesel_stock - d;

    axios.put("http://127.0.0.1:8000/stock/1/", {
      pms_stock: newpms,
      diesel_stock: newdiesel,
    });
  }

  return (
    <div className="App">
      <h2>Daily Meter Calculations</h2>
      <My_nav />
      <div style={{ marginBottom: "20px" }}>
        

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 1 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopenpms1(event.target.value)}
            value={openpms1}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 1 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosepms1(event.target.value)}
          />
        </InputGroup>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 2 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopenpms2(event.target.value)}
            value={openpms2}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 2 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosepms2(event.target.value)}
          />
        </InputGroup>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 3 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopenpms3(event.target.value)}
            value={openpms3}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 3 reading PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosepms3(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 4 PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopenpms4(event.target.value)}
            value={openpms4}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 4 PMS -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosepms4(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 1 reading Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopendiesel1(event.target.value)}
            value={opendiesel1}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 1 reading Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosediesel1(event.target.value)}
          />
        </InputGroup>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 2 reading Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopendiesel2(event.target.value)}
            value={opendiesel2}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 2 reading Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosediesel2(event.target.value)}
          />
        </InputGroup>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 3 Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopendiesel3(event.target.value)}
            value={opendiesel3}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 3 reading Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosediesel3(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Opening Meter 4 Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setopendiesel4(event.target.value)}
            value={opendiesel4}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Closing Meter 4 Diesel -litres-
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setclosediesel4(event.target.value)}
          />
        </InputGroup>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            PMS RTT
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setpmsrtt(event.target.value)}
            value={opendiesel1}
          />
        </InputGroup>
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Diesel RTT
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setdieselrtt(event.target.value)}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            PMS dipping
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setpmsdip(event.target.value)}
          />
        </InputGroup>

        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">
            Diesel dipping
          </InputGroup.Text>
          <Form.Control
            id="amountSpent"
            type="number"
            min="0"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(event) => setdieseldip(event.target.value)}
          />
        </InputGroup>
      </div>

      <Button variant="danger" onClick={handleSubmit}>
        Submit
      </Button>
      <h4><a href="http://127.0.0.1:8000/met/">View All Instances of Meters</a></h4>
    </div>
  );
}

export default My_meter;
