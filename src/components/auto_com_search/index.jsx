import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox(props) {
	const crops = props.cropItems;
	const category = props.category;
	const [val, setVal] = React.useState(props.initiaiState);
	React.useEffect(() => {
		
	}, [val]);

	return (
		<Autocomplete
			disablePortal
			id='combo-box-demo'
			options={crops}
      value={val}
			onChange={(e) => {
		
				props.handleSelection(e.target.childNodes[0].data);
				setVal(e.target.childNodes[0].data)
			}}
			sx={{ width: props.width }}
			style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0 2 8 0", color: "red" }}
			renderInput={(params) => {
				return (
					<TextField
						{...params}
						label={category}
						style={{ backgroundColor: "#FFFFFF", fontWeight: "bold" }}
					/>
				);
			}}
		/>
	);
}
