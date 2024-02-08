import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function My_nav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> 

            <Nav.Link href='/daily_sales'>Daily Sales</Nav.Link>
            <Nav.Link href='/daily_expenses'>Daily Expenses</Nav.Link>
            

            
            <Nav.Link href='/daily_electronics'>Daily Electronic Sales</Nav.Link>
            

            
            <Nav.Link href='/daily_profits'>Daily Profit</Nav.Link>
            

            
            <Nav.Link href='/daily_netprofits'>Daily Net Profit</Nav.Link>
            

            
            <Nav.Link href='/stocks'>Stock Calculations</Nav.Link>

            <Nav.Link href='/meter'>Daily Meter</Nav.Link>
            <Nav.Link href='/month'>Get Report</Nav.Link>
            <Nav.Link href='/electronics_report'>Electronics report</Nav.Link>
            <Nav.Link href='/expense_report'>Expense report</Nav.Link>
            <Nav.Link href='/meter_report'>Meter report</Nav.Link>
            <Nav.Link href='/balancing_report'>Balancing report</Nav.Link>
            <Nav.Link href='/pl_report'>Profit and Loss report</Nav.Link>
            <Nav.Link href='/banking'>Daily banking</Nav.Link>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default My_nav;