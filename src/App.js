
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';
// import Card from './pages/market/index'
import Card from './components/shopping_card/index';


import { BrowserRouter } from 'react-router-dom';
function App() {

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
