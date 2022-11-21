import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';

import { Stack } from '@mui/system';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import API from '../../api/modules/order'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderViewCard(props) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //dialog parts

  const [dialogopen, setDialogopen] = React.useState(false);

  const handleClickOpen = () => {
    setDialogopen(true);
  };
const data = {"id":props.item._id}

  const dialoghandleClose = () => {
    setDialogopen(false);
    try {
      API.updateProduct(data)
      handleClick()
      window.location.reload()
    } catch (error) {
      
    }

    

  };

  const paymenyStatus = ()=>{
    if(props.item.paymentStatus === "paid"){
      return "Paid"
    }else{
      return "Not Paid"
    }
  }

  

  
  return (
    <Card sx={{ maxWidth: 345 ,background:'#FFFFFF',boxShadow: 'rgba(0, 0, 0, 0.24) 3px 5px 10px',borderRadius: '15px'}}>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         Thank you! Order Mark as Received..
        </Alert>
      </Snackbar>

      <Dialog
        open={dialogopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialoghandleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Order Received?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Befofe confirm make sure that, you have received correct amount and expected 
            quality of product. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={dialoghandleClose} color="success">Confirm</Button>
        </DialogActions>
      </Dialog>


    <CardHeader
      
      
      title= <span style={{fontSize:25,color:"#004600"}}><b>{props.item.product.productName} </b></span>
      subheader={<b>{paymenyStatus()}</b>}
    />
    {/* <CardMedia
      component="img"
      height="194"
      image='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=612x612&w=0&h=x8h70-SXuizg3dcqN4oVe9idppdt8FUVeBFemfaMU7w='
      alt="Paella dish"
    /> */}
    <CardContent>
    <Stack direction="row" spacing={6}>
    <Typography variant="body2"  style={{fontWeight: 'bold'}}>
      Amount(kg) : {props.item.amount}
      </Typography>

    <Typography variant="body2"  style={{fontWeight: 'bold'}}>
      Total Price(Rs) : {(props.item.totalPrice).toFixed(2)}
      </Typography>
    </Stack>
      
    </CardContent>
    <CardActions disableSpacing>
      

      {paymenyStatus()==="Paid" && (<Button variant="contained" color="success" onClick={handleClickOpen} >
      <TaskAltIcon style={{margin:'0 10 0 0'}}/> Order Recieved
    </Button>)}

      
    </CardActions>
    
  </Card>
  )
}

export default OrderViewCard