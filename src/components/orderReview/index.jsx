import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Navbar from "../navbar/index";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Buy_card from "../cards/buy_card/index";
import Bid_card from "../cards/bid_card/index";
import BackI from "../../assets/images/weat.jpg";
import OrderViewCard from "../orderViewCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchField from "../auto_com_search/index";
import TextFiled from "../text_field/index";
import api from "../../api/modules/buyer";

function orderReview() {
	const listOfItems = ["ko","igy","oh"]
	return (
		<React.Fragment>
			<CssBaseline />
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
				}}>
				<Paper
					elevation={5}
					style={{
						backgroundColor: "#E5F6DF",
						borderRadius: "30px",
						marginTop: 75,

						padding: 40,
						// boxShadow: "rgba(0, 0, 0, 0.12) 5px 6px 8px, rgba(0, 0, 0, 0.24) 5px 6px 7px"
					}}>
					<Box sx={{ width: "100%" }}>
						{/* SEARCH PANEL */}

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								justifyItems: "Center",
								"& > :not(style)": {
									m: 1,
									width: 500,
									height: 128,
									paddingTop: 3,
								},
							}}>
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
							
						</Box>

						{/* end of search panel */}

						{listOfItems.length != 0 ? (
							<Grid
								container
								sx={{ marginTop: 1.5, marginBottom: 6 }}
								rowSpacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{listOfItems.map((item, index) =>
									
										<Grid item xs={3} key={item}>
											<OrderViewCard item={item} />
										</Grid>
									
								)}
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
										No Available Items
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

export default orderReview;
