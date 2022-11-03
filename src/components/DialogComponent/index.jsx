import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/system';

export default function FormDialog({handleClose,openDialog,name1,name2,children}) {
  

  return (
    <div>
      
      <Dialog open={openDialog} onClose={handleClose}>
        
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{name1}</Button>
          <Button onClick={handleClose}>{name2}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
