import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Navbar from "../../components/navbar/index";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Buy_card from "../../components/cards/buy_card/index";
import Bid_card from "../../components/cards/bid_card/index";
import BackI from "../../assets/images/weat.jpg";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchField from "../../components/auto_com_search/index";
import TextFiled from "../../components/text_field/index";
import api from "../../api/modules/buyer";

<style>
	@import
	url('https://fonts.googleapis.com/css2?family=Rokkitt:wght@1200&display=swap');
</style>;

const arrType = [
	{ label: "Vegetables" },
	{ label: "Grains" },
	{ label: "Fruits" },
];
const arrDis = [
	{ label: "Ampara" },
	{ label: "Anuradhapura" },
	{ label: "Badulla" },
	{ label: "Batticaloa" },
	{ label: "Colombo" },
	{ label: "Galle" },
	{ label: "Gampaha" },
	{ label: "Hambantota" },
	{ label: "Jaffna" },
	{ label: "Kalutara" },
	{ label: "Kandy" },
	{ label: "Kegalle" },
	{ label: "Kilinochchi" },
	{ label: "Kurunegala" },
	{ label: "Mannar" },
	{ label: "Matale" },
	{ label: "Matara" },
	{ label: "Monaragala" },
	{ label: "Mullaitivu" },
	{ label: "Nuwara Eliya" },
	{ label: "Polonnaruwa" },
	{ label: "Puttalam" },
	{ label: "Ratnapura" },
	{ label: "Trincomalee" },
	{ label: "Vavuniya" },
];

export default function Market() {
	//buyer's selectons
	const [district, setDistrict] = useState("Matara");
	const [cropType, setCropType] = useState("Vegetables");

	// Set satates according to the buyer's selection
	const handleDistrict = (dis) => {
		setDistrict(dis);
	};

	const handleCropType = (crop) => {
		setCropType(crop);
	};

	// the array containing products
	const [listOfItems, setListOfItems] = useState([]);

	const getMarketData = async () => {
		const [res, code] = await api.getMarketProducts([district,cropType]);
		if (res == 201) {
			setListOfItems(code);
		}

		return res, code;
	};

	

	//use effect for seleect products accrding to the buyer's selection
	useEffect(() => {
		console.log(cropType)
		getMarketData();
	}, [district, cropType]);

	return (
		<div style={{ display: "flex" }}>
			<Navbar />

			<React.Fragment>
				<CssBaseline />
				<Container
					style={{
						backgroundColor: "#E5F6DF",
						borderRadius: "30px",
						marginTop: 75,
						paddingTop: 0,
					}}>
					<Box sx={{ width: "100%", marginTop: 5 }}>
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
							<div style={{ marginRight: 0 }}>
								{/* <h1 style={{float: "right"}}>FarmtoMart</h1> */}
								<div>
									<Stack direction='row' spacing={2}>
										<SearchField
											cropItems={arrDis}
											category='District'
											handleSelection={handleDistrict}
											initiaiState = "Matara"
										/>
										<SearchField
											cropItems={arrType}
											category='Crop Type'
											handleSelection={handleCropType}
											initiaiState ="Vegetables"
										/>
									</Stack>
								</div>
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
									item.type == "buy" ? (
										<Grid item xs={3} key={item.item_id}>
											<Buy_card item={item} />
										</Grid>
									) : (
										<Grid item xs={3} key={index}>
											<Bid_card item={item} />
										</Grid>
									)
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
				</Container>
			</React.Fragment>
		</div>
	);
}
