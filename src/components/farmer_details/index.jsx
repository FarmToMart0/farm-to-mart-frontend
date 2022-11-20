import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Divider } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItem from "@mui/material/ListItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CropForm from "../addCropData/index";
import api from "../../api";

const CustomizedListItem = ({ crop }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ListItem button key={crop._id} onClick={handleClick}>
        <ListItemIcon>
          <ArrowForwardIcon sx={{ fontSize: "1rem", color: "#25D366" }} />
        </ListItemIcon>

        <ListItemText
          sx={{ color: "black" }}
          primary={
            <Typography
              sx={{ color: "black", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              {" "}
              {crop.cropType} - Start Date of Growing:{" "}
              {crop.startingDateOfGrowing}{" "}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse key={crop.id} in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Crop Type
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.category}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Crop Name
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.cropType}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Growing Area
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.landArea} acres
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Start Date of Growing
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.startingDateOfGrowing}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Estimated Harvest
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.expectedAmount} Kg
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Final Harvest
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.harvestedAmount}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Estimated Date to Harvest
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.expectingDateOfHarvest}{" "}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>

          <ListItem button sx={{ pl: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ color: "black", fontWeight: "", fontSize: "1rem" }}
                    >
                      Final Harvest Date
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <ListItemText
                  primary={
                    <Typography sx={{ color: "black", fontSize: "1rem" }}>
                      : {crop.harvestedDate}{" "}
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Collapse>
      <Divider />
    </div>
  );
};

export default function Home({ userDetails, farmerDetails }) {
  const [click, setClick] = useState(false);
  const [dataAvailability, setdataAvailability] = useState(false);
  const navigate = useNavigate();
  // const [open, setOpen] = React.useState(false);
  const [cropData, setCropData] = useState([]);

  // const handleClick = () => {
  //     setOpen(!open);
  // };
  const handleRemove = async (e) => {
    // console.log({farmerDetails})
    try {
      await api.gso.removeFarmer({ farmerDetails });
      navigate("/gso/success-remove-farmer");
    } catch (error) {
      console.log(error);
    }
  };

  const getCropDetais = async (id) => {
    const [code, res] = await api.gso.getCropDetails(id);
    if (code === 201) {
      setCropData(res);
      console.log(cropData);
      if (cropData.length != 0) {
        setdataAvailability(true);
      } else {
        setdataAvailability(false);
      }
      // console.log("Crop data",res)
    }
  };

  useEffect(() => {
    getCropDetais(farmerDetails.nic);
  }, []);

  return (
    <div>
      {!click && (
        <Container
          component="main"
          width=""
          sx={{
            background: "#ffffff4d",
            borderLeft: "1px solid #ffffff4d",
            borderTop: "1px solid #ffffff4d",
            backdropFilter: "blur(10px)",
            // boxShadow: '20px 20px 40px -6px rgb(0 0 0 / 20%)',
            boxShadow:
              "0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )",
            borderRadius: "10px",
            mb: "5vw",
            mt: 0,
            width: "100%",
            padding: "2vw",
            paddingTop: 0,
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "Left",
            }}
          >
            <div style={{ float: "right", marginTop: "2vw" }}>
              <Button
                variant="outlined"
                sx={{
                  margin: 0,
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "red",
                  float: "right",
                  width: "25%",
                }}
                onClick={handleRemove}
              >
                Remove Farmer <hr /> <DeleteIcon />{" "}
              </Button>
            </div>

            <Typography
              component="h1"
              variant="h5"
              color="primary"
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              {farmerDetails.firstName} {farmerDetails.lastName}
            </Typography>
            <Typography
              component="h2"
              variant="h5"
              color="secondary"
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              {farmerDetails.gsdName} {farmerDetails.gsdCode}
            </Typography>

            <Grid container spacing={2} sx={{ mt: "1.5vw" }}>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Full Name
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.firstName} {farmerDetails.lastName}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Address
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.address}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Mobile Number
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.phone}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                District
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.district}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Govijana Seva Devision
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.gsdName}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Govijana Seva Devision Code
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.gsdCode}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                Email
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {userDetails.email}
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
              >
                National Identity Card
              </Grid>
              <Grid item xs={12} md={8} sx={{ fontSize: "1.2rem" }}>
                : {farmerDetails.nic}
              </Grid>
            </Grid>

            <div style={{ float: "right", marginTop: "1vw" }}>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 0,
                  height: "2.5rem",
                  width: "25%",
                  float: "right",
                }}
                onClick={() => {
                  setClick(true);
                }}
              >
                Add New Crop data
              </Button>
            </div>

            <List
              sx={{ width: "100%", bgcolor: "background.paper", mt: "2vw" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Typography
                    component="h2"
                    variant="h5"
                    color="primary"
                    sx={{
                      mt: 2,
                      fontWeight: "bold",
                      fontSize: "1.4rem",
                      textAlign: "left",
                    }}
                  >
                    Crop Details
                  </Typography>
                </ListSubheader>
              }
            >
              {console.log(dataAvailability, "abc")}

              {dataAvailability &&
                cropData.map((crop) => {
                  if (crop.status == "ongoing") {
                    crop.harvestedDate = "pending";
                    crop.harvestedAmount = "pending";
                  } else {
                    crop.harvestedDate = crop.harvestedDate.slice(0, 10);
                    crop.harvestedAmount = crop.harvestedAmount + " Kg";
                  }
                  crop.startingDateOfGrowing = crop.startingDateOfGrowing.slice(
                    0,
                    10
                  );
                  crop.expectingDateOfHarvest =
                    crop.expectingDateOfHarvest.slice(0, 10);
                  return <CustomizedListItem key={crop._id} crop={crop} />;
                })}

              {!dataAvailability && (
                <Typography
                  component="h5"
                  variant="h3"
                  color="secondary"
                  sx={{
                    mt: 3,
                    mb: 3,
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  No Crop Details in the System!
                </Typography>
              )}
            </List>
          </Box>
        </Container>
      )}
      {click && <CropForm farmersNic={farmerDetails.nic} />}
    </div>
  );
}
