import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCard from '../../components/item_card/index';
import Button from '@mui/material/Button';
import ImageList from '../../components/imageList/index';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';



export default function RowAndColumnSpacing() {
  return (
    <div>
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        my:4,
        '& > :not(style)': {
          m: 1,
          width: '60%',
          height: '100%',
        },
      }}
      style={{display:'flex', justifyContent:'center', alignItems:'center'}}
    >
      <Paper elevation={3} sx={{px:5}} style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',paddingTop:25,marginBottom:20}}> 
      <Box sx={{ width: '100%' }} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Stack direction="row" sx={{ width: '100%', height:'50%'}} >
    <Grid container  rowSpacing={0}  columnSpacing={{ xs: 1, sm: 0, md: 0 }}>
        <Grid item xs={12}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '110%',
        },
      }}
    >
      
      <Paper elevation={3}  style={{display:'flex', justifyContent:'center', alignItems:'center', padding:20,boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',marginBottom:20}}> 
        
        <ItemCard />
        
        <Box
      sx={{
        
        width: 300,
        height: 300,
        backgroundColor: '#fafafa',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        backgroundColor: '#f5f5f5',
        //   opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <div >
        
        
        <div style={{
        paddingLeft:30}}>
            <h2 style={{paddingTop:10, color:'#007476',display:'flex', justifyContent:'center', alignItems:'center'}}>Total Price</h2>
            <h1 style={{paddingTop:10,display:'flex', justifyContent:'center', alignItems:'center'}}> 13,000.00 Rs</h1>
            
            <Stack direction="row" > 
            <LocalShippingIcon sx={{mx:3}}/>
            Farm Pickup/Delivery
            </Stack>

            <Stack direction="row" > 
            <PaymentIcon sx={{mx:3}}/>
            Cash/Online Payment
            </Stack>
            
            
            </div>
        
          
        </div>
        

    </Box>
          
        </Paper>
        
      
    </Box>
        </Grid>
      
        
      </Grid>
    </Stack>
      
    </Box>
    <ImageList/>
    
      </Paper>
      
      <Button variant="contained" startIcon={<ShoppingCartIcon style={{height:50}}/>}>
        BUY
      </Button>
    </Box>
    
    
    </div>
    
  );
}

