
import React, { useState,useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Navbar from '../../components/navbar/index';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Buy_card from '../../components/cards/buy_card/index'
import Bid_card from '../../components/cards/bid_card/index'
import BackI from '../../assets/images/weat.jpg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchField from '../../components/auto_com_search/index';
import TextFiled from '../../components/text_field/index';
import api from "../../api/modules/buyer";

<style>
@import url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@1200&display=swap');
</style>



const arr = [
  { label: 'Paddy'},
  { label: 'Carrot' },
  { label: 'Beans'}, 
  { label: 'Eggs'},
]
// const listOfItems = api.getMarketProducts();



  
// const [res,code] = getMarketData()


const listOfItems1 = [{item_id:'6789',product_name:'Beans', price:350,type:'bid',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.xxl.thumbs.canstockphoto.com/fresh-green-beans-background-moist-with-water-stock-photo_csp0953104.jpg"},
{item_id:'1234',product_name:'Lemon', price:300,type:'buy',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.britannica.com/84/188484-050-F27B0049/lemons-tree.jpg"},
{item_id:'12346',product_name:'Papaya', price:120,type:'bid',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.xxl.thumbs.canstockphoto.com/papaya-papaya-tree-in-the-orchard-of-thailand-picture_csp19495873.jpg"},
{item_id:'12345',product_name:'Potato', price:90,type:'buy',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.xxl.thumbs.canstockphoto.com/produce-potato-stock-photograph_csp0051109.jpg"},
{item_id:'1234',product_name:'Cocunut', price:700,type:'bid',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.xxl.thumbs.canstockphoto.com/coconuts-clusters-of-coconuts-close-up-hanging-on-palm-tree-pictures_csp13524285.jpg"},
{item_id:'12347',product_name:'Eggs', price:320,type:'buy',date:"2022/10/12",transport:"Available",payment:"Available",more_details:"Prices can be negociated",image:"https://cdn.xxl.thumbs.canstockphoto.com/eggs-on-straw-white-and-brown-eggs-on-a-bed-of-straw-closeup-picture_csp0450257.jpg"}]
const category1 = "Crop Type"
const categoty2 = "Base Amount of Harvest" 





export default function Market() {
  const [listOfItems, setListOfItems] = useState([]);
  const getMarketData = async () =>{ 
    const [res,code] = await api.getMarketProducts()
    if(res == 201){
      console.log(code)
      setListOfItems(code)
    }
    
    return (res,code) }

    useEffect(()=>{
      getMarketData()
    },[])
  


  return (
    
    <div style={{display:"flex"}}>
        <Navbar/>
    <React.Fragment >
      <CssBaseline />
      <Container   style= {{backgroundColor:'#E5F6DF' ,borderRadius: '30px',marginTop:75, paddingTop:0}}>
        <Box sx={{ width: '100%' ,marginTop:5}}>

      {/* SEARCH PANEL */}

      <Box
      sx={{
        display: 'flex',
        alignItems:'center',
    justifyContent:'center',
    justifyItems:'Center',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 128,
          paddingTop:3,
          
          
        },
      }}
    >
      
      
      {/* <Paper elevation={1} >   
      <Stack spacing={2} direction="row" sx={{margin:2,flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',}}>
<SearchField cropItems = {arr} category = {category1} />



    </Stack>
    </Paper> */}
    <div style={{ marginLeft:"auto"}}>
    {/* <h1 style={{float: "right"}}>FarmtoMart</h1> */}
    <p style={{fontSize:50, margin:0,fontFamily: "Rokkitt, serif", color:"#006400"}}> Farm<span style={{fontWeight:'bold',fontStyle:'italic',color:"#002800"}}>2</span>Mart  </p>
 
    </div>
    <div style={{ marginRight:0}}>
    {/* <h1 style={{float: "right"}}>FarmtoMart</h1> */}
    <div><SearchField cropItems = {arr} category = {category1} /></div>
    </div>
    </Box>
      

      {/* end of search panel */}

      <Grid container sx = {{marginTop:1.5,marginBottom:6}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

      { listOfItems.map((item,index)=>
        item.type == 'buy' ? <Grid item xs={3} key={item.item_id}>
      <Buy_card item = {item} />
      </Grid> : <Grid item xs={3} key={index}>
      <Bid_card item = {item} />
      </Grid> 
       )}
        
        
      </Grid>
    </Box>
      </Container>
    </React.Fragment>

      

       
    </div>
  );
}


