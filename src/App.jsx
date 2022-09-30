import React from 'react';
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';
import Login from './pages/signin/admin/index';
import AddGSOPage from './components/addGSO/index';
import AddCropData from './components/addCropData/index';
import ShowGSO from './components/gsoDetails/index';
import HomeMainOfficer from './pages/homeMainOfficer/index';

import DetailsCard from './components/details_card/index';
import GSOHome from './pages/gsoHome/index';
import FarmerSignUp from './pages/farmer/SignUp/index';
import BuyerSignUp from './pages/buyerSignUp/index';
// ====================Buyer================


import ShoppingCard from '././pages/shoppingCard/index'
import Card2 from './components/signup_button/index';
import Market from './pages/Market/index'
import Item from './pages/shoppingCard/index'
import Bid from '././pages/Bidding'
import PieGraph from './components/PieGraph/index' 
import BarGraph from './components/BarGraph/index'
import LineGraph from './components/LineChart/index'
import Dashboard from './pages/F-Dashboard/index'
import GraphCard from './components/graphCard/index'
import Payment from './pages/Payment/index'




import { BrowserRouter } from 'react-router-dom';
import ItemAdd from './pages/home/index';
function App() {
  
  return (
    <BrowserRouter>    
    <Routes>
    
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
    

    {/* <Route path="/home" element={<Home/>} exact /> */}
   

    <Route path="/" element={<Home/>} exact />
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
    <Route path="/login" element={<Login/>} exact />
    <Route path="/main-officer/add-gso" element={<AddGSOPage/>} />
    <Route path="/gso/add-crop-data" element={<AddCropData/>} />
    <Route path="/main-officer/show-gso" element={<ShowGSO/>} />
    <Route path="/main-officer/home" element={<HomeMainOfficer/>} />
    <Route path='/gso/home' element={<GSOHome/>}/>
    <Route path='/farmer/signup' element={<FarmerSignUp/>}/>
    <Route path='/buyer/signup' element={<BuyerSignUp/>}/>

    {/* ==================Buyer================ */}
    
      <Route path="/card2" element={<Card2 /> }exact />
    
      <Route path="/market" element={<Market/>} exact />
      <Route path="/shopping" element={<ShoppingCard/>} exact />
      <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
      <Route path="/item" element={<Item/>} exact />
      <Route path="/bid" element={<Bid/>} exact />
      <Route path="/pie" element={<PieGraph/>} exact />
      <Route path="/bar" element={<BarGraph/>} exact />
      <Route path="/line" element={<LineGraph/>} exact />
      <Route path="/dashboard" element={<Dashboard/>} exact />
      <Route path="/test" element={<PieGraph/>} exact />
      <Route path="/graphcard" element={<GraphCard/>} exact />
      <Route path="/payment" element={<Payment/>} exact />

    </Routes>
    </BrowserRouter>    
  );
}

export default App;
