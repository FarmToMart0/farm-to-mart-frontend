import React, { useState, useEffect } from "react";

import { Box, Container, Grid } from "@mui/material";
import { TotalSales } from "../../../components/dashboard/totalSales";
import api from "../../../api";
import { Sales } from "../../../components/dashboard/sales";
import { PendingOrders } from "../../../components/dashboard/pending-orders";
import { TotalOrders } from "../../../components/dashboard/total-oders";
import { TotalProfit } from "../../../components/dashboard/ongoingBiding";
import { OrderOverView } from "../../../components/dashboard/orderOverview";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

function SalaseDashBoard() {
  const navigate = useNavigate()
  const user = useSelector((state) => state?.user);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrdersSinceLastMonth, settotalOrdersSinceLastMonth] = useState(0);
  const [totalales, setTotalSales] = useState(0);
  const [totalSalesSinceLastMonth, settotalSalesSinceLastMonth] = useState(0);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
  const [ongoingBiddingCount, setongoingBiddingCount] = useState(0);
  const [salseOverView, setSalesOverView] = useState(0);
  const [labeles, setLables] = useState([]);
  const [data, setData] = useState([]);
  const [orderOrverview, setOrderOverView] = useState([]);

  var total = 0;
  orderOrverview.forEach((element) => {
    total = total + element.totalAmount;
  });
  async function getAllDetails(id) {
    try {
      const [code1, res1] = await api.order.getOngoingBiddingCount(id);
      setongoingBiddingCount(res1[0].farmer);
      const [code2, res2] = await api.order.getTotalPendingOrdersCount(id);
      setPendingOrdersCount(res2[0].farmer);
      const [code3, res3] = await api.order.getTotalOrdersSinceLastMonth(id);
      settotalOrdersSinceLastMonth(res3[0].farmer);
      const [code4, res4] = await api.order.getTotalSalesSinceLastMonth(id);
      settotalSalesSinceLastMonth(res4[0].totalSales);
      const [code5, res5] = await api.order.getTotalSales(id);
      setTotalSales(res5[0].totalSales);
      const [code6, res6] = await api.order.getTotalOrders(id);
      setTotalOrders(res6[0].farmer);
      const [code7, res7] = await api.order.getSalesOverviwes(id);
      setSalesOverView(res7);
      setLables(
        res7.map((item) => {
          if (item._id.month == 12) {
            return "December";
          } else if (item._id.month == 11) {
            return "November";
          } else if (item._id.month == 10) {
            return "October";
          } else if (item._id.month == 9) {
            return "September";
          } else if (item._id.month == 8) {
            return "August";
          } else if (item._id.month == 7) {
            return "July";
          } else if (item._id.month == 6) {
            return "June";
          } else if (item._id.month == 5) {
            return "May";
          } else if (item._id.month == 4) {
            return "April";
          } else if (item._id.month == 3) {
            return "March";
          } else if (item._id.month == 2) {
            return "February";
          } else if (item._id.month == 1) {
            return "January";
          }
        })
      );
      setData(
        res7.map((item) => {
          return item.totalSales;
        })
      );
      const [code8, res8] = await api.order.getOrderOrverView(user?.id);
      setOrderOverView(
        res8.map((item) => {
          return {
            totalAmount: item.totalAmount,
            productName: item.details[0].productName,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  console.log("pppppp", total);

  useEffect(() => {
    if (!user?.auth ) {
      navigate('/login')
  }if(user?.userRole!='FARMER'){
    navigate('/')
}
    getAllDetails(user?.id);
  }, []);

  return (
    <>
      <title>Dashboard | Material Kit</title>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalSales
                totalSales={totalales}
                salesSinceLastMonth={
                  totalales == 0
                    ? 0
                    : Math.round((totalSalesSinceLastMonth / totalales) * 100)
                }
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalOrders
                totalOrders={totalOrders}
                totalOrdersSinceLastMonth={
                  totalOrders == 0
                    ? 0
                    : Math.round(
                        (totalOrdersSinceLastMonth / totalOrders) * 100
                      )
                }
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <PendingOrders
                pendingOrders={
                  totalOrders == 0
                    ? 0
                    : Math.round((pendingOrdersCount / totalOrders) * 100)
                }
              />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalProfit
                ongoingBiddingCount={ongoingBiddingCount}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales labeles={labeles} data={data} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <OrderOverView
                total={total}
                orderData={orderOrverview}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default SalaseDashBoard;
