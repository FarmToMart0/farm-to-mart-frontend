import React, { useState, useEffect } from 'react';
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
import Alert from '@mui/material/Alert';



export default function BuyItemShoppingCard(props) {
  
  const [totValue, setTotValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const deliveryMethods = props.deliveryMethods;
  const paymentMethods = props.paymentMethods;
  const itemData = props.itemData;
  

  function getInputAmount(value){
    
    setInputValue(value);
  }
  

    useEffect(()=>{
    
      setTotValue(Math.round(inputValue*props.unitPrice*100)/100)
      console.log(inputValue)
    },[inputValue])


  

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
        

        {/* ======================= Left Card ============================= */}
        <ItemCard  getInputAmount = {getInputAmount}/>
        {/* ============================ End Left Card ========================= */}
        <Box
      sx={{
        
        width: 300,
        height: 300,
        backgroundColor: '#fafafa',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        backgroundColor: '#f5f5f5',
        
        },
      }}
    >
        <div >
        
        
        <div style={{
        paddingLeft:30}}>
            <h2 style={{paddingTop:10, color:'#007476',display:'flex', justifyContent:'center', alignItems:'center'}}>Total Price(LKR)</h2>
            <h1 style={{paddingTop:10,display:'flex', justifyContent:'center', alignItems:'center'}}> {totValue}</h1>
            
            <Stack direction="row" > 
            <LocalShippingIcon sx={{mx:3}}/>

            <ul style={{margin:0}}>
            {deliveryMethods.map((item)=><li key={item}>{item}</li>)}
            </ul>
            
            </Stack>

            <Stack direction="row" style={{marginTop:15}}> 
            <PaymentIcon sx={{mx:3}}/>
            <ul style={{margin:0}}>
            {paymentMethods.map((item)=><li key={item}>{item}</li>)}
            </ul>
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

    {/* ===========================Image component====================== */}
    {/* // const itemData = [
  
// 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
// 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
// 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',



// ]; */}
    <ImageList itemData = {itemData}/>

{/* ===========================End ofImage component====================== */}
    
      </Paper>
      
      <Button variant="contained" startIcon={<ShoppingCartIcon style={{height:50}}/>}>
        BUY
      </Button>
    </Box>
    
    
    </div>
    
  );
}

