import React, { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

<style>
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@1200&display=swap');
</style>


export default function AddressForm(props) {
  const [transport, setTransport] = useState('DELIVERY');
  const [name,setName] = useState("")
  const [address,setAddress] = useState("")
  const [city,setCity] = useState("")
  const [province,setProvince] = useState("")
  const [postalCode,setPostalCode] = useState("")
  

  const handleNext=()=>{
    const data =[name,address,city,province,postalCode]
  //  data.forEach(element => {
  //   if (element === ""){
        
  //   }
  //  });
    if(transport ==="DELIVERY"){
      props.addressSet(data)
    }else{
      props.addressSet("FARM_PICKUP")
    }
    }
    
    

  

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 10,mt:12  }}>
    <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }}}
        >
        {/* <Typography component="h1" variant="h4" align="center">

        L<p style={{fontSize:50, margin:5,fontFamily: "Rokkitt, serif", color:"#006400"}}> Farm<span style={{fontWeight:'bold',fontStyle:'italic',color:"#002800"}}>2</span>Mart  </p>

        </Typography> */}

        <Typography component="h1" variant="h4" align="center">
        <p style={{fontSize:50, margin:5,fontFamily: "Rokkitt, serif", color:"#006400"}}> Farm<span style={{fontWeight:'bold',fontStyle:'italic',color:"#002800"}}>2</span>Mart  </p>

            Checkout
          </Typography>
          <React.Fragment>
          <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              
              checked={transport === 'DELIVERY'}
              onChange={(event, checked) => {
                if (checked) {
                  setTransport('DELIVERY');
                } else {
                  setTransport('FARM_PICKUP');
                }
              }}
            />
          }
          label="Delivery"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={transport === 'FARM_PICKUP'}
              onChange={(event, checked) => {
                if (checked) {
                  setTransport('FARM_PICKUP');
                } else {
                  setTransport('DELIVERY');
                }
              }}
            />
          }
          label="Farm Pickup"
        />
      </FormGroup>





      
      {transport === "DELIVERY" && (<><Typography  gutterBottom>
        Delivery address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="fullName"
           value={name}
           onChange={(e)=>setName(e.target.value)}
            InputLabelProps={{ shrink: true }}
            name="fullName"
            label="Full name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            value={address}
           onChange={(e)=>setAddress(e.target.value)}
            InputLabelProps={{ shrink: true }}
            label="Address"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            value={city}
           onChange={(e)=>setCity(e.target.value)}
            InputLabelProps={{ shrink: true }}
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Province"
            value={province}
           onChange={(e)=>setProvince(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postal"
            name="postal"
            value={postalCode}
           onChange={(e)=>setPostalCode(e.target.value)}
            InputLabelProps={{ shrink: true }}
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
      </>)}
      </React.Fragment>
      <Button  style={{width:"100%",marginTop:25}}   variant="contained" endIcon={<ArrowForwardIosIcon/>} onClick = {handleNext}>
        NEXT
      </Button>
      <Typography variant="body2" color="text.secondary" align="center" sx={{mt:3}}>
        {'Copyright © Farm2Mart '}
        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </Paper>
      
      
    </Container>
    
  );
}
