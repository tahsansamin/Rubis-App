import React, { useState } from "react";
import My_nav from "./components/navbar";
import axios from "axios";
import { format, eachDayOfInterval } from "date-fns";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Balancing_report() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [met_list, set_met] = useState([]);
  const [stock_list, set_stocks] = useState([]);
  const [expense_list, set_expenses] = useState([]);
  const [bank_list,set_bank] = useState([]);

  // this is to get the price and stuff from daily sales .js
  const [sales_list, set_sales] = useState([]);

  const [elec_list, set_elec] = useState([]);

  async function report() {
    console.log("running");
    const start = format(startDate, "yyyy-MM-dd");
    const end = format(endDate, "yyyy-MM-dd");

    const daysInRange = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    });

    const tempList = [];
    const tempList1 = [];
    const tempList2 = [];
    const tempList3 = [];
    const tempList4 = [];
    const tempList5 = [];

    for (const day of daysInRange) {
      const formattedDay = format(day, "yyyy-MM-dd");
      try {
        // first we will get the meters for that day
        const response = await axios.get(
          `http://127.0.0.1:8000/met/?date=${formattedDay}`
        );
        const response1 = await axios.get(
          `http://127.0.0.1:8000/elect/?date=${formattedDay}`
        );
        const response2 = await axios.get(
          `http://127.0.0.1:8000/fu/?date=${formattedDay}`
        );
        const response3 = await axios.get(
          `http://127.0.0.1:8000/b/?date=${formattedDay}`
        );

        const response4 = await axios.get(
          `http://127.0.0.1:8000/e/?date=${formattedDay}`
        );
        const response5 = await axios.get(
          `http://127.0.0.1:8000/banking/?date=${formattedDay}`
        );
        const mets = response.data;
        const elecs = response1.data;
        const fuels = response2.data;
        const stocks = response3.data;
        const expenses = response4.data;
        const banks = response5.data;
        

        for (const meter of mets) {
          tempList.push(meter);
        }

        // Push data from the "elecs" array into tempList
        for (const elec of elecs) {
          tempList1.push(elec);
        }

        // Push data from the "fuels" array into tempList
        for (const fuel of fuels) {
          tempList2.push(fuel);
        }

        for (const stock of stocks) {
          tempList3.push(stock);
        }
        for (const expense of expenses) {
          tempList4.push(expense);
        }

        for (const bank of banks) {
          tempList5.push(bank);
          
          
        }
        
      } catch (error) {
        console.log("there was an error");
      }
    }
    
    set_met(tempList);
    set_elec(tempList1);
    set_sales(tempList2);
    set_stocks(tempList3);
    set_expenses(tempList4);
    set_bank(tempList5);
    // console.log(bank_list)
    console.log(elec_list)
    console.log(bank_list)
    
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
      <Container>
        <Row>
          <Col>PMS Quantity</Col>
          {met_list.map((item, index) => (
            <Col key={index}>{item.pms}</Col>
          ))}
        </Row>
        <Row>
          <Col>PMS Price</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.pms_price}</Col>
          ))}
        </Row>
        <Row>
          <Col>PMS Sales</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.pms_sales}</Col>
          ))}
        </Row>
        <Row>
          <Col>Diesel Quantity</Col>
          {met_list.map((item, index) => (
            <Col key={index}>{item.diesel}</Col>
          ))}
        </Row>
        <Row>
          <Col>Diesel Price</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.diesel_price}</Col>
          ))}
        </Row>
        <Row>
          <Col>Diesel Sales</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.diesels_sales}</Col>
          ))}
        </Row>
        <Row>
          <Col>Total Sales Quantity</Col>
          {met_list.map((item, index) => (
            <Col key={index}>{item.diesel + item.pms}</Col>
          ))}
        </Row>
        <Row>
          <Col>Total Sales UGX</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.diesels_sales + item.pms_sales}</Col>
          ))}
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col>Momo Pay</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>{item.momo_pay}</Col>
          ))}
        </Row>
        <Row>
          <Col>Airtel Pay</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>{item.airtel_pay}</Col>
          ))}
        </Row>
        <Row>
          <Col>Visa Card</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>{item.cd_pay}</Col>
          ))}
        </Row>
        <Row>
          <Col>Rubis Card</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>{item.rubis_card_pay}</Col>
          ))}
        </Row>
        <Row>
          <Col>Rubis App</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>{item.app_pay}</Col>
          ))}
        </Row>
        <Row>
          <Col>Total Electronic Sales</Col>
          {elec_list.map((item, index) => (
            <Col key={index}>
              {item.momo_pay +
                item.airtel_pay +
                item.cd_pay +
                item.app_pay +
                item.rubis_card_pay}
            </Col>
          ))}
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col>Lubricants</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.lubs}</Col>
          ))}
        </Row>
        <Row>
          <Col>Other Cash Colleciton </Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.others}</Col>
          ))}
        </Row>
        <Row>
          <Col>Gas</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{item.gas}</Col>
          ))}
        </Row>

        <Row>
          <Col>Total Expenses</Col>
          {expense_list.map((item, index) => (
            <Col key={index}>
              {item.garbage +
                item.liquid_soap +
                item.car_fuel +
                item.food +
                item.broom +
                item.transport +
                item.airtime +
                item.price_survey +
                item.hosepipe_rubber +
                item.salary +
                item.staff_advance +
                item.water_bill +
                item.generator +
                item.shorteg +
                item.others}
            </Col>
          ))}
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <br />
        </Row>
        <Row>
          <Col>Banking</Col>
          {bank_list.map((item, index) => (
            <Col key={index}>
              {item.my_banking}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Banking as per station</Col>
          {bank_list.map((item, index) => (
            <Col key={index}>
              {item.station_banking}
            </Col>
          ))}
        </Row>

        <Row>
          <Col>Difference</Col>
          {bank_list.map((item, index) => (
            <Col key={index}>
              {item.difference}
            </Col>
          ))}
        </Row>

        <Row>
          <br />
        </Row>

        <Row>
          <Col>PMS Opening Stock</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.openingpms1 +
                item.openingpms2 +
                item.openingpms3 +
                item.openingpms4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Sales PMS</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.pms1 + item.pms2 + item.pms3 + item.pms4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Closing stock pms</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4 -
                item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Dipping</Col>
          {met_list.map((item, index) => (
            <Col key={index}>{item.dippingpms}</Col>
          ))}
        </Row>
        <Row>
          <Col>Shortage gain/qty</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.dippingpms -
                item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4 -
                item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Shortage gain value</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.dippingpms -
                item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4 -
                item.pms1 +
                item.pms2 +
                item.pms3 +
                item.pms4 * sales_list[index].pms_price}
            </Col>
          ))}
        </Row>
        <Row>
          <br />
          <br />
        </Row>
        <Row>
          <Col>Diesel Opening Stock</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.openingdiesel1 +
                item.openingdiesel2 +
                item.openingdiesel3 +
                item.openingdiesel4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Sales Diesel</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.diesel1 + item.diesel2 + item.diesel3 + item.diesel4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Closing stock diesel</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Dipping</Col>
          {met_list.map((item, index) => (
            <Col key={index}>{item.dippingago}</Col>
          ))}
        </Row>
        <Row>
          <Col>Shortage gain/qty</Col>
          {met_list.map((item, index) => (
            <Col key={index}>
              {item.dippingago -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4}
            </Col>
          ))}
        </Row>
        <Row>
          <Col>Shortage gain value</Col>
          {met_list.map((item, index) => {
            const dieselPrice = parseFloat(sales_list[index]?.diesel_price);

            if (!isNaN(dieselPrice)) {
              // Check if dieselPrice is a valid number
              const result =
                item.dippingago -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 * dieselPrice;

              return <Col key={index}>{result}</Col>;
            } else {
              return <Col key={index}>Invalid Diesel Price</Col>;
            }
          })}
        </Row>
        <Row>
          <br />
          <br />
        </Row>
        <Row>
          <Col>Total Shortage</Col>
          {met_list.map((item, index) => {
            const pmsShortage =
              item.dippingpms -
              item.pms1 +
              item.pms2 +
              item.pms3 +
              item.pms4 -
              item.pms1 +
              item.pms2 +
              item.pms3 +
              item.pms4 * sales_list[index].pms_price;

            const dieselPrice = parseFloat(sales_list[index]?.diesel_price);

            if (!isNaN(dieselPrice)) {
              // Check if dieselPrice is a valid number
              const dieselShortage =
                item.dippingago -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 -
                item.diesel1 +
                item.diesel2 +
                item.diesel3 +
                item.diesel4 * dieselPrice;

              // Calculate the total shortage
              const totalShortage = pmsShortage + dieselShortage;

              return <Col key={index}>{totalShortage}</Col>;
            } else {
              return <Col key={index}>Invalid Diesel Price</Col>;
            }
          })}
        </Row>
        <Row>
          <Col>Dealer fee on purchase</Col>
          {stock_list.map((item, index) => (
            <Col key={index}>{item.dealer_fee}</Col>
          ))}
        </Row>
        <Row>
          <Col>Daily Gross profit</Col>
          {sales_list.map((item, index) => (
            <Col key={index}>{(item.diesels_sales + item.pms_sales) * 100}</Col>
          ))}
        </Row>
        <Row>
          <Col>Daily net profit</Col>
        </Row>
      </Container>
      
    </div>
  );
}
// 
