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
import { red } from '@mui/material/colors';
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
    const farmer_id = props.id;
    const price = props.price;
    const more_details = props.more;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const navigate = useNavigate();
    function handleBid(){
      navigate('/buyer/market/bidding')
    }

  return (
    
    <Card sx={{ maxWidth: 345 ,background:'#e8e9ec',boxShadow: 'rgba(0, 0, 0, 0.24) 3px 5px 10px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={farmer_id} 
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2"  style={{fontWeight: 'bold'}}>
          Current Bid Value: {price} LKR
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{margin:'0 10 0 0'}}/>
        </IconButton>

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
        <Typography paragraph style={{color:'black'}}>  Method: </Typography> 
        </Stack>
        <Stack direction="row">
        {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
        <PaymentIcon style={{margin:'0 10 0 0 '}} sx={{ color:'black'}} />
        <Typography paragraph style={{color:'black'}}>  Method: </Typography> 
        </Stack>
        </Stack>
          <Typography paragraph style={{color:'black'}}>
            {more_details}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
