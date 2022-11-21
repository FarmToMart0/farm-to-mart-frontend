import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import NavBar from "../../components/navbar/index";
import CssBaseline from "@mui/material/CssBaseline";
import Buy_card from "../../components/cards/buy_card/index";
import Bid_card from "../../components/cards/bid_card/index";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import SearchField from "../../components/auto_com_search/index";

import api from "../../api/modules/buyer";
import Loader from "../../components/Loader";

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
	const [isBuyerLog, setIsBuyerLog] = useState(false)
	const [isLoading, setIsLoading] = useState(true)

  let navigate = useNavigate();
  const user = useSelector((state) => state?.user);

	// Set satates according to the buyer's selection
	const handleDistrict = (dis) => {
		setDistrict(dis);
	};

	const handleCropType = (crop) => {
		setCropType(crop);
	};

	// the array containing products
	const [listOfItems, setListOfItems] = useState([]);
 
	const newArrayList = listOfItems.filter(elemant=>elemant.remainAmount > 0 )

	

	const getMarketData = async () => {
		const [res, code] = await api.getMarketProducts([district,cropType]);
		if (res == 201) {
			setListOfItems(code);
			setIsLoading(false)
		}
		console.log(code);
		return res, code;
	};

  const navigateOrderReview =() =>{
    navigate("/buyer/orderreview")
  }

	

	//use effect for seleect products accrding to the buyer's selection
	useEffect(() => {
		
    

		getMarketData();
	}, [district, cropType]);

	useEffect(() => {
		getMarketData();
    if (!user?.auth ) {
      navigate('/login')}

    if(user?.userRole ==='BUYER'){
      setIsBuyerLog(true)
    }
		
		
	}, []);

	

	return (
		<div style={{ display: "flex" }}>
		
			{isLoading ? (<Loader/>) :(<><NavBar isLogin={user.auth } userType={user.userRole}/>    

			<React.Fragment>
				<CssBaseline />
				<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%'
				}}>

				<Paper
					elevation={5}
					style={{
						backgroundColor: "#E5F6DF",
						borderRadius: "30px",
						marginTop: 75,
					width:"100%",
						padding: "5%"
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
									width:"100vw",
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
							<div >
								{/* <h1 style={{float: "right"}}>FarmtoMart</h1> */}
								<div>
									<Stack direction='row' spacing={2}>
                 
										<SearchField
											cropItems={arrDis}
											category='District'
											handleSelection={handleDistrict}
											initiaiState = "Matara"
											width = {300}
										/>
										<SearchField
											cropItems={arrType}
											category='Crop Type'
											handleSelection={handleCropType}
											initiaiState ="Vegetables"
											width = {300}
										/>
								{isBuyerLog &&(<Button variant="contained" onClick={navigateOrderReview}>ORDERS</Button>)}	
								</Stack>
								</div>
							</div>
						</Box>

						{/* end of search panel */}

						{newArrayList.length != 0 ? (
							<Grid
								container
								// sx={{ marginTop: 1.5, marginBottom: 6 }}
								rowSpacing={3}
								columns={{ xs: 4, sm: 8, md: 12 }}
								columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
								{newArrayList.map((item, index) =>
									item.type == "buy" ? (
										<Grid item xs={12} sm={4} md={3} key={item.item_id}>
											<Buy_card item={item} />
										</Grid>
									) : (
										<Grid item xs={12} sm={4} md={3} key={index}>
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
				</Paper>
				</Box>
			</React.Fragment></>)}
		</div>
	);
}
