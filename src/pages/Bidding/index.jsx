import React from "react";
import Navbar from "../../components/navbar/index";
import BiddingCard from "../../components/bid_ui/index";

function Bidding() {
  return (
    <div>
      <Navbar sx={{ my: 50 }} />
      <BiddingCard />
    </div>
  );
}

export default Bidding;
