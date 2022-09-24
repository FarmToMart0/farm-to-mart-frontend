import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75%' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="standard-basic" label={props.title} variant="standard" />
    </Box>
  );
}
