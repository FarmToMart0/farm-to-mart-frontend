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
      sx={{ width: 300}}
      color="red" 
      renderInput={(params) => <TextField {...params} label={category} />}
    />
  );
}


const crops = [
  { label: 'Paddy'},
  { label: 'Carrot' },
  { label: 'Beans'},
  { label: 'Eggs'},
];