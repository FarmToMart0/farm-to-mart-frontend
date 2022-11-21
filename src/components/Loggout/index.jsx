import  React,{useState,useEffect} from "react";
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

import { logOutRequest } from "../../reducers/modules/user";
import {
  setAuthorizationKey,
  setUserObjectInLocal,
} from "../../utils/localStorageHelper";
import { loggingRequest } from "../../reducers/modules/user";
import { useSelector, useDispatch } from "react-redux";

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

export default function LogoutComponent(props) {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [role,setRole] = useState('')
  useEffect(()=>{
    if (user?.userRole==='FARMER') {
        setRole('farmer')
    }
    if (user?.userRole==='BUYER') {
        setRole('buyer')
    }
    if (user?.userRole==='GSO') {
        setRole('govijanasewa officer')
    }
    if (user?.userRole==='MAINOFFICER') {
        setRole('main officer')
    }
  },[])
  

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
         You have signed in as {role}<br/>
         First need to loggout and login as Buyyer
        </Typography>
        <Box
         
          
          sx={{ mt: 3 }}
        >
          <Button
            onClick={() => {
                dispatch(logOutRequest());
                localStorage.clear();
                navigate("/login");
              }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#198754" }}
          >
            LOGOUT
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
