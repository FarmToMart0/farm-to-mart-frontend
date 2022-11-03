import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { TotalSales } from '../../../components/dashboard/totalSales';

import { Sales } from '../../../components/dashboard/sales';
import { PendingOrders } from '../../../components/dashboard/pending-orders';
import { TotalOrders } from '../../../components/dashboard/total-oders';
import { TotalProfit } from '../../../components/dashboard/ongoingBiding';
import { OrderOverView } from '../../../components/dashboard/orderOverview';


const SalaseDashBoard = () => (
  <>

      <title>
        Dashboard | Material Kit
      </title>
   
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalSales />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalOrders/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <PendingOrders />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <OrderOverView sx={{ height: '100%' }} />
          </Grid>
          
          
        </Grid>
      </Container>
    </Box>
  </>
);



export default SalaseDashBoard;
