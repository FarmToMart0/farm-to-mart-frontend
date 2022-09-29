import * as React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AdminNavbar from '../../components/admin_navbar/index';
import AddGSO from '../../components/addGSO/index';
import GSOProfile from '../../components/gsoDetails/index';
import DetailsCard from '../../components/details_card/index';

export default function HomeMainOfficer() {
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
        options={gsoDevisions.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Govijana Seva Devision"
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
    <DetailsCard />
    <AddGSO />
    <GSOProfile />
    
    </div>
    
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const gsoDevisions = [
  { name: 'Galanigama', code: 'galle-02' },
  { name: 'The Godfather', code: 'galle-03' },
  { name: 'The Godfather: Part II', code: 'galle-04' },
  { name: 'The Dark Knight', code: 'galle-05' },
];
