import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockResetIcon from "@mui/icons-material/LockReset";
import Joi from "joi-browser";
import { Alert } from "@mui/material";
import api from "../../../api";
import SnackBarComponent from "../../../components/Snackbars";

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

const theme = createTheme();

export default function ResetPasswordUi() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [snackBarMessage, setSnackBarMessage] = useState({
    type: "",
    messsage: "",
  });
  const [errors, setErrors] = useState({});
  const [expire, setExpire] = useState(false);
  
  const [reserPassword, setreserPassword] = useState({
    password: "",
    confPassword: "",
  });

  async function resetPassword(data) {
    setIsLoading(true);
    try {
      var [code, res] = await api.user.resetPassword(data);
      if (code == 401) {
        setSnackBarMessage({ type: "error", messsage: "Link was expired" });
        setOpenSnackBar(true);
      } else if (code == 201) {
        navigate("/login");
      }
    } catch (error) {
      setSnackBarMessage({ type: "error", messsage: "error occured" });
      setIsLoading(false);
    }
  }
  const schema = {
    password: Joi.string()
      .min(8)
      .max(25)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "password"
      )
      .required(),
    confPassword: Joi.any()
      .valid(Joi.ref("password"))
      .required()
      .options({ language: { any: { allowOnly: "must match password" } } }),
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    if (name === "confPassword") {
      const obj = { password: reserPassword.password, [name]: value };
      const subSchema = {
        [name]: schema[name],
        password: schema["password"],
      };
      const { error } = Joi.validate(obj, subSchema);
      return error ? error.details[0].message : null;
    } else {
      const obj = { [name]: value };
      const subSchema = { [name]: schema[name] };
      const result = Joi.validate(obj, subSchema);
      const { error } = result;
      return error ? error.details[0].message : null;
    }
  };
  const handleSave = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let reserPasswordData = { ...reserPassword };
    reserPasswordData[name] = value;
    setreserPassword(reserPasswordData);
    setErrors(errorData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = Joi.validate(reserPassword, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      await resetPassword({
        password: reserPassword.password,
        id: id,
        token: token,
        email: email,
      });
    } else {
      const errorData = {};
      for (let item of error.details) {
        const name = item.path[0];
        const message = item.message;
        errorData[name] = message;
      }
      setErrors(errorData);
      console.log(errorData);
      return errorData;
    }
  };

  async function expirationCheck(data) {
    try {
      const [code, res] = await api.user.checkExpiried(data);
      console.log(res);
      if (code == 401) {
        setExpire(true);
      }
    } catch (error) {}
  }

  useEffect(() => {
    const params = location.pathname.split("/");
    setEmail(params[2]);
    setId(params[3]);
    setToken(params[4]);
    expirationCheck({ id: params[3], token: params[4] });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <SnackBarComponent
          open={openSnackBar}
          setOpen={setOpenSnackBar}
          type={snackBarMessage.type}
          message={snackBarMessage.messsage}
        />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockResetIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {!expire ? "Reset Password" : "Link was expired"}
          </Typography>
          {!expire && (
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleSave}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {errors.password && (
                <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                  Password must be at least 8 characters long contain a number,
                  an uppercase letter, a lowercase letter and a special
                  character{" "}
                </Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handleSave}
                name="confPassword"
                label="Confirm Password"
                type="password"
                id="confPassword"
                autoComplete="re-current-password"
              />
              {errors.confPassword && (
                <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                  Passwords do not match
                </Alert>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: "primary" }}
              >
                RESET
              </Button>
            </Box>
          )}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
