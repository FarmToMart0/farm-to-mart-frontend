import * as React from 'react';
import Joi from "joi-browser";
import { useState } from 'react';
import TextField from '@mui/material/TextField';

import AdminNavbar from '../../components/admin_navbar/index';
import AddFarmer from '../../components/add_farmer/index';

import DetailsCard from '../../components/details_card/index';

import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import gsoHome from '../../assets/images/gsoHome.jpg';
import api from '../../api';

export default function GSOHome() {
  const [nic, setNic] = useState({nic:""});
  const [favailability, setFavailability] = useState(false); 
  const [clicked, setClicked] = useState(false);
  const [farmer, setFarmer] = useState([]);
  const [errors, setErrors] = useState({});

  const schema = {
    nic: Joi.string().regex(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/, "name").required(),
  };

  const handleSave = (event) => {
    setFavailability(false);
    setClicked(false);
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
    errorData[name] = errorMessage;
    } else {
    delete errorData[name];
    }
    let FarmerData = { ...nic };
    FarmerData[name] = value;
    setNic(FarmerData);
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


  const handleSearch = async (event) => {
    event.preventDefault();
    const result = Joi.validate(nic,
      schema, { abortEarly: false });
    const { error } = result;
    if (!error){
      try{
        console.log(nic)
        const [code, res] = await api.gso.checkFarmerAvailability({"nic": nic.nic})
        if(code == 201){
          if (res === "removed"){
            setFavailability(false);
            setClicked(true);
          }
          else if (res){
            setFavailability(true);
            setClicked(true);
            //console.log(clicked);
            //console.log(nic)
            setFarmer(res); 
          }else{
            setFavailability(false);
            setClicked(true);
          }
        }
      }catch(er){
        console.log(er);
      }

    }else {
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
        label="Enter Farmer's NIC"
        name="nic"
        value={nic.nic}
        onChange={handleSave}
        autoFocus
      />
      {errors.nic && (
                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid NIC Number</Alert>)}

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
      
      {(!favailability && !clicked) && <img style={{width: '100%', height: '100%'}} src={gsoHome} alt="gsoHome" />}

      {clicked && !favailability && <AddFarmer nic={nic.nic}/>}

      {clicked && favailability && <DetailsCard farmerDetails={farmer} />}
      
    
    </div>
    </div>
    
  );
}


