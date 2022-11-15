import AddressForm from './address/index';
import PaymentForm from './payment/index';
import Review from './review/index';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';


  export default function Checkout(props){
    const {transport,payment} = props.data;
    const [address,setAddress] = useState([])
    const [paymentDetails,setPaymentDetails] = useState([])
    const[buyer_state,setBuyer_state] = useState("NotConfirmed")
    var method =""
    const details = props.details
   
    const stateSet =(state) =>{
      
      setBuyer_state(state)
    }

    const addressSet = (addr) =>{
      
      if(addr === "FARM_PICKUP"){
        setAddress([method="FARM_PICKUP"])
      }else{
        setAddress([...address,addr])
      }
    }

    
    const paymentSet = (pay) =>{
      
      if(pay === "CASH_ON_DELIVERY"){
        setPaymentDetails([method="CASH_ON_DELIVERY"])
        
      }else{
        setPaymentDetails([...paymentDetails,pay])
      }
    }

    
useEffect(()=>{
      console.log(buyer_state === "Confirmed")
    },[buyer_state])
   
    if(transport === "Available" && address.length == 0 ){
      
        return <AddressForm addressSet = {addressSet}/>

    }
    else if(payment==="Available" && paymentDetails.length == 0 && buyer_state === "Confirmed"){
      
      return <PaymentForm paymentSet = {paymentSet}/>

    }
    
    else{
      
      details.address = {address}
      details.payment = {payment}
      return <Review details = {props.details} stateSet={stateSet}/>

    }
   


  }