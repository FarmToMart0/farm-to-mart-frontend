import React from 'react'
import Navbar from '../../components/navbar/index';
import Payment from '../../components/payment/index'
import Typography from '@mui/material/Typography';
import {  useLocation } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const { transport, payment,product,price,amount } = location.state;
  const data = {transport, payment}
  const details = {product,price,amount}
  
  return (
    <div>
        <Navbar/>
        <Payment data={data} details={details}/>

        <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © Farm2Mart '}
        
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </div>
  )
}

export default PaymentPage