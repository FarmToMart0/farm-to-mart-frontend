import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AdminNavbar from '../../components/admin_navbar/index';
import AddFarmer from '../../components/add_farmer/index';
import FarmerProfile from '../../components/farmer_details/index';
import DetailsCard from '../../components/details_card/index';
import CropDataForm from '../../components/addCropData/index';


export default function GSOHome() {
  return (
    <div>
  
    <div style={{margin: 'auto',
        width: '70%',
        padding: '10px', }}>
            
        <Stack spacing={2} sx={{padding:'5vw', width: '100%', textAlign:'center', mb: 0, paddingRight: 0, paddingLeft: 0, paddingBottom: '3vw'}}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={farmerNics.map((option) => option.nic)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter Farmer's National Identity Card Number"
            InputProps={{
              ...params.InputProps,
              type: 'search', endAdornment: <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>,
            }}

            sx = {{textAlign: 'center'}}
          />
        )}
      />
    </Stack>
    
    </div>
    
    <AddFarmer />
    <FarmerProfile />
    <CropDataForm />
    
    </div>
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const farmerNics = [
    { nic: '123456789V' },
    { nic: '937654321V' },
    { nic: '123056789V' },
    { nic: '987654321V' },
    { nic: '123756789V' },
];
