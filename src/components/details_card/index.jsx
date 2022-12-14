import { React, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import FarmerDetails from "../farmer_details/index";
import api from "../../api";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function OutlinedCard({ farmerDetails }) {
  const [click, setClick] = useState(false);
  const [userF, setUserF] = useState([]);

  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  useEffect(() => {if (!user?.auth) {
        navigate("/login");
      }
      if (user?.userRole != "GSO") {
        navigate("/");
  }}, []);

  const handleSeeMore = async (e) => {
    console.log({ farmerDetails });
    setClick(true);
    try {
      const [code, res] = await api.user.getFDetails({ farmerDetails });
      console.log(res);
      if (code === 201) {
        if (res) {
          console.log(res);
          setUserF(res);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!click && (
        <Container
          component="main"
          maxWidth=""
          sx={{
            background: "rgb(245, 245, 245)",
            width: "100%",
            borderRadius: "10px",
            mb: "5vw",
            mt: 0,
            boxShadow:
              "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
          }}
        >
          <Box sx={{ minWidth: 275 }}>
            <Card variant="basic" sx={{ background: "rgb(245, 245, 245)" }}>
              <CardContent>
                <Typography
                  component="h1"
                  variant="h5"
                  color="primary"
                  sx={{ mt: 2, fontWeight: "bold", fontSize: "1.8rem" }}
                >
                  {farmerDetails.gsdName}
                </Typography>
                <Typography
                  component="h2"
                  variant="h5"
                  color="secondary"
                  sx={{ mt: 2, fontWeight: "bold", fontSize: "1.5rem" }}
                >
                  {farmerDetails.gsdCode}
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  color="secondary"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  {farmerDetails.firstName} {farmerDetails.lastName}
                </Typography>
                <Typography
                  component="h3"
                  variant="h5"
                  color="secondary"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "black",
                  }}
                >
                  {farmerDetails.nic}
                </Typography>
              </CardContent>
              <CardActions sx={{ float: "right" }}>
                <div style={{ marginTop: "-5vw" }}>
                  <Button size="small" onClick={handleSeeMore}>
                    See More
                  </Button>
                </div>
              </CardActions>
            </Card>
          </Box>
        </Container>
      )}

      {click && (
        <FarmerDetails farmerDetails={farmerDetails} userDetails={userF} />
      )}
    </>
  );
}
