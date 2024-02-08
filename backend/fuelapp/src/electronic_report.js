import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { format, eachDayOfInterval } from "date-fns";
import { useState } from "react";
import My_nav from "./components/navbar";
import { Button } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";

export default function Electronic_report() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [elect_list, setElectList] = useState([]);

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
          `http://127.0.0.1:8000/elect/?date=${formattedDay}`
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
    setElectList(tempList)
  }
  async function test() {
    console.log(elect_list);
    for (const electronic of elect_list) {
      console.log(electronic.momo_pay);
    }
    
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
        Get Report
      </Button>
      <Button variant="danger" onClick={test}>
        Test function
      </Button>

      <Container>
        <Row>
          <Col >
            Date
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.date}
            </Col>
          ))}
        </Row>

        <Row>
          <Col >
            Momo Pay
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.momo_pay}
            </Col>
          ))}
        </Row>

        <Row>
          <Col >
            Airtel
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.airtel_pay}
            </Col>
          ))}
        </Row>

        <Row>
          <Col >
            Visa card
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.cd_pay}
            </Col>
          ))}
        </Row>

        <Row>
          <Col >
            Rubis card
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.rubis_card_pay}
            </Col>
          ))}
        </Row>

        <Row>
          <Col >
            Rubis app
          </Col>
          {elect_list.map((item, index) => (
            <Col key={index} >
              {item.app_pay}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
