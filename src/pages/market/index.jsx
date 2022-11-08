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

const listOfItems = [{item_id:'6789',farmer_name:'nuwanBro', price:1200,type:'bid',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
{item_id:'12345',farmer_name:'nuwan', price:1000,type:'bid',date:"2022/10/12",transport:"Available",payment:"Not Available",more_details:"Prices can't be negociated",image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"},
{item_id:'1234',farmer_name:'nuwanJay', price:123,type:'buy',date:"2022/10/12",transport:" Not Available",payment:"Available",more_details:"Prices can be negociated",image:"https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000"}]
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


