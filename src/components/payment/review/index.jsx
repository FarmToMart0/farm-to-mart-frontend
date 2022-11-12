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

export default function Review(props) {

    const labels = {
        
        1: 'Useless',
        
        2: 'Poor',
        
        3: 'Ok',
        
        4: 'Good',
        
        5: 'Excellent',
      };

      const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const addresses = ['matara','galle']
    const {
    cardDetails,
    paymentMethod,
    setComments,
    deliveryMethod,
    setDeliveryMethod,
  } = props;

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }
 

  const [deliveryTime, setDeliveryTime] = useState(5);

//   React.useEffect(() => {
//     if (user && cart) {
//       if (user?.district === 'Colombo') {
//         if (
//           cart?.checkoutProduct?.quantityInStock < cart?.checkoutProduct?.items
//         ) {
//           setDeliveryTime(8);
//         } else {
//           setDeliveryTime(5);
//         }
//       } else {
//         if (
//           cart?.checkoutProduct?.quantityInStock < cart?.checkoutProduct?.items
//         ) {
//           setDeliveryTime(10);
//         } else {
//           setDeliveryTime(7);
//         }
//       }
//     }
//   }, [user, cart]);

//   const addresses = [
//     user?.addressLine1,
//     user?.addressLine2,
//     user?.city,
//     user?.district,
//     user?.postalCode,
//   ];

  const payments = [
    { name: 'Card holder', detail: cardDetails?.nameOnCard },
    { name: 'Card number', detail: cardDetails?.cardNumber },
    { name: 'Expiry date', detail: cardDetails?.expiryDate },
  ];

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
      <Typography variant="h6" gutterBottom>
        Select your delivery method
      </Typography>
     
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              checked={deliveryMethod === 'DELIVERY'}
              onChange={(event, checked) => {
                if (checked) {
                  setDeliveryMethod('DELIVERY');
                } else {
                  setDeliveryMethod('STORE_PICKUP');
                }
              }}
            />
          }
          label="Delivery to house"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={deliveryMethod === 'STORE_PICKUP'}
              onChange={(event, checked) => {
                if (checked) {
                  setDeliveryMethod('STORE_PICKUP');
                } else {
                  setDeliveryMethod('DELIVERY');
                }
              }}
            />
          }
          label="Store pickup"
        />
      </FormGroup>
      <List disablePadding>
        <ListItem key='jh' sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary='hghg'
            secondary='ghghh'
          />
          <Typography variant="body2">
            {'$' +
              parseFloat(78) *
                parseInt(45)}
          </Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {234}
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
<div>
<h3> Rate the farmer</h3>
<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >

    {/* ============================= rating */}
    
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
</div>


    {/* ========================== rate over */}


      <Grid container spacing={2}>
        {deliveryMethod === 'DELIVERY' && (
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Shipping
            </Typography>
            <Typography gutterBottom>
              {'nj' + ' ' + 'nh'}
            </Typography>

            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>
        )}
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          {paymentMethod === 'CARD' ? (
            <Grid container>
              {payments.map((payment) => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          ) : (
            <Typography>Pay on Delivery</Typography>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
    <Button  style={{width:"100%",marginTop:25}}   variant="contained" endIcon={<ArrowForwardIosIcon/>}>
        Complete Order
      </Button>
    </Paper>
    </Container>
  );
}
