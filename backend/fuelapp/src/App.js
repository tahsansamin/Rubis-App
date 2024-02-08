import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import My_nav from './components/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Daily_el from './Daily_electronics';
import Daily_sales from './Daily_sales';
import Daily_ex from './Daily_expenses';
import Daily_np from './Daily_netprofits';
import Daily_pr from './Daily_profits';
import Stocks from './mystocks';
import CurrentDate from './components/date';
import My_meter from './Meter';
import Monthly from './monthlyreport';
import Electronic_report from './electronic_report';
import Expenses_report from './expenses_report';
import Meter_report from './meter_report';
import Balancing_report from './balancing_report';
import Pl_report from './pl_report';
import Banking from './banking';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CurrentDate />
        <Routes>
          <Route index element={<Daily_sales/>} />
          <Route path='/daily_sales' element={<Daily_sales   />}/>
          <Route path='/daily_electronics' element={<Daily_el   />}/>
          <Route path='/daily_expenses' element={<Daily_ex   />}/>
          <Route path='/daily_netprofits' element={<Daily_np   />}/>
          
          <Route path='/daily_profits' element={<Daily_pr   />}/>

          <Route path='/stocks' element={<Stocks   />}/>
          <Route path='/meter' element={<My_meter   />}/>
          <Route path='/month' element={<Monthly   />}/>


          {/* routing for all reports */}
          <Route path='/electronics_report' element={<Electronic_report   />}/>
          <Route path='/expense_report' element={<Expenses_report   />}/>
          <Route path='/meter_report' element={<Meter_report   />}/>
          <Route path='/balancing_report' element={<Balancing_report   />}/>
          <Route path='/pl_report' element={<Pl_report   />}/>
          <Route path='/banking' element={<Banking   />}/>
          
          





        </Routes>
      </BrowserRouter>
      
      

    </div>
  );
}

export default App;
