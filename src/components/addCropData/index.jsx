import * as React from 'react';
import Joi from "joi-browser";
import { useState } from 'react';
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
import Alert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AdminNavbar from '../admin_navbar/index';

export default function AddCropData() {
  const [crop, setCrop] = useState({
    cropType: "",
    cropName: "",
    startDate: "",
    estiHarvest: "",
  });

  const [errors, setErrors] = useState({});
  const schema = {
    cropType: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    cropName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    startDate: Joi.date().iso().required(),
    estiHarvest: Joi.string().required()
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
    let CropData = { ...crop };
    CropData[name] = value;
    setCrop(CropData);
    setErrors(errorData);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = Joi.validate(crop,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      console.log("Submitted");
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


  return (
      <div>
        <Container component="main" maxWidth="" sx={{width:'70%', background:'white', boxShadow: 
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
                  id="cropType"
                  type="text"
                  label="Crop Type"
                  name="cropType"
                  value={crop.cropType}
                  onChange={handleSave}
                  autoFocus
                />

                {errors.cropType && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Crop type</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cropName"
                  type="text"
                  label="Crop Name"
                  name="cropName"
                  value={crop.cropName}
                  onChange={handleSave}
                  autoComplete="crop-name"
                />

                {errors.cropName && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Crop Name</Alert>)}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cropArea"
                  type="text"
                  label="Growing Land Size"
                  name="cropArea"
                  autoComplete="land-size"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Acre</InputAdornment>,
                    inputMode: 'numeric', pattern: '[0-9]*'
                  }}
                />
              </Grid>

              <Grid item xs={12}>
              <FormControl variant="outlined" sx={{width:'100%'}}>
              <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'1rem'}}>Start Date of Growing</FormHelperText>
                <OutlinedInput
                    required
                    id="startDate"
                    name='startDate'
                    type = 'date'
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}

                    value={crop.startDate}
                    onChange={handleSave}
                />
                
                </FormControl>

                {errors.startDate && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Date</Alert>)}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="estiHarvest"
                  //type="number"
                  label="Estimated Harvest (kg / Quantity of fruits)"
                  name="estiHarvest"
                  value={crop.estiHarvest}
                  onChange={handleSave}
                  autoComplete="est-harvest"
                />
                <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'0.8rem'}}>*Clearly mention the unit</FormHelperText>

                {errors.estiHarvest && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Harvest Quantity</Alert>)}
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
                    inputMode: 'numeric', pattern: '[0-9]*'
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