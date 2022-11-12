import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AddressForm() {
  
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
        <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

      <Typography  gutterBottom>
        Delivery address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="fullName"
           
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
            
            InputLabelProps={{ shrink: true }}
            label="Address line 1"
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
            
            InputLabelProps={{ shrink: true }}
            label="Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
      </Grid>
      <Button  style={{width:"100%",marginTop:25}}   variant="contained" endIcon={<ArrowForwardIosIcon/>}>
        NEXT
      </Button>
      </Paper>
      
    </Container>
  );
}
