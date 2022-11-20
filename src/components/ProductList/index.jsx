import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "@mui/system";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import SearchBarField from "../SearchBarField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Row(props) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const { row, handleDelete } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.productName}
        </TableCell>
        <TableCell align="right">
          {new Date(row.updatedAt).getFullYear() +
            "-" +
            (parseInt(new Date(row.updatedAt).getMonth()) + 1) +
            "-" +
            new Date(row.updatedAt).getDate()}
        </TableCell>

        <TableCell align="right">
          <Button
            variant="outlined"
            onClick={() => {
              props.openForm([true, row._id, 1]);
            }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button
            variant="outlined"
            sx={{ color: "red" }}
            onClick={() => {
              handleClickOpen();
            }}
            startIcon={<DeleteIcon />}
          >
            Remove
          </Button>
        </TableCell>
        {row.remainQuantity == 0 && (
          <TableCell align="right">
            {" "}
            <Chip
              sx={{ color: "green" }}
              variant="outlined"
              label={"Sold out"}
            />
          </TableCell>
        )}
        {row.remainQuantity != 0 && (
          <TableCell align="right">
            {" "}
            <Chip
              sx={{ color: "green" }}
              variant="outlined"
              label={"Remain in Stock"}
            />
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Data
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell size="medium">Description</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell align="right">Initial bid</TableCell>
                    <TableCell align="right">Total Quantity</TableCell>
                    <TableCell align="right">Remaining Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[row].map((historyRow) => (
                    <TableRow key={historyRow.description}>
                      <TableCell component="th" scope="row">
                        {historyRow.description}
                      </TableCell>
                      <TableCell>{historyRow.unitPrice}</TableCell>
                      <TableCell align="right">
                        {historyRow.initialBid}
                      </TableCell>
                      <TableCell align="right">{historyRow.quantity}</TableCell>
                      <TableCell align="right">
                        {historyRow.remainQuantity}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounteds
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Do you want to remove this?"}</DialogTitle>

        <DialogActions>
          <Button
            onClick={() => {
              handleDelete(row._id);
              handleClose();
            }}
          >
            Yes
          </Button>
          <Button onClick={handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

export default function ProductList({
  openProductAddForm,
  dataList,
  handleChangeFilter,
  handleRemove,
}) {
  return (
    <Container sx={{ mt: 3 }}>
      <SearchBarField
        placeHolder="Search product here"
        handleSearch={handleChangeFilter}
      />

      <TableContainer sx={{ color: "primary" }} component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#25D366" }}>
              <TableCell />
              <TableCell>Product </TableCell>
              <TableCell align="right">Last Modified</TableCell>
              <TableCell align="right">Edit Product</TableCell>
              <TableCell align="right">Remove Product</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList &&
              dataList?.map((row) => (
                <Row
                  openForm={openProductAddForm}
                  handleDelete={handleRemove}
                  key={row._id}
                  row={row}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
