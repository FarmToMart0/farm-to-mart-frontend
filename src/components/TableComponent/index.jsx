import * as React from 'react';
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
import { color } from '@mui/system';
import FormDialog from './../DialogComponent/index';
import Typography from '@mui/material/Typography';
import { Grid,TextField} from '@mui/material';
import ModalBox from '../ModalBox';
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






export default function CustomizedTables({columns,itemData}) {
    const [openDialogBox, setOpenDialog] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpenModal = () => {
      setOpenModal(true);
    };
    const handleCloseModal = () => {
      setOpenModal(false);
    };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <TableContainer component={Paper}>
       <ModalBox open={openModal} handleClose={handleCloseModal} handleClickOpen={handleClickOpenModal}>
       <Grid width={500} container spacing={2}>
  
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Crop Type</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>Beans</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Needed Amount</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>1000Kg</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Total Price</Typography>
  </Grid>
  <Grid item xs={8}>
  <Stack direction='row' spacing={2}><Typography>20000 LKR</Typography> <Chip color='secondary' label="Not Paid" /></Stack>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Description</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>are thoseFresh things</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Delivery Method</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>Farm Pickup</Typography>
  </Grid>
</Grid>
       </ModalBox>
        <FormDialog openDialog={openDialogBox}  handleClose={handleCloseDialog}>
        <Stack alignSelf='center' direction='row' spacing={3}>
      
      <TextField
       
        autoFocus
        margin="dense"
        id="name"
        label="Amount in LKR"
        type="email"
        
        variant="standard"
      />
      </Stack>
        </FormDialog>
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
              
              <StyledTableCell align="left">{row.product}</StyledTableCell>
              
              <StyledTableCell align="left"><Button onClick={handleClickOpenModal} size='small' variant="outlined" startIcon={<RemoveRedEyeIcon/>}>
        View
      </Button></StyledTableCell>


       <StyledTableCell align="left">
                {row.paymentStatus=='notPaid' && <Button onClick={()=>{handleClickOpenDialog()}} size='small' variant="outlined" startIcon={<CheckCircleIcon/>}>
        Mark As Recieved
      </Button>}{row.paymentStatus != 'notPaid' && <Chip color='success' icon={<CheckCircleIcon />} label="Paid" variant="outlined" />}
      </StyledTableCell>

      <StyledTableCell align="left"><Stack  direction="row" spacing={2}>
              {row.orderStatus=='pending' && <Button onClick={()=>{handleClickOpenDialog()}} size='small' variant="outlined" startIcon={<CheckCircleIcon/>} >
        Mark As Delivered
      </Button> &&
      row.orderStatus=='pending' && <Button size='small' color='error' variant="outlined" startIcon={<CancelIcon/>}>
        Reject
      </Button>}
      {row.orderStatus=='delivered' && < Chip color='success' icon={<CheckCircleIcon />} label="Delivered" variant="outlined" />}
      {row.orderStatus=='rejected' && < Chip color='error' icon={<CancelIcon />} label="Rejected" variant="outlined" />}
      
      </Stack>
      </StyledTableCell>
     
      

             
      
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
