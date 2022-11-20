import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import OrderViewCard from "../orderViewCard";
import { Stack } from '@mui/system';
import API from "../../api/modules/order";
import { useSelector, useDispatch } from 'react-redux';
import buyer from "../../api/modules/buyer";

function OrderReview() {
	const user = useSelector((state) => state?.user);
	const [listOfOrder, setListOfOrder] =  useState([])
	const buyer_id = user?.id
	const newArrayList = listOfOrder.filter(elemant=>elemant.idReceived == false )
	// const buyer_id = "633693db8b0ef806b4a0819e"
	
	const getOrders = async () => {
		const [res, code] = await API.getOrderByBuyer(buyer_id);
		
			
			setListOfOrder(code);
		

	};
	

	useEffect(() => {
		getOrders()
	  
	}, [])

	
	
	
	return (
		<React.Fragment>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					marginTop:5
					
				}}>
				<Paper
					elevation={5}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						justifyItems: "Center",
						backgroundColor: "#E5F6DF",
						borderRadius: "30px",
						marginTop: 75,
						width: "80%",
						padding: 40,
						// boxShadow: "rgba(0, 0, 0, 0.12) 5px 6px 8px, rgba(0, 0, 0, 0.24) 5px 6px 7px"
					}}>
					<Box sx={{ width: "100%" }}>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								justifyItems: "Center",
								"& > :not(style)": {
									m: 1,
									width: "100%",
									height: 128,
									paddingTop: 3,
								},
							}}>
							<Stack direction = "row" spacing={"50%"}>
							<div style={{ marginLeft: "auto" }}>
								{/* <h1 style={{float: "right"}}>FarmtoMart</h1> */}
								<p
									style={{
										fontSize: 50,
										margin: 0,
										fontFamily: "Rokkitt, serif",
										color: "#006400",
									}}>
									{" "}
									Farm
									<span
										style={{
											fontWeight: "bold",
											fontStyle: "italic",
											color: "#002800",
										}}>
										2
									</span>
									Mart{" "}
								</p>
							</div>

							<div>
								<p style={{fontSize: 40,
										margin: 0,
										fontFamily: "Rokkitt, serif",
										color: "#006400",}}> <b>Order Summery</b></p>
							</div>
							</Stack>
							
						</Box>

            {/* end of search panel */}

						{newArrayList.length != 0 ? (
							<Grid
								container
								sx={{ marginTop: 1.5, marginBottom: 6 }}
								rowSpacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{newArrayList.map((item, index) => (
									<Grid item xs={3} key={index}>
										<OrderViewCard item={item} />
									</Grid>
								))}
							</Grid>
						) : (
							<React.Fragment>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",

										width: "100%",
									}}>
									<h1
										style={{
											margin: 80,
										}}>
										No Orders
									</h1>
								</div>
							</React.Fragment>
						)}
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	);
}

export default OrderReview;
