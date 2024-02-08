import React, { useState } from "react";
import My_nav from "./components/navbar";
import axios from "axios";
import { format, eachDayOfInterval } from "date-fns";
import { Container, Row, Col,Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default function Expenses_report() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [expense_list, set_expense] = useState([]);

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
          `http://127.0.0.1:8000/e/?date=${formattedDay}`
        );
        const expenses = response.data;

        if (response.data.length > 0) {
          for (const expense of expenses) {
            tempList.push(expense);
          }
        }
      } catch (error) {
        console.log("there was an error");
      }
    }
    set_expense(tempList);
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

      <Container>
        <Row>
          <Col>Date</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.date}</Col>
          ))}
        </Row>

        <Row>
          <Col>Garbage</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.garbage}</Col>
          ))}
        </Row>

        <Row>
          <Col>Liquid soap</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.liquid_soap}</Col>
          ))}
        </Row>

        <Row>
          <Col>Car Fuel</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.car_fuel}</Col>
          ))}
        </Row>

        <Row>
          <Col>Food</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.food}</Col>
          ))}
        </Row>

        <Row>
          <Col>Broom</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.broom}</Col>
          ))}
        </Row>

        <Row>
          <Col>Transport</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.transport}</Col>
          ))}
        </Row>

        <Row>
          <Col>Airtime</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.transport}</Col>
          ))}
        </Row>

        <Row>
          <Col>Price survey</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.airtime}</Col>
          ))}
        </Row>

        <Row>
          <Col>hosepipe and rubber</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.price_survey}</Col>
          ))}
        </Row>

        <Row>
          <Col>Salary</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.hosepipe_rubber}</Col>
          ))}
        </Row>

        <Row>
          <Col>Staff advance</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.salary}</Col>
          ))}
        </Row>

        <Row>
          <Col>Water bill</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.staff_advance}</Col>
          ))}
        </Row>

        <Row>
          <Col>Generator</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.generator}</Col>
          ))}
        </Row>

        <Row>
          <Col>Shortage</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.shorteg}</Col>
          ))}
        </Row>

        <Row>
          <Col>Others</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>{item.others}</Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
