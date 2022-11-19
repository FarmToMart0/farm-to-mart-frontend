import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AdminNavbar from '../../components/admin_navbar/index';
import AddFarmer from '../../components/add_farmer/index';
import FarmerProfile from '../../components/farmer_details/index';
import DetailsCard from '../../components/details_card/index';
import CropDataForm from '../../components/addCropData/index';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import gsoHome from '../../assets/images/gsoHome.jpg';
import api from '../../api';

export default function GSOHome() {
  const [nic, setNic] = useState('');
  const [favailability, setFavailability] = useState(false); 
  const [clicked, setClicked] = useState(false);
  const [farmer, setFarmer] = useState([]);

  const handleSearch = async (e) => {
    setClicked(true);
    try{
      const [code, res] = await api.gso.checkFarmerAvailability({"nic": nic})
      if(code === 201){
        if (res){
          setFavailability(true);
          
          console.log(clicked);
          console.log(nic)
          setFarmer(res);
          
        }
      }

    }catch(error){
      console.log(error);
    }
  };

  

  return (
    <div>
      <AdminNavbar />
    <div style={{margin: 'auto',
        width: '70%',
        padding: '10px', }}>
            
      <Box component="form" sx={{ mt: 3, mb: 3}} >
      <TextField
        required
        fullWidth
        id="nic"
        type="text"
        label="Enter Farmer's NIC"
        name="nic"
        onChange={(e) => setNic(e.target.value)}
        autoFocus
      />

      <Button
        //id="submit"
        fullWidth
        //disabled={isLoading}
        variant="contained"
        onClick={handleSearch}
        sx={{ mt: 3, mb: 2 }}
      >
        Search
      </Button>
      </Box>
      
      {!favailability && !clicked && <img style={{width: '100%', height: '100%'}} src={gsoHome} alt="gsoHome" />}

      {favailability && clicked && <DetailsCard farmerDetails={farmer} />}

      {clicked && !favailability && <AddFarmer />}
      
    
    </div>
    
    {/* <AddFarmer />
    <FarmerProfile />
    <CropDataForm /> */}
    
    </div>
    
  );
}


