import AddressForm from "./address/index";
import PaymentForm from "./payment/index";
import Review from "./review/index";
import Complete from "../order_complete/index";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

//transport, payment,product,price,amount,unitPrice
export default function Checkout(props) {
	const { transport, payment, product, price, unitPrice } = props.data;

	const [address, setAddress] = useState([]);
  
	const [paymentDetails, setPaymentDetails] = useState([]);
	const [buyer_state, setBuyer_state] = useState("NotConfirmed");
	const [finalize, setFinalize] = useState(false);
	const [ratings, setRatings] = useState(0);

	const details = props.details;
	var method = "";

	// set final state
	const setFinalState = (argue) => {
		setFinalize(argue);
	};

	//set ratings
	const setStart = (value) => {
		setRatings(value);
		console.log("ratings" + ratings);
	};

	const stateSet = (state) => {
		setBuyer_state(state);
	};

	const addressSet = (addr) => {
		if (addr === "FARM_PICKUP") {
			setAddress([(method = "FARM_PICKUP")]);
		} else {
			setAddress([...address, addr]);
		}
	};

	const paymentSet = (pay) => {
		if (pay === "CASH_ON_DELIVERY") {
			setPaymentDetails([(method = "CASH_ON_DELIVERY")]);
		} else {
			setPaymentDetails([...paymentDetails, pay]);
		}
	};

	if (transport === "Available" && address.length == 0) {
		return <AddressForm addressSet={addressSet} />;
	} 
  
  else if (
		payment === "Available" &&
		paymentDetails.length == 0 &&
		buyer_state === "Confirmed"
	) {
		return (
			<PaymentForm paymentSet={paymentSet} setFinalState={setFinalState} />
		);


	} else if (buyer_state === "NotConfirmed") {
		if (transport === "Not Available" && payment === "Not Available") {
			details.test = "noAdd";
		} else {
			details.address = { address };
			details.payment = { payment };
			details.test = "yesAdd";
		}

		return <Review details={props.details} stateSet={stateSet} />;
	} 
  
  else if (!finalize) {
		return <Complete setFinalState={setFinalState} setStart={setStart} />;
	}
  
  else if (finalize) {
		console.log({
			transport: transport,
			paymentDetails: paymentDetails,
			product: product,
			price: price,
			unitPrice: unitPrice,
			ratings: ratings,
			address: address,
		});
	}
}
