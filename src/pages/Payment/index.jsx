import React from 'react'
import Navbar from '../../components/navbar/index';
import Payment from '../../components/payment/index'
import Typography from '@mui/material/Typography';
import {  useLocation } from "react-router-dom";

function PaymentPage() {
  const location = useLocation();
  const allData = location.state;
  // const { transport, payment,product,price,amount,unitPrice } = location.state;
  const transport = allData.transport
  const payment = allData.payment
  const product = allData.product_name
  const price = allData.totValue
  const amount = allData.amount
  const unitPrice = allData.price
  const data = {transport, payment,product,price,amount,unitPrice}
  const details = {product,price,amount,unitPrice}
  
  
  return (
    <div>
        <Navbar/>
        <Payment data={data} details={details} allData={allData}/>
    </div>
  )
}

export default PaymentPage