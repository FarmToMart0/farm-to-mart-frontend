import * as React from 'react';
import Joi from "joi-browser";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import api from  '../../api'
import SnackBarComponent from '../Snackbars';

export default function AddCropData({farmersNic}) {
  //console.log(farmersNic)
  const [errorOccured, setErrorOccured] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [crop, setCrop] = useState({
    farmerNic: farmersNic,
    category: "",
    cropType: "",
    startingDateOfGrowing: "",
    expectingDateOfHarvest: "",
    landArea: 0,
    expectedAmount: 0,
    district: "",
    location: "",

  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const schema = {
    farmerNic: Joi.required(),
    category: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    cropType: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
    startingDateOfGrowing: Joi.date().iso().required(),
    expectingDateOfHarvest: Joi.date().iso().required(),
    landArea: Joi.number().required(),
    expectedAmount: Joi.number().required(),
    district: Joi.string().required(),
    location: Joi.string().required() 
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

  const handleExpectedAmountChange = (event) => {
    setCrop(previousState => {
      return { ...previousState, expectedAmount: event.target.value }
    })
  }; 

  const handleDistrictChange = (event) => {
    setCrop(previousState => {
      return { ...previousState, district: event.target.value }
    })
  }; 

  const handleLandAreaChange = (event) => {
    setCrop(previousState => {
      return { ...previousState, landArea: event.target.value }
    })
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = Joi.validate(crop,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      console.log("Submitted");
      await addCropData(crop);
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

  async function addCropData(values) {
    try {
      const [code,res] = await api.gso.addCropData(values);
      if (code === 201) {     
        navigate('/gso/home');
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
        <Container component="main" maxWidth="" sx={{width:'100%', background:'white', boxShadow: 
        '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )', borderRadius:'5px', mb: '5vw'}}>
        <CssBaseline />
        <SnackBarComponent open={errorOccured} message={errors.message} type='error'  setOpen={setErrorOccured}   />
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
                  id="category"
                  type="text"
                  label="Crop Type"
                  name="category"
                  value={crop.category}
                  onChange={handleSave}
                  autoFocus
                />

                {errors.category && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Crop type</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="cropType"
                  type="text"
                  label="Crop Name"
                  name="cropType"
                  value={crop.cropType}
                  onChange={handleSave}
                  autoComplete="crop-name"
                />

                {errors.cropType && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Crop Name</Alert>)}
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="landArea"
                  type="number"
                  label="Growing Land Size"
                  name="landArea"
                  autoComplete="land-size"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Acre</InputAdornment>,
                    inputMode: 'numeric', pattern: '[0-9]*'
                  }}
                  value={crop.landArea}
                  onChange={handleLandAreaChange}
                />
              </Grid>

              <Grid item xs={12}>
              <FormControl variant="outlined" sx={{width:'100%'}}>
              <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'1rem'}}>Start Date of Growing</FormHelperText>
                <OutlinedInput
                    required
                    id="startingDateOfGrowing"
                    name='startingDateOfGrowing'
                    type = 'date'
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}

                    value={crop.startingDateOfGrowing}
                    onChange={handleSave}
                />
                
                </FormControl>

                {errors.startingDateOfGrowing && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Date</Alert>)}
              </Grid>

              <Grid item xs={12}>
              <FormControl variant="outlined" sx={{width:'100%'}}>
              <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'1rem'}}>Expecting Date of Harvesting</FormHelperText>
                <OutlinedInput
                    required
                    id="expectingDateOfHarvest"
                    name='expectingDateOfHarvest'
                    type = 'date'
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}

                    value={crop.expectingDateOfHarvest}
                    onChange={handleSave}
                />
                
                </FormControl>

                {errors.expectingDateOfHarvest && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Date</Alert>)}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="expectedAmount"
                  type="number"
                  label="Estimated Harvest (kg)"
                  name="expectedAmount"
                  value={crop.expectedAmount}
                  onChange={handleExpectedAmountChange}
                  autoComplete="est-harvest"
                />
                {/* <FormHelperText id="outlined-weight-helper-text" sx={{ml:'5px', fontSize:'0.8rem'}}>*Clearly mention the unit</FormHelperText> */}
              </Grid>

              <Grid item xs={12} sm={12}>
                <FormControl required sx={{ m: 1, minWidth: "100%", margin:'0'}}>
                    <InputLabel id="demo-simple-select-required-label">District</InputLabel>
                    <Select
                    labelId="district"	
                    id="district"
                    value={crop.district}
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

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  type="text"
                  label="Address"
                  name="location"
                  value={crop.location}
                  onChange={handleSave}
                  autoComplete="crop-name"
                />

                {errors.location && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Crop Name</Alert>)}
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
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