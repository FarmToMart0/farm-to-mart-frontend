import React, { useState } from "react";
import NavBar from "../../../components/navbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Formik } from "formik";
import { Typography } from "@mui/material";
import api from "../../../api";
import SnackBarComponent from "../../../components/Snackbars";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState({
    type: "",
    messsage: "",
  });

  const [initialValues, setInitialValues] = useState({
    email: "",
  });

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid Email";
    }

    return errors;
  };

  async function resetUserPassword(email) {
    setIsLoading(true);
    try {
      const [code, res] = await api.user.forgotPassword({ email: email });
      if (code == 201) {
        setSnackBarMessage({
          type: "info",
          messsage: "Email was sent for reset the password",
        });
        setOpenSnackBar(true);
        setInitialValues({
          type: "",
          messsage: "",
        });
      } else if (code == 500) {
        console.log(res);
        setSnackBarMessage({ type: "error", messsage: res });
        setOpenSnackBar(true);
      } else {
        console.log(res);
        setSnackBarMessage({ type: "error", messsage: "error occured" });
        setOpenSnackBar(true);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setSnackBarMessage({ type: "error", messsage: "error occured" });
      setIsLoading(false);
    }
  }

  const submitForm = (values) => {
    resetUserPassword(values.email);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const { values, handleChange, handleSubmit, errors, touched } = formik;

        return (
          <div>
            <NavBar />
            <SnackBarComponent
              open={openSnackBar}
              setOpen={setOpenSnackBar}
              type={snackBarMessage.type}
              message={snackBarMessage.messsage}
            />
            <div>
              <Container
                component="main"
                maxWidth="xs"
                sx={{
                  mt: 10,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CssBaseline />
                <Box
                  sx={{
                    mt: 10,
                  }}
                >
                  <Typography variant="h4">Forgot Password?</Typography>
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Typography variant="p" color="text.secondary">
                      Enter your e-mail address and we'll send you a link to
                      reset your password
                    </Typography>
                  </div>

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    style={{ width: "400px" }}
                  >
                    <TextField
                      type="email"
                      name="email"
                      id="email"
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      error={Boolean(touched.email && errors.email)}
                      helperText={touched.email ? errors.email : ""}
                      variant="standard"
                      label="Email"
                      placeholder="Email"
                    />

                    <Button
                      color="primary"
                      type="submit"
                      disabled={isLoading}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                    >
                      {isLoading ? <CircularProgress /> : "Reset Password"}
                    </Button>
                  </Box>
                </Box>
              </Container>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}
