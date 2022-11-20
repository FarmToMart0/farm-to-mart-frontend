import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ItemCard(props) {
  const { unit_price, product_name, remainAmount } = props.left_card_details;

  return (
    <Box
      sx={{
        marginTop: 3,
        marginRight: 1,
        width: 300,
        height: 300,
        backgroundColor: "",
        padding: 1,
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px",
        // '&:hover': {
        // boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 5px',
        // backgroundColor: '#fafafa',

        // },
      }}
    >
      <div>
        <h1 style={{ padding: 10, color: "#007476" }}>{product_name}</h1>

        <div
          style={{
            paddingLeft: 30,
          }}
        >
          <h3> Unit Price : {unit_price} Rs/Kg</h3>
          <h3> Available : {remainAmount} kg</h3>
          <h3>
            Quantity :{" "}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Amount of Kg"
                variant="standard"
                type="number"
                onChange={(e) => {
                  if (e.target.value > 0) {
                    props.getInputAmount(e.target.value);
                  } else {
                    props.getInputAmount(0);
                  }
                }}
              />
            </Box>{" "}
          </h3>
        </div>
      </div>
    </Box>
  );
}
