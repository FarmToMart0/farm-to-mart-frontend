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

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function ItemCard(props) {
    
    
    const {item_id,product_name,price,more_details,date,transport,payment,image,min_bid,district,remainAmount,farmer,bidEndTime} = props.item
    
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const navigate = useNavigate();
    function handleBid(){
      navigate('/buyer/market/bidding',{state:{item_id:item_id,base_price:price,min_bid:min_bid,farmer:farmer,bidEndTime:bidEndTime}})
    }

  return (
    
    <Card sx={{ maxWidth: 345 ,background:'#FFFFFF',boxShadow: 'rgba(0, 0, 0, 0.24) 3px 5px 10px',borderRadius: '15px'}}>
      <CardHeader
        
        
        title= <span style={{fontSize:20,color:"#004600"}}><b>{product_name} </b></span>
        subheader={date.slice(0,10)}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2"  style={{fontWeight: 'bold'}}>
          Start Bidding Price: {price} LKR
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        

        <Button variant="contained" color="success" onClick={handleBid}>
        <GavelIcon style={{margin:'0 10 0 0'}}/> Bid
      </Button>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Stack>
        <Stack direction="row">
        {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
        <LocalShippingIcon style={{margin:'0 10 0 0 '}} sx={{ color:'black'}} />
        <Typography paragraph style={{color:'black'}}>  Tranport: {transport}</Typography> 
        </Stack>

        <Stack direction="row">
        {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
        <PaymentIcon style={{margin:'0 10 0 0 '}} sx={{ color:'black'}} />
        <Typography paragraph style={{color:'black'}}>  Online Payment:{payment} </Typography> 
        </Stack>

        <Stack direction="row">
        {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
        <LocalGroceryStoreIcon style={{margin:'0 10 0 0 '}} sx={{ color:'black'}} />
        <Typography paragraph style={{color:'black'}}>  Available Stock:{remainAmount} kg </Typography> 
        </Stack>

        <Stack direction="row">
        {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
        <PlaceIcon style={{margin:'0 10 0 0 '}} sx={{ color:'black'}} />
        <Typography paragraph style={{color:'black'}}>  District:{district} </Typography> 
        </Stack>

        </Stack>
        <hr></hr>
          <Typography paragraph style={{color:'black'}}>
            {more_details}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
