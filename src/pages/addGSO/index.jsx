import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AdminNavbar from '../../components/admin_navbar/index';

export default function AddGSO() {
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
        <AdminNavbar />
        <Container component="main" maxWidth="" sx={{width:'60%', boxShadow: 
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
          <Typography component="h1" variant="h5" color='primary' sx={{mt: 2}}>
            GoviJana Seva Officer Registration
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  type="tel"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl required sx={{ m: 1, minWidth: "100%", margin:'0'}}>
                    <InputLabel id="demo-simple-select-required-label">District</InputLabel>
                    <Select
                    labelId="district"
                    id="district"
                    //value={district}
                    label="District *"
                    // onChange={handleChange}
                    >
                    <MenuItem value={"Colombo"}>Colombo</MenuItem>
                    <MenuItem value={"Gampaha"}>Gampaha</MenuItem>
                    <MenuItem value={"Kalutara"}>Kalutara</MenuItem>
                    <MenuItem value={"Kandy}"}>Kandy</MenuItem>
                    <MenuItem value={"Matale"}>Matale</MenuItem>
                    <MenuItem value={"Nuwara Eliya"}>Nuwara Eliya</MenuItem>
                    <MenuItem value={"Galle"}>Galle</MenuItem>
                    <MenuItem value={"Matara"}>Matara</MenuItem>
                    <MenuItem value={"Hambantota"}>Hambantota</MenuItem>
                    <MenuItem value={"Jaffna"}>Jaffna</MenuItem>
                    <MenuItem value={"Kilinochchi"}>Kilinochchi</MenuItem>
                    <MenuItem value={"Mannar"}>Mannar</MenuItem>
                    <MenuItem value={"Vavuniya"}>Vavuniya</MenuItem>
                    <MenuItem value={"Mullaitivu"}>Mullaitivu</MenuItem>
                    <MenuItem value={"Batticaloa"}>Batticaloa</MenuItem>
                    <MenuItem value={"Ampara"}>Ampara</MenuItem>
                    <MenuItem value={"Trincomalee"}>Trincomalee</MenuItem>
                    <MenuItem value={"Kurunegala"}>Kurunegala</MenuItem>
                    <MenuItem value={"Puttalam"}>Puttalam</MenuItem>
                    <MenuItem value={"Anuradhapura"}>Anuradhapura</MenuItem>
                    <MenuItem value={"Polonnaruwa"}>Polonnaruwa</MenuItem>
                    <MenuItem value={"Badulla"}>Badulla</MenuItem>
                    <MenuItem value={"Moneragala"}>Moneragala</MenuItem>
                    <MenuItem value={"Ratnapura"}>Ratnapura</MenuItem>
                    <MenuItem value={"Kegalle"}>Kegalle</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  required
                  fullWidth
                  id="gsodevision"
                  label="GoviJana Seva Devision"
                  name="gsodevision"
                  autoComplete="gso-devision"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="gsocode"
                  label="GoviJana Seva Devision Code"
                  name="gsocode"
                  autoComplete="gso-code"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nic"
                  label="National Identity Card Number"
                  name="nic"
                  autoComplete="nic"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conf-password"
                  label="Confirm Password"
                  type="password"
                  id="conf-password"
                  autoComplete="conf-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            
          </Box>
        </Box>
        
      </Container>

      </div>
      
  );
}