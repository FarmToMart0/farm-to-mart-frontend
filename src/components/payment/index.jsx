
import AddressForm from "./address/index";
import PaymentForm from "./payment/index";
import Complete from "../order_complete/index";
import React, { useState } from "react";
import API from "../../api/modules/order";
import { useSelector } from "react-redux";
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
	const [ratings, setRatings] = useState(0)
	const [comment, setComment] = useState("");

	const details = props.details;

	var method = "";

	// set final state
	const setFinalState = (argue) => {
		setFinalize(argue);
	};

	//set comment

	const addcomment = (value) => {
		setComment(value);
	};

	//set ratings
	const setStart = async (addr,com) => {
		
		
		
		allData.address = address;
		allData.buyer = buyer_id;
		allData.paymentDetails = paymentDetails;
		const item_id = allData.item_id;
		const remainQuantity = allData.remainAmount - allData.amount;
		const updateData = { product: item_id, remainQuantity: remainQuantity }
		const reviewData = {farmer:allData.farmer,buyer:buyer_id,comment:com,rating:addr}
		
		API.placeOrder(allData);
		API.updateRemainCrop(updateData);
		API.addReviews(reviewData)

		navigate("/buyer/orderreview");
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
		return <Complete setFinalState={setFinalState} setStart={setStart} addcomment={addcomment}/>;
	}
}
