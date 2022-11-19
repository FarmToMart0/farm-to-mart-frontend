import React from 'react'
import Navbar from '../../components/navbar/index';
import Payment from '../../components/payment/index'
import Typography from '@mui/material/Typography';
import {  useLocation } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const { transport, payment,product,price,amount,unitPrice } = location.state;
  const data = {transport, payment,product,price,amount,unitPrice}
  const details = {product,price,amount,unitPrice}
  
  return (
    <div>
        <Navbar/>
        <Payment data={data} details={details}/>
    </div>
  )
}

export default PaymentPage