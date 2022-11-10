import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

export default function ReviewCard() {
   
  return (
    <Box sx={{marginTop:5, minWidth: 275, paddingRight:'10%', paddingLeft:'5%' }}>
      <Card variant="outlined" sx={{mx:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: yellow}} aria-label="recipe">
            S
          </Avatar>
        }
        action={
            <Rating name="read-only" value='3' readOnly />
          }
        title="Sumeela "
        subheader="September 14, 2016"
      />
      
    <CardContent>
      <Typography sx={{ fontSize: 14, marginLeft:"4%" }}component="div" >
        Word of the Day ghgdjabkjbWord of the Daygbadbjb hhs gsjnah
      </Typography>
    </CardContent>

        </Card>
    </Box>
  );
}
