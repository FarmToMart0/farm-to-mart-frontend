import React, { useState } from "react";
import { Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import TabPane from "../../../components/TabPaneOrders";
export default function OrderPage() {
  return (
    <Container>
      <CssBaseline />
      <TabPane />
    </Container>
  );
}
