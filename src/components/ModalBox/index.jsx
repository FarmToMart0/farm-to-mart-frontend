import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid, Stack, Chip } from '@mui/material';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (

    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalBox({handleClickOpen,handleClose,open}) {
 

  return (
    <div>
    
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
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
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
