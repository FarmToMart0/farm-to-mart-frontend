import React, { useState } from "react";
import Joi from "joi-browser";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Button,
  Stack,

  Grid,
  Typography,
  TextField,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import EditIcon from "@mui/icons-material/Edit";
import SnackBarComponent from "../../../../components/Snackbars";
import FormDialog from "./../../../../components/DialogComponent/index";
import ModalBox from "../../../../components/ModalBox";
import Alert from "@mui/material/Alert";
import api from "../../../../api";
import SearchBarField from "../../../../components/SearchBarField";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 4,
  },
}));

// Table for show the crop list that farmer has been farmed
export default function MyCropTable({
  rows,
  columns,
  tab,
  handleClickEdit,
  updateHarvestAmount,
  updateHarvestDate,
  doSave,
  doRefresh,
  handleChangeFilter
}) {
  const [openDialog1, setOpenDialog] = useState(false);
  const [harvesteddata, setHarvestedData] = useState({
    harvestedDate: "",
    harvestedAmount: "",
  });

  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  
  const [errorOccured, setErrorOccured] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState({ type: "", message: "" });
  const schema = {
    harvestedDate: Joi.date().required(),
    harvestedAmount: Joi.number().required(),
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const updateHarvest = async () => {
    try {
      const [code, res] = await api.farmer.updateHarvestedData([
        harvesteddata,
        selectedProduct.id,
      ]);

      if (code === 201) {
        doRefresh();

        setErrorMessage({
          type: "success",
          message: "successfully updated harvest details",
        });
        setErrorOccured(true);
      } else {
        setErrorMessage({ type: "error", message: res });
        setErrorOccured(true);
      }
    } catch (error) {
      setErrorMessage({ type: "error", message: "server error" });
      setErrorOccured(true);
    }
  };
  const handleSave = (id) => {
    doSave(id);
  };
  const handleSubmit = async () => {
    const result = Joi.validate(harvesteddata, schema, { abortEarly: false });
    const { error } = result;
    if (!error) {
      await updateHarvest(selectedProduct);
      setOpenDialog(false);
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
  const handleHaversetedData = (event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    let harvestData = { ...harvesteddata };
    harvestData[name] = value;
    setHarvestedData(harvestData);

    setErrors(errorData);
  };

  const handleClickEditDemo = (id) => {
    handleClickEdit(id);
  };

  const handleCilickOpenModal = (id) => {
    setSelectedProduct(
      rows.filter((item) => {
        if (item.id == id) {
          return item;
        }
      })[0]
    );

    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEditHaversetedDate = (id, event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    if (new Date(value) <= Date.now()) {
      updateHarvestDate(id, value);
    } else {
      errorData["date"] = "Time should less than today";
    }

    setErrors(errorData);
  };
  const handleEditHaversetedAmount = (id, event) => {
    const { name, value } = event.target;
    let errorData = { ...errors };
    const errorMessage = validateProperty(event);
    if (errorMessage) {
      errorData[name] = errorMessage;
    } else {
      delete errorData[name];
    }
    updateHarvestAmount(id, value);
    setErrors(errorData);
  };

  const handleCilickOpenDialog = (id) => {
    setSelectedProduct(
      rows.filter((item) => {
        if (item.id == id) {
          return item;
        }
      })[0]
    );

    setOpenDialog(true);
  };

  const validateProperty = (event) => {
    const { name, value } = event.target;
    const obj = { [name]: value };
    const subSchema = { [name]: schema[name] };
    const result = Joi.validate(obj, subSchema);
    const { error } = result;
    return error ? error.details[0].message : null;
  };

  return (
    <TableContainer component={Paper}>
      
      <SnackBarComponent
        open={errorOccured}
        message={errorMessage.message}
        type={errorMessage.type}
        setOpen={setErrorOccured}
      /> 
      <SearchBarField
    
      placeHolder="Search product here"
      handleSearch={handleChangeFilter}
    />
      <FormDialog handleClose={handleCloseDialog} openDialog={openDialog1}>
        <Grid width={250} container spacing={2}>
          <Grid item xs={12}>
            <FormControl variant="outlined" sx={{ width: "100%" }}>
              <FormHelperText
                id="outlined-weight-helper-text"
                sx={{ ml: "5px", fontSize: "1rem" }}
              >
                Harvested Date
              </FormHelperText>
              <OutlinedInput
                required
                id="harvestedDate"
                name="harvestedDate"
                type="date"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                value={harvesteddata.harvestedDate}
                onChange={handleHaversetedData}
              />
              {errors.harvestedDate && (
                <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                  {errors.harvestedDate}
                </Alert>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={harvesteddata.harvestedAmount}
              onChange={handleHaversetedData}
              name="harvestedAmount"
              id="outlined-basic"
              label="Amount Of Harvest"
              variant="outlined"
            />
            {errors.harvestedAmount && (
              <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                {errors.harvestedAmount}
              </Alert>
            )}
          </Grid>
          <Grid align="right" item xs={12}>
            <Button onClick={handleSubmit} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </FormDialog>

      <ModalBox
        buttonName={"colse"}
        handleClickOpen={handleCilickOpenModal}
        handleClose={handleCloseModal}
        open={openModal}
      >
        <Grid width={500} container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Crop Type
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{selectedProduct.cropType}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Started Date
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{selectedProduct.startedDate}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              expected harvest date
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Stack direction="row" spacing={2}>
              <Typography>{selectedProduct.expectedDate}</Typography>{" "}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Land Area
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{selectedProduct.landArea}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              expected amount of hervest
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{selectedProduct.expectedDate}</Typography>
          </Grid>
          {!tab && (
            <>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  harvested amount{" "}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{selectedProduct.harvestedAmount}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom>
                  harvested Date{" "}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography>{selectedProduct.harvestedDate}</Typography>
              </Grid>
            </>
          )}
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography>{selectedProduct.location}</Typography>
          </Grid>
        </Grid>
      </ModalBox>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((row) => {
              return <StyledTableCell>{row}</StyledTableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tab &&
            rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.cropType}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.startedDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.expectedDate}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button
                    onClick={() => handleCilickOpenModal(row.id)}
                    size="small"
                    variant="outlined"
                    startIcon={<RemoveRedEyeIcon />}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button
                    onClick={() => handleCilickOpenDialog(row.id)}
                    size="small"
                    variant="outlined"
                    startIcon={<EditIcon />}
                  >
                    Update Harvest 
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          {!tab &&
            rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.cropType}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {!row.isEdit && row.harvestedDate}
                  {row.isEdit && (
                    <FormControl variant="outlined" sx={{ width: "100%" }}>
                      <OutlinedInput
                        required
                        id="harvestedDate"
                        name="harvestedDate"
                        type="date"
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        value={row.harvestedDate}
                        onChange={(event) =>
                          handleEditHaversetedDate(row.id, event)
                        }
                      />
                      {errors.harvestedDate && (
                        <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                          {errors.harvestedDate}
                        </Alert>
                      )}
                    </FormControl>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {!row.isEdit && row.harvestedAmount}
                  {row.isEdit && (
                    <TextField
                      value={parseInt(row.harvestedAmount)}
                      onChange={(event) =>
                        handleEditHaversetedAmount(row.id, event)
                      }
                      name="harvestedAmount"
                      id="outlined-basic"
                      label="Amount Of Harvest"
                      variant="outlined"
                    />
                  )}
                  {errors.harvestedAmount && (
                    <Alert sx={{ mt: "1vw", mb: "1vw" }} severity="error">
                      {errors.harvestedAmount}
                    </Alert>
                  )}
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button
                    onClick={() => handleCilickOpenModal(row.id)}
                    size="small"
                    variant="outlined"
                    startIcon={<RemoveRedEyeIcon />}
                  >
                    View
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="left">
                  {!row.isEdit && (
                    <Button
                      onClick={() => handleClickEditDemo(row.id)}
                      size="small"
                      variant="outlined"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                  )}
                  {row.isEdit && (
                    <Button
                      onClick={() => handleSave(row.id)}
                      size="small"
                      variant="outlined"
                      startIcon={<DoneOutlineIcon />}
                    >
                      Save
                    </Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
