import AddressForm from "./address/index";
import PaymentForm from "./payment/index";
import Review from "./review/index";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

//transport, payment,product,price,amount,unitPrice
export default function Checkout(props) {
	const { transport, payment, product, price, unitPrice } = props.data;
	console.log(transport, payment, product, price, unitPrice);
	const [address, setAddress] = useState([]);
	const [paymentDetails, setPaymentDetails] = useState([]);
	const [buyer_state, setBuyer_state] = useState("NotConfirmed");
	const [finalize, setFinalize] = useState(false);
	console.log(finalize);
	const details = props.details;
	var method = "";

	// set final state
	const setFinalState = (argue) => {
		setFinalize(argue);
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
	} else if (
		payment === "Available" &&
		paymentDetails.length == 0 &&
		buyer_state === "Confirmed"
	) {
		return <PaymentForm paymentSet={paymentSet} />;
	} else {
		if (transport === "Not Available" && payment === "Not Available") {
			details.test = "noAdd";
		} else {
			details.address = { address };
			details.payment = { payment };
			details.test = "yesAdd";
		}

		return (
			<Review
				details={props.details}
				stateSet={stateSet}
				setFinalState={setFinalState}
			/>
		);
	}
}
