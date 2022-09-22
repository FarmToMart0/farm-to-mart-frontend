import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/system';

export default function FormDialog({handleClose,openDialog}) {
  

  return (
    <div>
      
      <Dialog open={openDialog} onClose={handleClose}>
        
        <DialogContent>
            <Stack alignSelf='center' direction='row' spacing={3}>
      
          <TextField
           
            autoFocus
            margin="dense"
            id="name"
            label="Amount in LKR"
            type="email"
            
            variant="standard"
          /></Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
