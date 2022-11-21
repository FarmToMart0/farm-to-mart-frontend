import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Stack from "@mui/material/Stack";

export default function ResponsiveDateTimePickers({ handleDate, endDate }) {
  const [value, setValue] = React.useState(dayjs(endDate));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DateTimePicker
          label="Ending Time"
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            handleDate(value);
          }}
          minDateTime={dayjs(Date.now())}
        />
      </Stack>
    </LocalizationProvider>
  );
}
