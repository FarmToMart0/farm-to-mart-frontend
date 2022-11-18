import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextF from "../../components/text_field/index";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import api from "../../api/modules/buyer";
import firebaseapp from "../../api/firebase";
import { ref, get, child, set, onValue } from "firebase/database";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { async } from "@firebase/util";
import SendIcon from "@mui/icons-material/Send";
import CoundDown from "../Timer/index";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function SimplePaper() {
	const navigate = useNavigate();
	const location = useLocation();

	const db = firebaseapp.startFirebase();
	const { item_id, base_price } = location.state;
	
//poi890
	const buyer_id = "poi890";
	const buyer_name = "NuwanJay";
	const timePasses = true

	const [bidLeaderId, setBidLeaderId] = useState("")
	const [your_bid, setYour_bid] = useState(0);
	const [checkBid, setCheckBid] = useState(false);
	const [bidLead, setBidLead] = useState(false);
	const [current_bid, setCurrent_bid] = useState(0);

	//notification details
	const [message, setMessage] = useState("")
	const [msgType, setMsgType] = useState("") //"success", error"

	useEffect(() => {
		getBidData();
	}, []);

	//display Notification
	const displayNotification = (message,type)=>{
		setMessage(message)
		setMsgType(type)
		handleClick();

	}

	//function for getting bid values

	const getBidData = async () => {
		const starCountRef = ref(db, "BidOrders/" + item_id);
		onValue(starCountRef, (snapshot) => {
			if (snapshot.exists()) {
				setCurrent_bid(snapshot.val().bidPrice);
				setBidLeaderId(snapshot.val().buyerId)
			}
		});
	};

	//function for writing data to the real time database
	const writeBidData = (BuyerId, ProductId, BuyerName, BidPrice) => {
		if (bidAbility()){
			const date = new Date()
			set(ref(db, "BidOrders/" + ProductId), {
				buyerId: BuyerId,
				buyerName: BuyerName,
				bidPrice: BidPrice,
				timeStamp:date.toString()
			}).then(
				displayNotification("Your bid successfully placed","success")
			);
		}else{
			setYour_bid(0)
		}

		
	};

	//function for checking bid condition
	const bidAbility = () => {
		if (your_bid > current_bid ) {
			if(your_bid > base_price){
				
				return true
			}else{
				displayNotification("Your bid value must greater than initial bid value", "error")
				return false
			}
			
		}else{
			displayNotification("your bid value must greater than current bid value","error")
			return false
		}
	};

	// function for place bid button
	const placeBid = (e) => {
		e.preventDefault();
		console.log(your_bid);
		//writeBidData = (BuyerId, ProductId, BuyerName, BidPrice)
		writeBidData(buyer_id,item_id,buyer_name,your_bid);
		
		
	};

	//function for get bid value
	const getBid = () => {};

	const getBidStatus = () => {
		if (current_bid == 0) {
			return "Bid has not started yet!";
		} else if (bidLeaderId === buyer_id) {
			return " You are  the Bid Leader";
		} else {
			return " You are not the Bid Leader";
		}
		return "I have "
	};

	// Notification things
	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};
	//======================

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				"& > :not(style)": {
					m: 1,
					width: "100%",
					height: "100%",
					backgroundColor: "#FAFAFA",
					padding: 10,
				},
			}}
			style={{
				display: "flex",
				paddingTop: 30,
				paddingBottom: 0,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Paper elevation={3} s>
				<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity={msgType}
						sx={{ width: "100%" }}>
						{message}
					</Alert>
				</Snackbar>
				<Stack
					direction='row'
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Stack sx={{ mx: 5 }}>
						<p style={{ fontSize: 30, fontWeight: "bold" }}>
							Current Bid Value (LKR)
						</p>
						<Chip
							sx={{ px: 3, py: 4 }}
							label=<p
								style={{
									fontSize: 40,
									fontWeight: "bold",
									margin: 0,
									color: "#4BB543",
								}}>
								{current_bid} 
							</p>
							variant='outlined'
						/>
					</Stack>

					<Stack sx={{ mx: 5, alignItems: "center" }}>
						<p style={{ fontSize: 30, fontWeight: "bold" }}>
							Your Current Status
						</p>
						<Chip
							sx={{ p: 3, py: 4 }}
							label=<p
								style={{
									fontSize: 30,
									fontWeight: "bold",
									margin: 0,
									color: "#4BB543",
								}}>
								{getBidStatus()}
							</p>
							variant='outlined'
						/>
					</Stack>

					<Stack sx={{ mx: 5 }}>
						<p style={{ fontSize: 30, fontWeight: "bold" }}>Remaining Time</p>
						<Chip sx={{ p: 3, py: 4 }} label=<CoundDown /> variant='outlined' />
					</Stack>
				</Stack>
				{/* start of bidding card */}
				<Stack>
					<Box
						sx={{
							display: "flex",
							flexWrap: "wrap",
							"& > :not(style)": {
								my: 8,
								width: "30%",
								height: "100%",
								backgroundColor: "",
								borderRadius: "20px",
								py: 10,
							},
						}}
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Paper
							elevation={3}
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								boxShadow: "rgba(0, 0, 0, 0.2) 0px 5px 15px",
							}}>
							<Stack
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}>
								<h1 style={{ margin: 2 }}> Place a Bid</h1>
								<p style={{ margin: 3 }}>
									{" "}
									Initial Bid Value :{base_price} LKR
								</p>
								{/* <TextF title={"Bidding Amount"}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}/> */}

								{/* =================Text Field =================== */}

								<Box
									component='form'
									sx={{
										"& > :not(style)": { m: 1, width: "100%" },
									}}
									noValidate
									autoComplete='off'>
									<TextField
										id='standard-basic'
										label='Amount of Bid'
										variant='standard'
										type='number'
										onChange={(e) => {
											setYour_bid(e.target.value);
										}}
									/>
								</Box>

								{/* ============= End Text Field ================= */}
								<Stack
									direction='row'
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}>
									{bidLead ? (
										<h1>Bid is Over</h1>
									) : (
										<Button
											variant='contained'
											color='success'
											sx={{ my: 3 }}
											onClick={placeBid}>
											Place Bid
										</Button>
									)}
								</Stack>
							</Stack>
						</Paper>
					</Box>
					<Stack direction='row'>
						<Button
							variant='contained'
							sx={{ width: "10%" }}
							startIcon={<ArrowCircleLeftIcon />}
							onClick={() => {
								navigate("/buyer/market");
							}}>
							Market
						</Button>
						{bidLead && (
							<Button
								variant='contained'
								sx={{ width: "10%", ml: 57.5 }}
								endIcon={<SendIcon />}
								onClick={() => {}}>
								<span style={{ fontSize: 18 }}>Buy</span>
							</Button>
						)}
					</Stack>
				</Stack>

				{/* end of bidding card */}
			</Paper>
		</Box>
	);
}
