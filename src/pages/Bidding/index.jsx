import React from "react";
import NavBar from "../../components/navbar/index";
import BiddingCard from "../../components/bid_ui/index";
import { useSelector } from 'react-redux';

function Bidding() {
  const user = useSelector((state) => state?.user);
  return (
    <div>
      <NavBar isLogin={user.auth } userType={user.userRole}/>  
      <BiddingCard />
    </div>
  );
}

export default Bidding;
