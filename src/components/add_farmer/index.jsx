import * as React from 'react';
import Joi from "joi-browser";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import api from  '../../api'
import SnackBarComponent from '../Snackbars';

export default function AddFarmer() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const [errors, setErrors] = useState({});

  const [farmer, setFarmer] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    gsdName: "",
    district: "",
    gsdCode: "",
    email: "",
    nic:"",
    password:"",
    confPassword:""
  });

  const schema = {
    firstName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    lastName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    address: Joi.string().required(),
    phone: Joi.string().length(10).regex(/^[0-9]+$/, 'given').required(),
    gsdName: Joi.string().required(),
    gsdCode: Joi.string().required(),
    email: Joi.string().email().required(),
    nic: Joi.string().required(),
    district: Joi.string().required(),
    password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
    'password').required(),
    confPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  };

  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
    errorData[name] = errorMessage;
    } else {
    delete errorData[name];
    }
    let FarmerData = { ...farmer };
    FarmerData[name] = value;
    setFarmer(FarmerData);
    setErrors(errorData);
  };

  const handleDistrictChange = (event) => {
    
    setFarmer(previousState => {
      return { ...previousState, district: event.target.value }
    })
  }; 

  const validateProperty = (event) => {
    const { name, value } = event.target;
    if (name === "confPassword") {
        const obj = { password: farmer.password, [name]: value };
        const subSchema = {
          [name]: schema[name],
          password: schema["password"],
        };
        const { error } = Joi.validate(obj, subSchema);
        return error ? error.details[0].message : null;
    } else {
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = Joi.validate(farmer,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      console.log("Submitted");
      await registerFarmer(farmer); 
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      console.log(errorData);
      return errorData;
    }
 
  };

  async function registerFarmer(values) {
    try {
      const [code,res] = await api.farmer.addFarmerbyGso(values);
    
      if (code === 201) {     
        navigate('/gso/success-register-farmer');
      } else {
        setErrors({ type: 'error', message: res });
        setErrorOccured(true);
      }
      setIsLoading(false);
    } catch (error) {
      setErrors({ type: 'error', message:'server error' });
      setErrorOccured(true);
      setIsLoading(false);
    }
  }


  
  return (
      <div>
        <Typography component="h5" variant="h3" color='secondary' sx={{mt: 3, mb: 3, fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
            There is no farmer registered under the nic. Please fill the details to register the farmer.
          </Typography>
        <Container component="main" maxWidth="" sx={{background:'white',width:'100%', boxShadow: 
        '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )', borderRadius:'10px', mb: '5vw', mt:0}}>
        <CssBaseline />
        <SnackBarComponent open={errorOccured} message={errors.message} type='error'  setOpen={setErrorOccured}   />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          

          <Typography component="h1" variant="h5" color='primary' sx={{mt: 3, mb: 3, fontSize: '2rem', fontWeight: 'bold'}}>
            Farmer Registration
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
                  value={farmer.firstName}
                  onChange={handleSave}
                  autoFocus
                />

                {errors.firstName && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid First Name</Alert>)}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={farmer.lastName}
                  onChange={handleSave}
                  autoComplete="family-name"
                />
                {errors.lastName && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Last Name</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="address"
                  id="address"
                  label="Address"
                  name="address"
                  value={farmer.address}
                  onChange={handleSave}
                  autoComplete="address"
                />

                {errors.address && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Address</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  type="tel"
                  label="Mobile Number"
                  name="phone"
                  value={farmer.phone}
                  onChange={handleSave}
                  autoComplete="phone"
                />

                {errors.phone && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Mobile Number</Alert>)}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl required sx={{ m: 1, minWidth: "100%", margin:'0'}}>
                    <InputLabel id="demo-simple-select-required-label">District</InputLabel>
                    <Select
                    labelId="district"	
                    id="district"
                    value={farmer.district}
                    label="District *"
                    onChange={handleDistrictChange}
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
                  id="gsdName"
                  label="GoviJana Seva Devision"
                  name="gsdName"
                  value={farmer.gsdName}
                  onChange={handleSave}
                  autoComplete="gso-devision"
                />

                {errors.gsdName && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid GoviJana Seva Devision</Alert>)}
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="gsdCode"
                  label="GoviJana Seva Devision Code"
                  name="gsdCode"
                  value={farmer.gsdCode}
                  onChange={handleSave}
                  autoComplete="gso-code"
                />

                {errors.gsdCode && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid GoviJana Seva Devision Code</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  value={farmer.email}
                  onChange={handleSave}
                  autoComplete="email"
                />
                {errors.email && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Email</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nic"
                  label="National Identity Card Number"
                  name="nic"
                  value={farmer.nic}
                  onChange={handleSave}
                  autoComplete="nic"
                />
                {errors.nic && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid National Identity Card Number</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={farmer.password}
                  onChange={handleSave}
                  autoComplete="new-password"
                />
                {errors.password && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Password must be at least 8 characters long contain a number, an uppercase letter, a lowercase letter and a special character </Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confPassword"
                  label="Confirm Password"
                  type="password"
                  id="confPassword"
                  value={farmer.confPassword}
                  onChange={handleSave}
                  autoComplete="conf-password"
                />

                {errors.confPassword && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Passwords do not match</Alert>)}
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2, height: '2.5rem'}}
            >
              Register Farmer
            </Button>
            
          </Box>
        </Box>
        
      </Container>
      </div>
      
  );
}