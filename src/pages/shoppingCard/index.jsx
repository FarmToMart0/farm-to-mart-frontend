import React from 'react'
import NavBar from '../../components/navbar/index'
import Shopping_card from '../../components/shopping_card/index'
import { useSelector } from 'react-redux';

function ShoppingCard() {
  const user = useSelector((state) => state?.user);

  return (
    <div>
        <NavBar isLogin={user.auth } userType={user.userRole}/>    
          <Shopping_card />
    </div>
  )
}

export default ShoppingCard