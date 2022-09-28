
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';


import Home from './pages/home/index';
import Card from './pages/signUp/index';
import ShoppingCard from '././pages/shoppingCard/index'
import Card2 from './components/signup_button/index';
import Market from './pages/Market/index'
import Item from './pages/shoppingCard/index'
import Bid from '././pages/Bidding'
import PieGraph from './components/PieGraph/index'
import BarGraph from './components/BarGraph/index'
import LineGraph from './components/LineChart/index'



import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    
    <BrowserRouter>
    <Routes>

      {/* <Route path="/home" element={<Home/>} exact /> */}
      <Route path="/card" element={<Card /> }exact />
      <Route path="/card2" element={<Card2 /> }exact />
      <Route path="/home" element={<Home/>} exact />
      <Route path="/market" element={<Market/>} exact />
      <Route path="/shopping" element={<ShoppingCard/>} exact />
      <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
      <Route path="/item" element={<Item/>} exact />
      <Route path="/bid" element={<Bid/>} exact />
      <Route path="/pie" element={<PieGraph/>} exact />
      <Route path="/bar" element={<BarGraph/>} exact />
      <Route path="/line" element={<LineGraph/>} exact />

    </Routes>
    </BrowserRouter>

  );
}

export default App;
