import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AdminNavbar from '../../components/admin_navbar/index';
import AddGSO from '../../components/addGSO/index';
import GSOProfile from '../../components/gsoDetails/index';
import DetailsCard from '../../components/details_card_gso/index';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import mHome from '../../assets/images/mainOfficerHome.jpg';
import api from '../../api';

export default function HomeMainOfficer() {
  const [nic, setNic] = useState('');
  const [favailability, setFavailability] = useState(false); 
  const [clicked, setClicked] = useState(false);
  const [gso, setGso] = useState([]);

  const handleSearch = async (e) => {
    
    try{
      const [code, res] = await api.gso.checkGsoAvailability({"nic": nic})
      if(code === 201){
        if (res){
          setFavailability(true);
          setClicked(true);
          setGso(res);
          
        }else{
          setFavailability(false);
          setClicked(true);
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
            
      <Box component="" sx={{ mt: 3, mb: 3}} >
      <TextField
        required
        fullWidth
        id="nic"
        type="text"
        label="Enter Govijana Seva Officer's NIC"
        name="nic"
        onChange={(e) => {
          setFavailability(false);
          setClicked(false);
          setNic(e.target.value)}}
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
      
      {!favailability && !clicked && <img style={{width: '100%', height: '100%'}} src={mHome} alt="mHome" />}

      {favailability && clicked && <DetailsCard gsoDetails={gso} />}

      {clicked && !favailability && <AddGSO />}
      
    
    </div>    
    </div>
    
  );
}

