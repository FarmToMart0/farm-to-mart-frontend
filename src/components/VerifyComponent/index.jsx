import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { setAuthorizationKey,setUserObjectInLocal } from "../../utils/localStorageHelper";
import { loggingRequest } from '../../reducers/modules/user';
import { useSelector, useDispatch } from 'react-redux';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        FARM-TO-MART
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function VerifyComponent(props) {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (token) => {
    try {
      const [code, res] = await api.user.verify(token);
      if (code == 201) {
        
        if (res.userRole == "FARMER") {
          setAuthorizationKey(res.token);
          setUserObjectInLocal(res);
          dispatch(loggingRequest(res));
          navigate("/farmer/dash/dashboard");
        }
        if (res.userRole == "BUYER") {
          setAuthorizationKey(res.token);
          setUserObjectInLocal(res);
          dispatch(loggingRequest(res));
          navigate("/");
        }
      }
    } catch (error) {}
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <VerifiedUserIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify your registration
        </Typography>
        <Box
          component="form"
          onClick={() => {
            handleSubmit(props.id);
          }}
         
          sx={{ mt: 3 }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#198754" }
             
          }
          >
            Click Here
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
