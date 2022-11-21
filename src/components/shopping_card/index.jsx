import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ItemCard from "../../components/item_card/index";
import Button from "@mui/material/Button";
import ImageList from "../../components/buyer_image_pre/index";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";

import api from "../../api/modules/buyer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BuyItemShoppingCard(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [totValue, setTotValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [msg, setMsg] = useState("");

  //notification thsings

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //=============

  //all data
  const buyDataFromCard = location.state;

  const price = buyDataFromCard.price;
  const product_name = buyDataFromCard.product_name;
  const remainAmount = buyDataFromCard.remainAmount;
  // const { item_id, unit_price, payment, transport, product_name,remainAmount } =
  // 	location.state;
  // console.log((item_id, unit_price, payment, transport, product_name,remainAmount));
  const left_card_details = { price, product_name, remainAmount };

  const [itemData, setItemData] = useState([]);

  const handleBuyOrder = () => {
    if (inputValue <= buyDataFromCard.remainAmount) {
      if (inputValue == 0) {
        setMsg("Input amount can't be 0 kg");
        handleClick();
      } else {
        buyDataFromCard.totValue = totValue;
        buyDataFromCard.amount = inputValue;
        navigate("/buyer/market/checkout/payment", {
          state: buyDataFromCard,
        });
      }
    } else {
      setMsg("Your required amount must be less than available amount");
      handleClick();
    }
  };

  const getImages = async (image_id) => {
    var [res, code] = await api.getItemImages(image_id.trim());

    setItemData(code.slice(0, 3));
  };



  function getInputAmount(value) {
    setInputValue(value);
  }

  useEffect(() => {
    setTotValue((inputValue * buyDataFromCard.price).toFixed(2));
  }, [inputValue]);

  useEffect(() => {
    getImages(buyDataFromCard.item_id);
  }, []);

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {msg}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginBottom: 10,
          my: 1,
          "& > :not(style)": {
            m: 1,
            width: "100%",
            height: "100%",
          },
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={0}
          sx={{ px: 5 }}
          style={{ paddingTop: 25, marginBottom: 20 }}
        >
          <Box
            sx={{ width: "100%" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack direction="row" sx={{ width: "100%", height: "50%" }}>
              <Grid
                container
                rowSpacing={0}
                columnSpacing={{ xs: 1, sm: 0, md: 0 }}
              >
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      alignItems: "center",
                      "& > :not(style)": {
                        m: 1,
                        width: "100%",
                        height: "110%",
                      },
                    }}
                  >
                    <Paper
                      elevation={1}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 40,
                        marginBottom: 10,
                        width: "70%",
                      }}
                    >
                      {/* ======================= Left Card ============================= */}
                      <ItemCard
                        getInputAmount={getInputAmount}
                        left_card_details={left_card_details}
                      />
                      {/* ============================ End Left Card ========================= */}
                      <Box
                        sx={{
                          marginTop: 3,
                          marginLeft: 1,
                          padding: 1,
                          width: 300,
                          height: 300,
                          backgroundColor: "",
                          boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px",
                          // "&:hover": {
                          // 	boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 5px",
                          // 	backgroundColor: "#fafafa",
                          // },
                        }}
                      >
                        <div>
                          <div
                            style={{
                              paddingLeft: 30,
                            }}
                          >
                            <h2
                              style={{
                                paddingTop: 10,
                                color: "#007476",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              Total Price(LKR)
                            </h2>
                            <h1
                              style={{
                                paddingTop: 10,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {" "}
                              {totValue}
                            </h1>

                            <Stack direction="row">
                              <LocalShippingIcon sx={{ mx: 3 }} />

                              <ul style={{ margin: 0 }}>
                                <b>Tranport : </b>
                                {buyDataFromCard.transport}
                              </ul>
                            </Stack>

                            <Stack direction="row" style={{ marginTop: 15 }}>
                              <PaymentIcon sx={{ mx: 3 }} />
                              <ul style={{ margin: 0 }}>
                                <b>Online Payment : </b>
                                {buyDataFromCard.payment}
                              </ul>
                            </Stack>
                          </div>
                        </div>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Box>

          {/* ===========================Image component====================== */}
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
              marginBottom: -20,
            }}
          >
            <ImageList images={itemData} />
          </div>

          {/* ===========================End ofImage component====================== */}
        </Paper>

        <Button
          style={{ width: 180, marginBottom: 0 }}
          onClick={handleBuyOrder}
          variant="contained"
          startIcon={<ShoppingCartIcon style={{ height: 40 }} />}
        >
          BUY
        </Button>
      </Box>
    </div>
  );
}
