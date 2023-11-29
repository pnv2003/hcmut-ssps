import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginRequired from './pages/LoginRequired';
import StudentHome from './pages/student/StudentHome';
import PrintDoc from './pages/student/PrintDoc';
import BuyPage from './pages/student/BuyPage';
import PrintingLog from './pages/student/PrintingLog';
import Dashboard from './pages/admin/Dashboard';
import PrinterInfo from './pages/admin/PrinterInfo';
import PrinterStatus from './pages/admin/PrinterStatus';
import ConfigPageAllocation from './pages/admin/ConfigPageAllocation';
import ConfigFile from './pages/admin/ConfigFile';
import ConfigLocation from './pages/admin/ConfigLocation';
import Statistics from './pages/admin/Statistics';
import PrintingLogAll from './pages/admin/PrintingLogAll';
import PaymentLog from './pages/admin/PaymentLog';
import PrinterAdd from './pages/admin/PrinterAdd';

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route element={<LoginRequired />}>
          <Route path='/student' element={<StudentHome />} />
          <Route path='/student/print' element={<PrintDoc />} />
          <Route path='/student/buy' element={<BuyPage />} />
          <Route path='/student/log' element={<PrintingLog />} />

          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/printer/info' element={<PrinterInfo />} />
          <Route path='/admin/printer/status' element={<PrinterStatus />} />
          <Route path='/admin/printer/add' element={<PrinterAdd />} />
          <Route path='/admin/config/pgalloc' element={<ConfigPageAllocation />} />
          <Route path='/admin/config/file' element={<ConfigFile />} />
          <Route path='/admin/config/location' element={<ConfigLocation />} />
          <Route path='/admin/log/print' element={<PrintingLogAll />} />
          <Route path='/admin/log/pay' element={<PaymentLog />} />
          <Route path='/admin/stat' element={<Statistics />} />
        </Route>
      </Routes>
    
  );
}

export default App;
