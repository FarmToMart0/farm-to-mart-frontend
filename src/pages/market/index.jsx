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
import BackI from '../../Assets/images/weat.jpg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchField from '../../components/auto_com_search/index';
import TextFiled from '../../components/text_field/index';

import { color } from '@mui/system';
import { CenterFocusStrong } from '@mui/icons-material';

const arr = [
  { label: 'Paddy'},
  { label: 'Carrot' },
  { label: 'Beans'},
  { label: 'Eggs'},
]
const category1 = "Crop Type"
const categoty2 = "Base Amount of Harvest" 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function market() {
  return (
    
    <div >
        <Navbar/>
    

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

<TextFiled type={categoty2}/>

    </Stack>
    </Paper>
    </Box>

    <React.Fragment >
      <CssBaseline />
      <Container  style= {{backgroundColor:'#a0a1a4',borderRadius: '30px',boxShadow: 'rgba(0, 0, 0, 0.24) 3px 5px 10px'}}>
        <Box sx={{ width: '100%' }}>
      <Grid container sx = {{marginTop:1.5,marginBottom:6}} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid item xs={3}>
          <Buy_card/>
        </Grid>
        <Grid item xs={3}>
        <Bid_card/>
        </Grid>
        <Grid item xs={3}>
        <Buy_card/>
        </Grid>
        <Grid item xs={3}>
          <Bid_card/>
          </Grid>
          <Grid item xs={3}>
          <Bid_card/>
        </Grid>
        <Grid item xs={3}>
        <Bid_card/>
        </Grid>
          <Grid item xs={3}>
          <Bid_card/>
        </Grid>
        
          <Grid item xs={3}>
          <Bid_card/>
        </Grid>
        
          <Grid item xs={3}>
          <Bid_card/>
        

        
          
        </Grid>
      </Grid>
    </Box>
      </Container>
    </React.Fragment>

    </div>
  );
}
