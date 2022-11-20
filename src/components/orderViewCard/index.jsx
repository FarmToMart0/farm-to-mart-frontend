import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import GavelIcon from '@mui/icons-material/Gavel';
import { useNavigate } from "react-router-dom";
import PlaceIcon from '@mui/icons-material/Place';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';



function orderViewCard() {
  return (
    <Card sx={{ maxWidth: 345 ,background:'#F2FF3F',boxShadow: 'rgba(0, 0, 0, 0.24) 3px 5px 10px',borderRadius: '15px'}}>
    <CardHeader
      
      
      title= <span style={{fontSize:20,color:"#004600"}}><b>product_name </b></span>
      subheader={"date.slice(0,10)"}
    />
    {/* <CardMedia
      component="img"
      height="194"
      image='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=612x612&w=0&h=x8h70-SXuizg3dcqN4oVe9idppdt8FUVeBFemfaMU7w='
      alt="Paella dish"
    /> */}
    <CardContent>
      <Typography variant="body2"  style={{fontWeight: 'bold'}}>
        Start Bidding Price: price LKR
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      

      <Button variant="contained" color="success" onClick={()=>{}}>
      <GavelIcon style={{margin:'0 10 0 0'}}/> Bid
    </Button>

      
    </CardActions>
    
  </Card>
  )
}

export default orderViewCard