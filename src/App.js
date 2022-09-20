import logo from './logo.svg';
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';
import Login from './pages/signin/admin/index'

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
 
      <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} exact />
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
    <Route path="/admin/login" element={<Login/>} exact />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
