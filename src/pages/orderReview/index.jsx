import React from 'react'
import NavBar from '../../components/navbar/index'
import OrderView from '../../components/orderReview/index'
import { useSelector } from 'react-redux';

function OrderReview() {
  const user = useSelector((state) => state?.user);
  return (
    <div>
        <NavBar isLogin={user.auth } userType={user.userRole}/>    
        <OrderView/>
    
    </div>
  )
}

export default OrderReview