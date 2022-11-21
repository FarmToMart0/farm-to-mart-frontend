import * as React from 'react';
import Joi from "joi-browser";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import AdminNavbar from '../../components/admin_navbar/index';
import AddGSO from '../../components/addGSO/index';
import Typography from '@mui/material/Typography';
import DetailsCard from '../../components/details_card_gso/index';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import mHome from '../../assets/images/mainOfficerHome.jpg';
import Alert from '@mui/material/Alert';
import api from '../../api';

export default function HomeMainOfficer() {
  const [nic, setNic] = useState({nic:""});
  const [favailability, setFavailability] = useState(false); 
  const [clicked, setClicked] = useState(false);
  const [gso, setGso] = useState([]);
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
    let NicData = { ...nic };
    NicData[name] = value;
    setNic(NicData);
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
      const [code, res] = await api.gso.checkGsoAvailability({"nic": nic.nic})
      if(code === 201){
        if (res){
          setFavailability(true);
          setClicked(true);
          setGso(res);
          
        }else{
          setFavailability(false);
          setClicked(true);
        }
      }

    }catch(error){
      console.log(error);
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

      <Typography component="h5" variant="h3" color='primary' sx={{mt: 3, mb: 3, fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>
            Enter Govijana Seva Offier's National Identity Card Number to Register or View Details of the Officer.
      </Typography>
            
      <Box component="" sx={{ mt: 3, mb: 3}} >
      <TextField
        required
        fullWidth
        id="nic"
        type="text"
        label="Enter Govijana Seva Officer's NIC"
        name="nic"
        onChange= {handleSave}
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
      
      {!favailability && !clicked && <img style={{width: '100%', height: '100%'}} src={mHome} alt="mHome" />}

      {favailability && clicked && <DetailsCard gsoDetails={gso} />}
      {console.log(nic)}

      {clicked && !favailability && <AddGSO nic={nic.nic}/>}
      
    
    </div>    
    </div>
    
  );
}

