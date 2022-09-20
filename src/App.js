import logo from './logo.svg';
import { Route,Routes,Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/home/index';

import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
 
      <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>} exact />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
