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
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


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

  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



export default function ItemCard(props) {
    const farmer_id = props.id;
    const price = props.price;
    const description = props.des;
    const more_details = props.more;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
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
        image="https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38014.jpg?w=2000"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2"  style={{fontWeight: 'bold'}}>
          Unit Price {price} Rs/Kg
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon style={{margin:'0 10 0 0'}}/>
        </IconButton>

        <Button variant="contained" color="success">
        <ShoppingBagIcon style={{margin:'0 10 0 0'}}/> Buy
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
