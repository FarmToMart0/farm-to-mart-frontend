import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBarField({placeHolder,handleSearch}) {
    console.log(placeHolder)
  return (
       

    <Paper
      component="form"
      sx={{ml:'61%', p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 ,}}
        placeholder={placeHolder}
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={()=>{console.log(placeHolder)}}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  );
}