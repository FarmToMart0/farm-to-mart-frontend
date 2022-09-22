import * as React from 'react';
import Box from '@mui/material/Box';
import TextF from '../../components/text_field/index';
import theme from '../../utils/theme';

export default function BoxSx() {
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
        //   opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <div >
        <h1 style={{padding:10, color:'#007476'}}>Paddy</h1>
        
        <div style={{
        paddingLeft:30}}>
            <h3> Unit Price : 120 Rs/Kg</h3>
            <h3>Quantity : <TextF/> </h3>
            
            
            </div>
        
        
        </div>
        

    </Box>
  );
}
