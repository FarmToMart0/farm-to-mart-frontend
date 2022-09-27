import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AdminNavbar from '../admin_navbar/index';

export default function AddCropData() {
    const [age, setAge] = React.useState('');

//   const handleChange = (event: SelectChangeEvent) => {
//     setAge(event.target.value);
//   }; 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({

    //   email: data.get('email'),
    //   password: data.get('password'),

    // });
  };

  return (
      <div>
        <Container component="main" maxWidth="" sx={{width:'60%', background:'white', boxShadow: 
        '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )', borderRadius:'5px', mb: '5vw'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" color='primary' sx={{mt: 3, mb: 3, fontSize: '2rem', fontWeight: 'bold'}}>
            Add Crop Data
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 3}}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="crop-type"
                  type="text"
                  label="Crop Type"
                  name="crop-type"
                  autoComplete="crop-type"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="crop-name"
                  type="text"
                  label="Crop Name"
                  name="crop-name"
                  autoComplete="crop-name"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="land-size"
                  type="text"
                  label="Growing Land Size"
                  name="land-size"
                  autoComplete="land-size"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Acre</InputAdornment>,
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <FormControl variant="outlined" sx={{width:'100%'}}>
              <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'1rem'}}>Start Date of Growing</FormHelperText>
                <OutlinedInput
                    id="s-date"
                    name='s-date'
                    // value={values.weight}
                    // onChange={handleChange('weight')}
                    type = 'date'
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                />
                
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="est-harvest"
                  type="number"
                  label="Estimated Harvest (kg)"
                  name="est-harvest"
                  autoComplete="est-harvest"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="est-time"
                  type="number"
                  label="Estimated Time Period to Harvest"
                  name="est-time"
                  autoComplete="est-time"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Months</InputAdornment>,
                  }}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Crop Details
            </Button>
            
          </Box>
        </Box>
        
      </Container>

      </div>
      
  );
}