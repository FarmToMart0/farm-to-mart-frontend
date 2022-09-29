import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ProductManage from './../../pages/farmer/ProductManage/index';
import { Button,Chip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import SearchBarField from '../SearchBarField';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Row(props) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };


  const handleClose = () => {
    setOpenDialog(false);
  };

  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
       
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.lastModified}</TableCell>
        
        <TableCell align="right"><Button variant="outlined" onClick={()=>{props.openForm([true,'id'])}}  startIcon={<EditIcon  />}>
        Edit

      </Button></TableCell>
        <TableCell align="right"><Button variant="outlined" sx={{color:'red'}} onClick={()=>{handleClickOpen()}} startIcon={<DeleteIcon />}>
        Remove
      </Button></TableCell>
      <TableCell align="right"> <Chip sx={{color:'green'}} variant="outlined" label="Sold out" /></TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Data 
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell size='medium' >Description</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell align="right">Initial bid</TableCell>
                    <TableCell align="right">Total Quantity</TableCell>
                    <TableCell align="right">Remaining Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.data.map((historyRow) => (
                    <TableRow key={historyRow.description}>
                      <TableCell component="th" scope="row">
                        {historyRow.description}
                      </TableCell>
                      <TableCell>{historyRow.unitPrice}</TableCell>
                      <TableCell align="right">{historyRow.initialBid}</TableCell>
                      <TableCell align="right">
                        {historyRow.totalQuantity}
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.remainingQuantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};



export default function ProductList({openProductAddForm,dataList,handleChangeFilter}) {
  return (
    <Container>
      <SearchBarField placeHolder="Search product here" handleSearch={handleChangeFilter}/>
    <TableContainer  sx={{color:'primary'}} component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={{ backgroundColor:"#25D366"}}>
            <TableCell />
            <TableCell>Product </TableCell>
            <TableCell align="right">Last Modified</TableCell>
            <TableCell align="right">Edit Product</TableCell>
            <TableCell align="right">Remove Product</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((row) => (
            <Row openForm={openProductAddForm}   key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
