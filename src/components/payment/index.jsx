import AddressForm from "./address/index";
import PaymentForm from "./payment/index";
import Review from "./review/index";
import Complete from "../order_complete/index";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import API from "../../api/modules/order";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//transport, payment,product,price,amount,unitPrice
export default function Checkout(props) {
	let navigate = useNavigate();
	const user = useSelector((state) => state?.user);
	const buyer_id = user?.id;
	const allData = props.allData;
	const { transport, payment, product, price, unitPrice } = props.data;

	const [address, setAddress] = useState([]);
	const [paymentDetails, setPaymentDetails] = useState([]);
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

		allData.address = address;
		allData.rating = ratings;
		allData.buyer = buyer_id;
		allData.paymentDetails = paymentDetails;
		const item_id = allData.item_id
		const remainQuantity = allData.remainAmount - allData.amount
		
		console.log(allData.remainAmount);
		console.log(remainQuantity);
		console.log(item_id);
		
		
		API.placeOrder(allData);
		API.updateProduct({product:item_id,remainQuantity:remainQuantity})
		
		navigate("/buyer/market");
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

	// srart rendaring

	if (transport === "Available" && address.length == 0) {
		return <AddressForm addressSet={addressSet} />;
	} else if (transport === "Not Available" && address.length == 0) {
		setAddress([["Farm pick up"]]);
	} else if (payment === "Available" && paymentDetails.length == 0) {
		return (
			<PaymentForm paymentSet={paymentSet} setFinalState={setFinalState} />
		);
	} else if (payment === "Not Available" && paymentDetails.length == 0) {
		
		setPaymentDetails([["cash on delivery"]]);
	} else {
		return <Complete setFinalState={setFinalState} setStart={setStart} />;
	}
}
