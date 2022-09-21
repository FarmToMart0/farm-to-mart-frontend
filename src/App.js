
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';
// import Card from './pages/market/index'
import Card from './pages/market/index';


import { BrowserRouter } from 'react-router-dom';
function App() {
  const arr = [
    { label: 'Paddy'},
    { label: 'Carrot' },
    { label: 'Beans'},
    { label: 'Eggs'},
    { label: 'Potato'},
  ]
  return (
    
    <BrowserRouter>
    <Routes>

    {/* <Route path="/home" element={<Home/>} exact /> */}
    <Route path="/card" element={<Card /> }exact />

    <Route path="/home" element={<Home/>} exact />
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
