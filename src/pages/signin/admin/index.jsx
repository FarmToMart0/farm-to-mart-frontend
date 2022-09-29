import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from '../../../components/navbar';
import Footer from '../../../components/Footer';
import Alert from '@mui/material/Alert';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        www.farm2mart.org
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignInSide() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "nic1",
      password: "pass1"
    },
    {
      username: "nic2",
      password: "pass2"
    }
  ];
  
  const errors = {
    nic: "Invalid login, please try again",
    pass: "Invalid login, please try again"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { nic, pass } = document.forms[0];
  
    // Find user login info
    const userData = database.find((user) => user.username === nic.value);
  
    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "nic", message: errors.nic });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <Alert icon={false} sx={{ mt: '1vw', mb: '1vw' }} severity="error">{errorMessages.message}</Alert>
  );

  // JSX code for login form
const renderForm = (
  <div>
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, color: 'black' }}>
            {renderErrorMessage("pass")}
            {renderErrorMessage("nic")}

            <TextField sx={{ color: 'black' }}
              margin="normal"
              required
              type='text'
              fullWidth
              id="nic"
              label="National Identity Card"
              name="nic"
              //autoComplete="nic"
              autoFocus />

             

            <TextField sx={{ color: 'black' }}
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Password"
              type="password"
              id="pass"
              //autoComplete="current-password"
               />
              
            <FormControlLabel sx={{ color: '#12877a', fontSize: '10px' }}


              control={<Checkbox value="remember" />}
              label="Remember me" />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color='#12877a'>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
  </div>
);


  




  return (
   <><ResponsiveAppBar /><Grid container component="main" sx={{ height: '100%', width: '80%', margin: 'auto', mt: '5vw', mb: '2vw' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://res.cloudinary.com/dnrpcuqvr/image/upload/v1664302241/Farm2Mart/ehchrv00rpxnz2uuc09b.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square backgroundColor='#ffffff'>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color='primary'>
            Sign in
          </Typography>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        </Box>
      </Grid>
    </Grid>
    <Footer/>
    </>
 
  );
}