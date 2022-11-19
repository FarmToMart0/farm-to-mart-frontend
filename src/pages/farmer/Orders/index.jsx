import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container } from "@mui/system";
import { CssBaseline } from "@mui/material";
import TabPane from "../../../components/TabPaneOrders";
import { useNavigate } from 'react-router-dom';

export default function OrderPage() {
  const navigate = useNavigate()
  const user = useSelector((state) => state?.user);
  useEffect(()=>{
    if (!user?.auth ) {
      navigate('/login')
  }if(user?.userRole!='FARMER'){
    navigate('/')
}
  },[])
  return (
    <Container>
      <CssBaseline />
      <TabPane />
    </Container>
  );
}
