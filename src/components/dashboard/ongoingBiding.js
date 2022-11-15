import React from 'react'
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';

import LocalMallIcon from '@mui/icons-material/LocalMall';
export const TotalProfit = (props) => (
  <Card {...props}>
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
            Ongoing Biding
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {props.ongoingBiddingCount}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <LocalMallIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
