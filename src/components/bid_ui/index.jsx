import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextF from '../../components/text_field/index'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

export default function SimplePaper() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '70%',
          height: '100%',
          backgroundColor:'',
          padding: 5,
        },
      }}
      style={{display:'flex',paddingTop:25,paddingBottom:25,alignItems:'center',justifyContent:'center'}}
    >
      
      <Paper elevation={3}  > 
      <Stack direction='row' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Stack sx={{mx:5}}>
          <p style={{fontSize:30,fontWeight:'bold'}}>Current Bid Value</p>
          <Chip sx={{px:3,py:4}} label=<p style={{fontSize:40,fontWeight:'bold',margin:0,color:'#4BB543'}}>11250.00 LKR</p> variant="outlined" /> 
          
        </Stack>

        <Stack sx={{mx:5}}>
          <p style={{fontSize:30,fontWeight:'bold'}}>Your Bid Value</p>
          <Chip sx={{p:3,py:4}} label=<p style={{fontSize:40,fontWeight:'bold',margin:0,color:'#4BB543'}}>7500.00 LKR</p> variant="outlined" /> 
          
        </Stack>

        <Stack sx={{mx:5}}>
          <p style={{fontSize:30,fontWeight:'bold'}}>Remaining Time</p>
          <Chip sx={{p:3,py:4}} label=<p style={{fontSize:40,fontWeight:'bold',margin:0,color:'#4BB543'}}>12:34:54</p> variant="outlined" /> 
      </Stack>

      </Stack>
      {/* start of bidding card */}
      <Stack>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          
          my:8,
          width: '30%',
          height: '100%',
          backgroundColor:'',
          borderRadius: '20px',
          py:10

        },
      }}
      style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      
      <Paper elevation={3}  style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10,boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
        <Stack  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <h1 style={{margin:2}}> Place a Bid</h1>
          <p style={{margin:3}}> Minimum Bid Value : 300KLR</p>
          {/* <TextF title={"Bidding Amount"}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}/> */}

          {/* =================Text Field =================== */}

          <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
              >
                
                <TextField id="standard-basic" label="Amount of Bid" variant="standard" type= "number" />
          </Box>

          {/* ============= End Text Field ================= */}
          <Stack direction="row"  style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
           
            <Button variant="contained" color="success" sx={{my:3}}>
              Place Bid
            </Button>
            
            </Stack>
            </Stack>
        
      </Paper>
      
    </Box>
    <Button variant="contained" sx={{width:'10%'}} startIcon={<ArrowCircleLeftIcon /> } onClick={()=>{navigate('/market')}} >
        Market
      </Button>
      </Stack>
      
      {/* end of bidding card */}
      
      </Paper>
    </Box>
  );
}
