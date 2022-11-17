import React from 'react'
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';

import MoneyIcon from '@mui/icons-material/Money';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
export const TotalSales = (props) => (
  
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL SALES
          </Typography>
          <Typography
            color="textSecondary"
            variant="h4"
          >
            {props.totalSales} LKR
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <TrendingUpIcon color="success" />
        <Typography
          color="sucess"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          {(props.salesSinceLastMonth)}%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
