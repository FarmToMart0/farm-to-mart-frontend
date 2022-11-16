import * as React from "react";
import { useState,useEffect } from "react";
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
import firebaseapp from "../../api/firebase"
import {ref,get,child} from "firebase/database"


export default function SimplePaper() {
	const navigate = useNavigate();
	const location = useLocation();

  const db = firebaseapp.startFirebase()
  const { item_id, base_price } = location.state;
  const buyer_id = "poi890"
	const [your_bid, setYour_bid] = useState(0);
	const [temp_your_bid, setTemp_your_bid] = useState(0);
	const [current_bid, setCurrent_bid] = useState(0);
  const [bidWon,setBidWon] = useState(true)
  useEffect(()=>{
    getBid()
  },[])





	const placeBid = (e) => {
		e.preventDefault();
		
		if (temp_your_bid >= current_bid) {
			
			if (temp_your_bid >= base_price) {
				const response = api.setBidding({
					bid_item: item_id,
					currnt_bid: temp_your_bid,
					buyer_id: buyer_id,
				});
        setCurrent_bid(temp_your_bid)
        setTemp_your_bid(0)
        getBid(item_id)
			} else {
				alert("your bidding price must higher than initial Bidding price");
			}
		} else {
			alert("your bidding price must higher than current Bidding price");
		}
    
	};

  const getBid =()=>{
    const dbRef = ref(db)
    const bid_item = item_id
    get(child(dbRef,'bidding/'+bid_item)).onSnapshot((snapshot)=>{
      if(snapshot.exists()){
        const currnt_bid = snapshot.val().currnt_bid
        const player_id = snapshot.val().buyer_id;
        setCurrent_bid(currnt_bid)
        
        if(player_id === buyer_id){
          setBidWon(false)
        }else{
          setBidWon(true)
        }
      }else{
        console.log("No data")
      }
    })
  }

  const getBidStatus =()=>{
    if (current_bid == 0){
      return "Bid has not started yet!"
    } else if (bidWon){
      return " You are not the winner"
    }else{
      return " You are the winner"
    }
  }

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
					padding:  10 ,
				},
			}}
			style={{
				display: "flex",
				paddingTop: 30,
				paddingBottom: 0,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Paper elevation={3}>
				<Stack
					direction='row'
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Stack sx={{ mx: 5 }}>
						<p style={{ fontSize: 30, fontWeight: "bold" }}>
							Current Bid Value
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
								{current_bid} LKR
							</p>
							variant='outlined'
						/>
					</Stack>

					<Stack sx={{ mx: 5, alignItems:"center" }}>
						<p style={{ fontSize: 30, fontWeight: "bold" }}>Your Current Status</p>
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
						<Chip
							sx={{ p: 3, py: 4 }}
							label=<p
								style={{
									fontSize: 40,
									fontWeight: "bold",
									margin: 0,
									color: "#4BB543",
								}}>
								12:34:54
							</p>
							variant='outlined'
						/>
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
											setTemp_your_bid(e.target.value);
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
									<Button
										variant='contained'
										color='success'
										sx={{ my: 3 }}
										onClick={placeBid}>
										Place Bid
									</Button>
								</Stack>
							</Stack>
						</Paper>
					</Box>
					<Button
						variant='contained'
						sx={{ width: "10%" }}
						startIcon={<ArrowCircleLeftIcon />}
						onClick={() => {
							navigate("/buyer/market");
						}}>
						Market
					</Button>
				</Stack>

				{/* end of bidding card */}
			</Paper>
		</Box>
	);
}
