
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';
import FarmerLayout from './layouts/FarmerLayout';

import Home from './pages/home/index';
import Login from './pages/signin/admin/index';
import AddGSOPage from './pages/addGSO/index';
import AddCropData from './pages/addCropData/index';
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
    <Route path="/admin/login" element={<Login/>} exact />
    <Route path="/admin/add-gso" element={<AddGSOPage/>} />
    <Route path="/admin/add-crop-data" element={<AddCropData/>} />


    </Routes>
    </BrowserRouter>    
  );
}

export default App;
