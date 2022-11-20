import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@1200&display=swap');
</style>;

export default function SimplePaper(props) {
 

  const handleFinalSubmit = () => {
    props.setFinalState(true);
    props.setStart(value);
  };

  const labels = {
    1: "Useless",

    2: "Poor",

    3: "Ok",

    4: "Good",

    5: "Excellent",
  };

  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          mt: 9,
          width: 128,
          height: 128,
        },
      }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "content",
      }}
    >
      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
          width: "40%",
          height: 550,
          borderRadius: 15,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Stack
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 50,
                margin: 0,
                fontFamily: "Rokkitt, serif",
                color: "#006400",
              }}
            >
              {" "}
              Farm
              <span
                style={{
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "#002800",
                }}
              >
                2
              </span>
              Mart{" "}
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ color: "#008000" }}>Order Completed</h1>
            </div>
            <TaskAltIcon style={{ width: 100, height: 100 }} color="success" />
            <p>Rate the Farmer</p>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <Button
              variant="contained"
              style={{ margin: 20 }}
              onClick={handleFinalSubmit}
            >
              Submit
            </Button>

            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © Farm2Mart "}

              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
