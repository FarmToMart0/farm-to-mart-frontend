import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectingInputField({lable,value,handleChangeValue,valuesArray}) {
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-helper-label">{lable}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChangeValue}
          autoWidth
          label="Age"
        >

            {
                valuesArray.map((item)=>{
                    return <MenuItem value={item}>{item}</MenuItem>
                })
            }
          
        </Select>
      </FormControl>
    </div>
  );
}