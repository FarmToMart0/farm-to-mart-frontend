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
          width: '100%',
          height: 'auto',
          
        },
      }}
    >
      <Paper elevation={3} style={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'} } > <img style={{margin:4}} src={props.icon} onClick={props.signUpFun}/> </Paper>
    </Box>
  );
}

