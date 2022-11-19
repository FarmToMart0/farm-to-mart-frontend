import React from 'react';
import { Grid } from '@mui/material/';
import { Box } from '@mui/system';
import { CircularProgress } from '@mui/material';
const Loader = () => {
    return (
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '80vh' }}
>

  <Grid item xs={3}>
  <Box display="flex" justifyContent="flex-end">
  
  <CircularProgress disableShrink />
</Box>
  </Grid> 
  </Grid>   
   
    );
};

export default Loader;