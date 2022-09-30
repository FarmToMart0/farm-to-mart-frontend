import * as React from 'react';
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



const arr = [
  { label: 'Paddy'},
  { label: 'Carrot' },
  { label: 'Beans'}, 
  { label: 'Eggs'},
]

const listOfItems = [{id:'nuwan', price:12,type:'bid'},{id:'jaye',price:23,type:'buy'}]
const category1 = "Crop Type"
const categoty2 = "Base Amount of Harvest" 





export default function Market() {

  return (
    
    <div >
        <Navbar/>
    <React.Fragment >
      <CssBaseline />
      <Container   style= {{backgroundColor:'' ,borderRadius: '30px',boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',paddingBottom:10,paddingTop:10,marginTop:15}}>
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
      
      
      <Paper elevation={3} >   
      <Stack spacing={2} direction="row" sx={{margin:2,flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',}}>
<SearchField cropItems = {arr} category = {category1}/>

{/* <TextFiled title={categoty2}/> */}

    </Stack>
    </Paper>
    </Box>
      

      {/* end of search panel */}

      <Grid container sx = {{marginTop:1.5,marginBottom:6}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

      { listOfItems.map((item,index)=>
        item.type == 'buy' ? <Grid item xs={3} key={index}>
      <Buy_card id={item.id} price ={item.price} />
      </Grid> : <Grid item xs={3} key={index}>
      <Bid_card id={item.id} price ={item.price} />
      </Grid> 
       )}
        
        
      </Grid>
    </Box>
      </Container>
    </React.Fragment>

      

       
    </div>
  );
}
