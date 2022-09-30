import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function ItemCard(props) {

  

  return (
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
        <h1 style={{padding:10, color:'#007476'}}>Paddy</h1>
        
        <div style={{
        paddingLeft:30}}>
            <h3> Unit Price : 120 Rs/Kg</h3>
            <h3>Quantity : <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
      
      <TextField id="standard-basic" label="Amount of Kg" variant="standard" type="number" onChange= {(e)=>{
        if(e.target.value>0) {props.getInputAmount(e.target.value)}else{props.getInputAmount(0)}
        
      }}/>
    </Box> </h3>
            
            
            </div>
        
        
        </div>
        

    </Box>
  );
}