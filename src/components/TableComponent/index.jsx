import React,{useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Button,Stack, Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';
import ModalBox from '../ModalBox';
import UndoIcon from '@mui/icons-material/Undo';
import api from '../../api'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));






export default function CustomizedTables({columns,itemData,handleClickRecieved,handleClickDelivereded,handleClickRejected,handleClickUnDoRejected}) {
   
    const [openModal, setOpenModal] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState({});

    const handleClickOpenModal = (item) => {
      
      setSelectedProduct(item);
      setOpenModal(true);
    };
    const handleCloseModal = () => {
      
      setOpenModal(false);
    };

  

  


  
  return (
    <TableContainer component={Paper}>
       <ModalBox open={openModal} handleClose={handleCloseModal} handleClickOpen={handleClickOpenModal}>
       <Grid width={500} container spacing={2}>
  
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Crop Type</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.product?.productName}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Needed Amount</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.amount+' Kg'}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Ordered Date</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.date}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Selling Method</Typography>
  </Grid>
  <Grid item xs={8}>
  <Stack direction='row' spacing={2}><Typography>{selectedProduct?.isFromBiding ? "Bidding": "Direct Selling"}</Typography> </Stack>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Total Price</Typography>
  </Grid>
  <Grid item xs={8}>
  <Stack direction='row' spacing={2}><Typography>{selectedProduct?.totalPrice+" LKR"}</Typography> <Chip color='secondary' label={selectedProduct?.paymentStatus} /></Stack>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Description</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.description}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Delivery Method</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.deliveryMethod}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Payment Method</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.paymentMethod}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Buyer Name</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.buyer?.firstName+' '+selectedProduct?.buyer?.lastName}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Buyer Address</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.buyer?.address}</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Phone Number</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>{selectedProduct?.buyer?.phone}</Typography>
  </Grid>
</Grid>
       </ModalBox>
        
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((item)=>{
                return  <StyledTableCell>{item}</StyledTableCell>
            })}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {itemData.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              
              <StyledTableCell align="left">{row.product.productName}</StyledTableCell>
              
              <StyledTableCell align="left"><Button onClick={()=>handleClickOpenModal(row)} size='small' variant="outlined" startIcon={<RemoveRedEyeIcon/>}>
        View
      </Button></StyledTableCell>


       <StyledTableCell align="left">
                {row.paymentStatus=='notpaid' && <Button onClick={()=>{handleClickRecieved(row.id)}} size='small' variant="outlined" startIcon={<CheckCircleIcon/>}>
        Mark As Recieved
      </Button>}{row.paymentStatus == 'paid' && <Chip color='success' icon={<CheckCircleIcon />} label="Paid" variant="outlined" />}
      </StyledTableCell>

      <StyledTableCell align="left"><Stack  direction="row" spacing={2}>
              {row.orderStatus=='place' && <Button onClick={()=>{handleClickDelivereded(row.id)}} color='info' size='small' variant="outlined" startIcon={<CheckCircleIcon/>} >
        Mark As Delivered
      </Button> }{
      row.orderStatus=='place' && <Button size='small' onClick={()=>{handleClickRejected(row.id)}} color='error' variant="outlined" startIcon={<CancelIcon/>}>
        Reject
      </Button>}
      {row.orderStatus=='delivered' && < Chip color='success' icon={<CheckCircleIcon />} label="Delivered" variant="outlined" />}
      {row.orderStatus=='rejected' && < Chip color='error' icon={<CancelIcon />} label="Rejected" variant="outlined" />}
      {
      row.orderStatus=='rejected' && <Button size='small' onClick={()=>{handleClickUnDoRejected(row.id)}} color='info' variant="outlined" startIcon={<UndoIcon/>}>
        Undo
      </Button>}
      </Stack>
      </StyledTableCell>
     
      

             
      
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
