import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useSelector } from 'react-redux';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard(props) {
  const user = useSelector((state) => state?.user);
  const buyDataArray = props.item;
  //const {item_id,product_name,price,more_details,date,transport,payment,image,district,remainAmount,farmer} = props.item
  const [expanded, setExpanded] = React.useState(false);
  const [IsLogged, setIsLogged] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();
  function handleBuy() {

    if(IsLogged){
      navigate("/buyer/market/checkout", { state: buyDataArray });
    }else{
      navigate('/login')
    }
    
  }

  React.useEffect(() => {
  
    if(user?.userRole ==='BUYER'){
     setIsLogged(true)
  }
        
      
    }, []);


  return (
    <Card
      sx={{
        maxWidth: 345,
        background: "#FFFFFF",
        boxShadow: "rgba(0, 0, 0, 0.24) 3px 5px 10px",
        borderRadius: "15px",
      }}
    >
      <CardHeader
        title=<span style={{ fontSize: 20, color: "#004600" }}>
          <b>{buyDataArray.product_name} </b>
        </span>
        subheader={buyDataArray.date.slice(0, 10)}
      />
      <CardMedia
        component="img"
        height="194"
        image={buyDataArray.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" style={{ fontWeight: "bold" }}>
          Unit Price {buyDataArray.price} Rs/Kg
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="success" onClick={handleBuy}>
          <ShoppingBagIcon style={{ margin: "0 10 0 0" }} /> Buy
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
              <LocalShippingIcon
                style={{ margin: "0 10 0 0 " }}
                sx={{ color: "black" }}
              />
              <Typography paragraph style={{ color: "black" }}>
                {" "}
                Tranport: {buyDataArray.transport}
              </Typography>{" "}
            </Stack>

            <Stack direction="row">
              {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
              <PaymentIcon
                style={{ margin: "0 10 0 0 " }}
                sx={{ color: "black" }}
              />
              <Typography paragraph style={{ color: "black" }}>
                {" "}
                Online Payment:{buyDataArray.payment}{" "}
              </Typography>
            </Stack>

            <Stack direction="row">
              {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
              <LocalGroceryStoreIcon
                style={{ margin: "0 10 0 0 " }}
                sx={{ color: "black" }}
              />
              <Typography paragraph style={{ color: "black" }}>
                {" "}
                Available Stock:{buyDataArray.remainAmount} kg{" "}
              </Typography>
            </Stack>

            <Stack direction="row">
              {/* <Item> <LocalShippingIcon style={{margin:'5'}} ></LocalShippingIcon></Item> */}
              <PlaceIcon
                style={{ margin: "0 10 0 0 " }}
                sx={{ color: "black" }}
              />
              <Typography paragraph style={{ color: "black" }}>
                {" "}
                District:{buyDataArray.district}{" "}
              </Typography>
            </Stack>
          </Stack>

          <hr></hr>
          <Typography paragraph style={{ color: "black" }}>
            {buyDataArray.more_details}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
