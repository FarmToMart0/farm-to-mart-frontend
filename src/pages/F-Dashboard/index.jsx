import React from 'react'
import BarGraph from '../../components/BarGraph/index'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LineGraph from '../../components/LineChart/index'


function HarvestDashboard() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, mt:10 }}>
      <Grid container spacing={2} sx={{pr:10}}>
        <Grid item xs={8} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <LineGraph />
        </Grid>

        <Grid item xs={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        
        </Grid>

        <Grid item xs={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          
          <h1 style={{color:'#42C2FF'}}>Top Sale Products</h1>
        </Grid>

        <Grid item xs={8} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <BarGraph/>
        </Grid>
        
      </Grid>
    </Box>
    </div>
    
  )
}

export default HarvestDashboard;