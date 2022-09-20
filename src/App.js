import logo from './logo.svg';
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
 
      <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} exact />
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
