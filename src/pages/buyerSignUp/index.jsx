import  React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Joi from "joi-browser";
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import ResponsiveAppBar from '../../components/navbar';
import api from '../../api'
import {
  setAuthorizationKey,

} from '../../utils/localStorageHelper';
import SnackBarComponent from '../../components/Snackbars';


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


export default function SignUp() {
    const [buyer, setBuyer] = useState({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      nic:"",
      password:"",
      confPassword:""
    });
    const [refresh,setRefresh]=useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorOccured, setErrorOccured] = useState(false);
    const [errors, setErrors] = useState({});
  const schema = {
    firstName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    lastName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    address: Joi.string().required(),
    phone: Joi.string().length(10).regex(/^[0-9]+$/, 'given').required(),
    email: Joi.string().email().required(),
    nic: Joi.string().required(),
    password: Joi.string()
    .min(8)
    .max(25)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
    'password').required(),
    confPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
  };

  useEffect(()=>{
    setBuyer({
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
      nic:"",
      password:"",
      confPassword:""
    })
  },[refresh])
  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
    errorData[name] = errorMessage;
    } else {
    delete errorData[name];
    }
    let BuyerData = { ...buyer };
    BuyerData[name] = value;
    setBuyer(BuyerData);
    setErrors(errorData);
  }; 

  const validateProperty = (event) => {
    const { name, value } = event.target;
    if (name === "confPassword") {
        const obj = { password: buyer.password, [name]: value };
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
    const result = Joi.validate(buyer,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      console.log("Submitted");
      await registerBuyer(buyer)
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


  async function registerBuyer(values) {
    
    try {
      const [code,res] = await api.buyer.signUpBuyer(values);
    
      if (code === 201) {
        setErrors({
          type: "success",
          message: "Verification mail has been sent",
        });
        setErrorOccured(true);
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
    <><ResponsiveAppBar /><Container component="main" maxWidth="md">
      <CssBaseline />
      <SnackBarComponent open={errorOccured} message={errors.message} type={errors.type}  setOpen={setErrorOccured}   />

      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={buyer.firstName}
                onChange={handleSave}
                autoFocus />

              {errors.firstName && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid First Name</Alert>)}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={buyer.lastName}
                onChange={handleSave}
                autoComplete="family-name" />
              {errors.lastName && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid Last Name</Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="address"
                id="address"
                label="Address"
                name="address"
                value={buyer.address}
                onChange={handleSave}
                autoComplete="address" />

              {errors.address && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid Address</Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                type="tel"
                label="Mobile Number"
                name="phone"
                value={buyer.phone}
                onChange={handleSave}
                autoComplete="phone" />

              {errors.phone && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid Mobile Number</Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                value={buyer.email}
                onChange={handleSave}
                autoComplete="email" />
              {errors.email && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid Email</Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="nic"
                label="National Identity Card Number"
                name="nic"
                value={buyer.nic}
                onChange={handleSave}
                autoComplete="nic" />
              {errors.nic && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Invalid National Identity Card Number</Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={buyer.password}
                onChange={handleSave}
                autoComplete="new-password" />
              {errors.password && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Password must be at least 8 characters long contain a number, an uppercase letter, a lowercase letter and a special character </Alert>)}
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confPassword"
                label="Confirm Password"
                type="password"
                id="confPassword"
                value={buyer.confPassword}
                onChange={handleSave}
                autoComplete="conf-password" />

              {errors.confPassword && (
                <Alert sx={{ mt: '1vw', mb: '1vw' }} severity="error">Passwords do not match</Alert>)}
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            variant="contained"
            sx={{ mt: 3, mb: 2, height: '2.5rem' }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/admin/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container></>
  );
}