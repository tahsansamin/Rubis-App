import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format, eachDayOfInterval } from "date-fns";
import { useState } from "react";
import My_nav from "./components/navbar";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";

export default function Meter_report() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [met_list, setMetList] = useState([]);

  async function report() {
    const start = format(startDate, "yyyy-MM-dd");
    const end = format(endDate, "yyyy-MM-dd");

    const daysInRange = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });

    const tempList = [];

    for (const day of daysInRange) {
      const formattedDay = format(day, "yyyy-MM-dd");
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/met/?date=${formattedDay}`
        );
        const electronics = response.data;

        if (response.data.length > 0) {
          for (const electronic of electronics) {
            tempList.push(electronic);
          }
        }
      } catch (error) {
        console.log("there was an error");
      }
    }
    setMetList(tempList);

    console.log(met_list);
  }

  return (
    <div>
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
      <Button variant="danger" onClick={report}>
        Get report
      </Button>

      <div style={{ marginBottom: "50px" }}>
        <Container>
          <Row>
            <Col >
              Date
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.date}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              PMS opening 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingpms1}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              PMS Closing 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingpms1}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              PMS 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms1}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              PMS opening 2{" "}
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingpms2}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              PMS closing 2{" "}
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingpms2}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              PMS 2
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms2}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              PMS opening 3{" "}
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingpms3}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              PMS closing 3
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingpms3}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              PMS 3
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms3}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              PMS opening 4{" "}
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingpms4}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              PMS closing 4{" "}
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingpms4}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              PMS 4
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms4}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              PMS RTT
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms_rtt}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Total PMS sales
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Net PMS Sales
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.pms}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              Diesel opening 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingdiesel1}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              Diesel closing 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingdiesel1}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Diesel 1
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel1}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              Diesel opening 2
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingdiesel2}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              Diesel closing 2
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingdiesel2}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Diesel 2
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel2}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              Diesel opening 3
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingdiesel3}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              Diesel closing 3
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingdiesel3}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Diesel 3
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel3}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              Diesel opening 4
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.openingdiesel4}
              </Col>
            ))}
          </Row>

          <Row>
            <Col >
              Diesel closing 4
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.closingdiesel4}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Diesel 4
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel4}
              </Col>
            ))}
          </Row>

          <Row>
            <br></br>
          </Row>

          <Row>
            <Col >
              Diesel RTT
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.ago_rtt}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Total Diesel sales
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel}
              </Col>
            ))}
          </Row>
          <Row>
            <Col >
              Net Diesel Sales
            </Col>
            {met_list.map((item, index) => (
              <Col key={index} >
                {item.diesel}
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
