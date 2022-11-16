import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {
  const crops = props.cropItems;
  const category = props.category;
    return (
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={crops}
      sx={{ width: 350}}
      style={{boxShadow: "rgba(99, 99, 99, 0.2) 0 2 8 0", color:"red"}}
      renderInput={(params) => <TextField {...params} label={category}  style={{backgroundColor:"#FFFFFF" , fontWeight:"bold" }}/>}
    />
  );
}


const crops = [
  { label: 'Paddy'},
  { label: 'Carrot' },
  { label: 'Beans'},
  { label: 'Eggs'},
];