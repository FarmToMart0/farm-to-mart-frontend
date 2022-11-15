import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  const [totValue, setTotValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const { item_id, unit_price,payment,transport,product_name } = location.state;
  const left_card_details = {unit_price,product_name}

  const handleBuyOrder = ()=>{
    
      navigate('/buyer/market/checkout/payment',{state:{transport:transport, payment:payment, product:product_name,price:totValue,amount:inputValue}})
    
    
  }
  const itemData = [
    {
      img: 'https://cdn.xxl.thumbs.canstockphoto.com/fresh-green-beans-background-moist-with-water-stock-photo_csp0953104.jpg',
      title: 'Breakfast',
    },
    {
      img: 'https://cdn.xxl.thumbs.canstockphoto.com/eggs-on-straw-white-and-brown-eggs-on-a-bed-of-straw-closeup-picture_csp0450257.jpg',
      title: 'Burger',
    },
    {
      img: 'https://cdn.xxl.thumbs.canstockphoto.com/coconuts-clusters-of-coconuts-close-up-hanging-on-palm-tree-pictures_csp13524285.jpg',
      title: 'Camera',
    },
    {
      img: 'https://cdn.xxl.thumbs.canstockphoto.com/produce-potato-stock-photograph_csp0051109.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://cdn.xxl.thumbs.canstockphoto.com/papaya-papaya-tree-in-the-orchard-of-thailand-picture_csp19495873.jpg',
      title: 'Hats',
    },
    
    
  ];

  function getInputAmount(value){
    
    setInputValue(value);
  }
  
    useEffect(()=>{
      // call method for getting images fromserver
    })

    useEffect(()=>{
    
  
      setTotValue((inputValue*unit_price).toFixed(2))
      
    },[inputValue])


  

  return (
    <div>
    
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom:10,
        my:1,
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
        <ItemCard  getInputAmount = {getInputAmount} left_card_details ={left_card_details} />
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
            <b>Tranport : </b>{transport}
            </ul>
            
            </Stack>

            <Stack direction="row" style={{marginTop:15}}> 
            <PaymentIcon sx={{mx:3}}/>
            <ul style={{margin:0}}>
            <b>Online Payment : </b>{payment}
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
  <div style={{display:"flex", alignItem:"center",justifyContent:"center"}}>
  <ImageList images = {itemData} />
  
  </div>
    

{/* ===========================End ofImage component====================== */}
      
      </Paper>
      
      <Button  style={{width:"56%", marginBottom:0}}  onClick={handleBuyOrder} variant="contained" startIcon={<ShoppingCartIcon style={{height:50}}/>}>
        BUY
      </Button>
    </Box>
    
    
    </div>
    
  );
  
}

