import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button,Stack,Chip, Grid, Typography, TextField } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

import EditIcon from '@mui/icons-material/Edit';
import FormDialog from './../../../../components/DialogComponent/index';
import ModalBox from '../../../../components/ModalBox';

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
    border: 4,
  },
}));




// Table for show the crop list that farmer has been farmed

export default function MyCropTable({rows,columns, tab,handleClickEdit}) {
  const [openDialog1,setOpenDialog] = useState(false)
  const [openModal,setOpenModal] = useState(false)
  const [value, setValue] = useState(null);


  const handleCloseDialog=()=>{
    setOpenDialog(false)
  }
  const handleSave=(id)=>{
    
  }
  const handleClickEditDemo=(id)=>{
    handleClickEdit(id)
  }
 
  

const handleCilickOpenModal =()=>{
  setOpenModal(true)
}
const handleCloseModal=()=>{
  setOpenModal(false)
}



const handleCilickOpenDialog =()=>{
setOpenDialog(true)
}

  return (
    <TableContainer component={Paper}>
      <FormDialog handleClose={handleCloseDialog} openDialog={openDialog1}>
        <Grid width={250} container spacing={2}>

        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Harvested Date" variant="outlined" />
  </Grid>
  <Grid item xs={12}>
        <TextField id="outlined-basic" label="Amount Of Harvest" variant="outlined" />
  </Grid>
  

        </Grid>
        </FormDialog>
      

        <ModalBox handleClickOpen={handleCilickOpenModal} handleClose={handleCloseModal} open={openModal}>
        <Grid width={500} container spacing={2}>
  
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Crop Type</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>Beans</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Started Date</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>2022-03-12</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >expected harvest date</Typography>
  </Grid>
  <Grid item xs={8}>
  <Stack direction='row' spacing={2}><Typography>2022-03-12</Typography> <Chip color='secondary' label="Not Paid" /></Stack>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Land Area</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>12 ha</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >expected amount of hervest</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>1000 Kg</Typography>
  </Grid>
  <Grid item xs={4}>
  <Typography variant="h6" gutterBottom >Location</Typography>
  </Grid>
  <Grid item xs={8}>
  <Typography>Kotapola</Typography>
  </Grid>
</Grid>
        </ModalBox>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        
        <TableHead>
          <TableRow>
          {  
         
          columns.map((row)=>{
            return <StyledTableCell >{row}</StyledTableCell>
          })
          
          }
         
          </TableRow>
        </TableHead>
        <TableBody>
          { tab && rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell  component="th" scope="row">
                {row.cropType}
              </StyledTableCell>
              <StyledTableCell align="left">{row.startedDate}</StyledTableCell>
              <StyledTableCell align="left">{row.expectedDate}</StyledTableCell>
              <StyledTableCell align="left"><Button onClick={handleCilickOpenModal}  size='small' variant="outlined" startIcon={<RemoveRedEyeIcon/>}>
        View
      </Button></StyledTableCell>
              <StyledTableCell align="left"><Button onClick={handleCilickOpenDialog}  size='small' variant="outlined" startIcon={<EditIcon/>}>
        Update Harvest Details
      </Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
          { !tab && rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell  component="th" scope="row">
                {row.cropType}
              </StyledTableCell>
              <StyledTableCell align="left">{!row.isEdit && row.harvestedDate}{row.isEdit &&  <TextField value={row.harvestedDate} id="outlined-basic" label="Harvested Date" variant="outlined" /> }</StyledTableCell>
              <StyledTableCell align="left">{!row.isEdit && row.harvestedAmount}{row.isEdit &&  <TextField value={row.harvestedAmount} id="outlined-basic" label="Harvested Date" variant="outlined" /> }</StyledTableCell>
              <StyledTableCell align="left"><Button onClick={handleCilickOpenModal}  size='small' variant="outlined" startIcon={<RemoveRedEyeIcon/>}>
        View
      </Button></StyledTableCell>
      <StyledTableCell align="left">{!row.isEdit &&<Button onClick={()=>handleClickEditDemo(row.id)}  size='small' variant="outlined" startIcon={<EditIcon/>}>
       Edit
      </Button>}{row.isEdit &&<Button onClick={()=>handleSave(row.id)}  size='small' variant="outlined" startIcon={<DoneOutlineIcon/>}>
       Save
      </Button>}</StyledTableCell>
              
              
            </StyledTableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
