import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useLocation } from "react-router-dom";

export default function Review(props) {
  console.log(props)
  const navigate = useNavigate()
  const address = props.details.address.address[0]
  const payment = props.details.payment.payment
  

  const [comments,setComments] = useState("")
  
  

  var deliveryMethod = ""
  var paymentMethod = ""

  var buyer = ""
  if (address === "FARM_PICKUP"){
    deliveryMethod =  'PICK_UP_FARM';
    
  }else{
    deliveryMethod = 'DELIVERY' ;
    buyer = address[0]
  }

  if(payment === "Available"){
    paymentMethod = "card"
  }else{
    paymentMethod = "Pay on Delivery"
  }

  


  const handleConfirm = () =>{
    
    if(payment === "Available"){
      props.stateSet("Confirmed")
      
      
    }else{
      navigate('/buyer/market/checkout/payment/complete')
    }
    
  }
  



  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

     
      
      <List disablePadding>
        <ListItem key='jh' sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary={props.details.product}
            
          />
          <Typography variant="body2">
            {'Rs : ' + Number(props.details.amount).toFixed(2)}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {props.details.price}
          </Typography>
        </ListItem>
      </List>
      <TextField
        multiline
        rows={5}
        label="Order comments"
        fullWidth
        onChange={(event) => setComments(event.target.value)}
      />



      <Grid container spacing={2}>
        {deliveryMethod === 'DELIVERY' && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              <b>Delivery</b>
            </Typography>
            <Typography gutterBottom>
              {buyer}
            </Typography>

            <Typography gutterBottom>{address[1]}</Typography>
            <Typography gutterBottom>Postal Code:{address[4]}</Typography>
            <Typography gutterBottom>City:{address[2]}</Typography>
            <Typography gutterBottom>Province:{address[3]}</Typography>
            
          </Grid>
        )}

        {deliveryMethod === 'PICK_UP_FARM' && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              <b>Pick up from farm</b>
            </Typography>
            
            
          </Grid>
        )}

        <Grid item container direction="column" xs={12} sm={6}>
          
          {paymentMethod === 'Pay on Delivery'  &&(
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}> <b>Pay on Delivery</b></Typography>
          ) }
        </Grid>

      </Grid>
    </React.Fragment>
    <Button  style={{width:"100%",marginTop:25}}   variant="contained" endIcon={<ArrowForwardIosIcon/>} onClick={handleConfirm}>
        Confirm Order
      </Button>
    </Paper>
    </Container>
  );
}
