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
// import Card from './pages/market/index'
import Card from './pages/market/index';
import DetailsCard from './components/details_card/index';
import GSOHome from './pages/gsoHome/index';
import FarmerSignUp from './pages/farmer/SignUp/index';
import BuyerSignUp from './pages/buyerSignUp/index';


import { BrowserRouter } from 'react-router-dom';
import ItemAdd from './pages/home/index';
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
    
    <Route path="/farmer/dash/:page" element={<FarmerLayout/>}/>
    

    {/* <Route path="/home" element={<Home/>} exact /> */}
    <Route path="/card" element={<Card /> }exact />

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

    </Routes>
    </BrowserRouter>    
  );
}

export default App;
