import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import Card from '../../components/cards/bid_card/index';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ItemCard from '../../components/item_card/index';
import Button from '@mui/material/Button';


export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Stack direction="row" sx={{ width: '75%', height:'50%'}} >
    <Grid container  rowSpacing={0}  columnSpacing={{ xs: 1, sm: 0, md: 0 }}>
        <Grid item xs={6}>
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
      
      <Paper elevation={3} > 
        <div>
        <Card/>
        <p>
          dfgtyhujikccfv gbhnjmk ,dftgyhu jikolxd cfvbndf gtyhujik ccfvgbh njmk,dft gyhujik olxdcfvbn
          dfgtyhu jikccfvg bhnjmk, dftgyhuj ikolxdcfvbn
          dfgtyhuj ikccfvgbhnj mk,dftgy hujikol xdcfvbn
        </p>
        </div>
        
        </Paper>
      
    </Box>
        </Grid>
        <Grid item xs={6}>
        
        
        
        
        
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: '100%',
        },
      }}
    >
      
      <Paper elevation={3} style={{display:'flex', justifyContent:'center', alignItems:'center', padding:20}}>
        <ItemCard />

      </Paper>
      <Button variant="contained" startIcon={<ShoppingCartIcon />}>
        BUY
      </Button>
      
    </Box>
        </Grid>
        
      </Grid>
    </Stack>
      
    </Box>
  );
}

