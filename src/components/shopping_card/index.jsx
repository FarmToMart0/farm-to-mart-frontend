import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {useNavigate}  from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCard from '../../components/item_card/index';
import Button from '@mui/material/Button';
import ImageList from '../../components/buyer_image_pre/index';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import Alert from '@mui/material/Alert';



export default function BuyItemShoppingCard(props) {
  const navigate = useNavigate()
  
  const [totValue, setTotValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const deliveryMethods = props.deliveryMethods;
  const paymentMethods = props.paymentMethods;
  // const itemData = props.itemData;

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
  

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
        marginBottom:10,
        my:4,
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
        },
      }}
      style={{display:'flex', justifyContent:'center', alignItems:'center'}}
    >
      <Paper elevation={0} sx={{px:5}} style={{ paddingTop:25,marginBottom:20}}> 
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
      
      <Paper elevation={1}  style={{display:'flex', justifyContent:'center', alignItems:'center', padding:20,marginBottom:20}}> 
        

        {/* ======================= Left Card ============================= */}
        <ItemCard  getInputAmount = {getInputAmount}/>
        {/* ============================ End Left Card ========================= */}
        <Box
      sx={{
        
        width: 300,
        height: 300,
        backgroundColor: '',
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px',
        '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 5px',
        backgroundColor: '#fafafa',
        
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
      {/* const itemData = [
  
'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
'https://images.unsplash.com/photo-1522770179533-24471fcdba45',



 ]; */}

    {/* ===========================Image component====================== */}
  
    <ImageList images = {itemData}/>

{/* ===========================End ofImage component====================== */}
    
      </Paper>
      
      <Button  onClick={()=>{navigate('/buyer/market/checkout/payment')}} variant="contained" startIcon={<ShoppingCartIcon style={{height:50}}/>}>
        BUY
      </Button>
    </Box>
    
    
    </div>
    
  );
  
}

