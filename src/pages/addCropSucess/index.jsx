import * as React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function Success() {
  return (
    <div>
      {/* <AdminNavbar /> */}
      <div
        style={{
          margin: "auto",
          marginTop: "10%",
          width: "60%",
          padding: "10px",
          backgroundColor: "#e6ffe6",
          borderRadius: "20px",
        }}
      >
        <div style={{ marginTop: "1vw" }}>
          <Typography
            component="h1"
            variant="h5"
            color="primary"
            sx={{
              marginTop: "2vw",
              mb: 3,
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Crop Details Added Succesfully!
          </Typography>
          <CheckCircleIcon
            sx={{
              width: "20%",
              height: "20%",
              marginLeft: "40%",
              marginRight: "40%",
              color: "#00917C",
            }}
          />

          <a href="/gso/home" style={{ textDecoration: "none" }}>
            <Button
              //id="submit"
              //disabled={isLoading}
              variant="contained"
              sx={{
                marginLeft: "40%",
                marginRight: "40%",
                width: "20%",
                marginTop: "2vw",
                marginBottom: "2vw",
                ":hover": {
                  backgroundColor: "white",
                  color: "#035956",
                  fontWeight: "bold",
                },
              }}
            >
              Go To Home
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
