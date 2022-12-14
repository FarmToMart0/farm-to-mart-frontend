import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate, useLocation } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

<style>
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@1200&display=swap');
</style>

export default function PaymentForm(props) {

  //notifications
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //notifications
  
  const navigate = useNavigate()
  const [paymentValidated, setPaymentValidated] = useState(false);
  
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('CARD');
  
  const [nameOnTheCard, setNameOnTheCard] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [nameError, setNameError] = useState('Card name is required!');
  const [cardNumberError, setCardNumberError] = useState('Invalid card number');
  const [expiryDateError, setExpiryDateError] = useState('Expiry date is required!');
  const [cvvError, setCvvError] = useState('CVV is required!');

  React.useEffect(() => {
    
    if (!nameOnTheCard) {
      setNameError('Card name is required!');
    } else {
      setNameError('');
    }
    if (!cardNumber) {
      setCardNumberError('Invalid card number');
    } else {
      setCardNumberError('');
    }
    if (!expiryDate) {
      setExpiryDateError('Expiry date is required!');
    } else {
      setExpiryDateError('');
    }
    if (!cvv) {
      setCvvError('CVV is required!');
    } else {
      setCvvError('');
    }

    setCardDetails({
      nameOnCard: nameOnTheCard,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
    });

    if (
      nameError === '' &&
      cardNumberError === '' &&
      cvvError === '' &&
      expiryDateError === ''
    ) {
      setPaymentValidated(true);
    }
  }, [nameOnTheCard, expiryDate, cvv, cardNumber]);


  const handleNext = ()=>{
    const data = [nameOnTheCard, expiryDate, cvv, cardNumber]
    
    
      if(paymentMethod ==="CARD"){
       
        if (paymentValidated ){
          props.paymentSet(data)
          
          
        }else{
          handleClick()
          
          
        }
     
       
      }else{
        props.paymentSet(["CASH_ON_DELIVERY"])
        // props.setFinalState(true)
        
      }
    
      
    
    
    
    
  }






  return (

    <Container component="main" maxWidth="sm" sx={{ mb: 4,mt:15 }}>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          All the fileds are required
        </Alert>
      </Snackbar>
    <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        <Typography component="h1" variant="h4" align="center">
        <p style={{fontSize:50, margin:5,fontFamily: "Rokkitt, serif", color:"#006400"}}> Farm<span style={{fontWeight:'bold',fontStyle:'italic',color:"#002800"}}>2</span>Mart  </p>

            Checkout
          </Typography>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              
              checked={paymentMethod === 'CARD'}
              onChange={(event, checked) => {
                if (checked) {
                  setPaymentMethod('CARD');
                } else {
                  setPaymentMethod('CASH_ON_DELIVERY');
                }
              }}
            />
          }
          label="Pay by Card"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={paymentMethod === 'CASH_ON_DELIVERY'}
              onChange={(event, checked) => {
                if (checked) {
                  setPaymentMethod('CASH_ON_DELIVERY');
                } else {
                  setPaymentMethod('CARD');
                }
              }}
            />
          }
          label="Pay on Delivery"
        />
      </FormGroup>
      {paymentMethod === 'CARD' && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              onChange={(event) => setNameOnTheCard(event.target.value)}
              helperText={nameError}
              error={nameError !== ''}
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              onChange={(event) => setCardNumber(event.target.value)}
              fullWidth
              helperText={cardNumberError}
              error={cardNumberError !== ''}
              autoComplete="cc-number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              onChange={(event) => setExpiryDate(event.target.value)}
              fullWidth
              helperText={expiryDateError}
              error={expiryDateError !== ''}
              autoComplete="cc-exp"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText={cvvError}
              error={cvvError !== ''}
              onChange={(event) => setCvv(event.target.value)}
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
        </Grid>
      )}
    </React.Fragment>
    <Button  style={{width:"100%",marginTop:25}}   variant="contained" endIcon={<ArrowForwardIosIcon/> } onClick = {handleNext}>
        NEXT
      </Button>
      <Typography variant="body2" color="text.secondary" align="center" style={{margin:15}}>
        {'Copyright ?? Farm2Mart '}
        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Paper>
    </Container>
  );
}
