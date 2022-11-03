import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


export default function SampleButton(props) {
    
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 200,
          height: 'auto',
          
        },
      }}
    >
      <Paper elevation={3} style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', width:500,display:'flex', justifyContent:'center', alignItems:'center'} } sx={{ '&:hover':{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', backgroundColor:'#ddded8'}}} onClick={props.signUpFun}> <img style={{margin:4}} alt="google logo" src={props.icon} /> </Paper>
    </Box>
  );
}

