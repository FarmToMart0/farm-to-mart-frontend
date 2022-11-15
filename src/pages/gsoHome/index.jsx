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

export default function GSOHome() {
  const navigate = useNavigate();
  const handleSearch = (e) => {

    
      navigate('../../gso/farmer-details/')
  
  };

  const [nic, setNic] = '';

  return (
    <div>
      <AdminNavbar />
    <div style={{margin: 'auto',
        width: '70%',
        padding: '10px', }}>
            
      <Box component="form" sx={{ mt: 3, mb: 3}} onSubmit={handleSearch}>
      <TextField
        required
        fullWidth
        id="nic"
        type="text"
        label="Enter Farmer's NIC"
        name="nic"
        autoFocus
      />

      <Button
        type="submit"
        id="submit"
        fullWidth
        //disabled={isLoading}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Search
      </Button>
      </Box>

      <img style={{width: '100%', height: '100%'}} src={gsoHome} alt="gsoHome" />
      
    
    </div>
    
    {/* <AddFarmer />
    <FarmerProfile />
    <CropDataForm /> */}
    
    </div>
    
  );
}


