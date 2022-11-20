import { Typography } from "@mui/material";
import React,{useEffect,useState} from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/index";
import { CssBaseline, Stack,Chip} from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/images/bg4.jpg"
import FormDialog from "../../components/DialogComponent";

import { useSelector } from 'react-redux';



export default function HomePage(props) {
 const user = useSelector((state) => state?.user);
 
 const [openDialog,setOpenDialog]=useState(false);
 const navigate = useNavigate();


 useEffect(()=>{
  
 },[])

const handleFarmer =()=>{
  navigate('/farmer/signup')
  handleClose()
}
const handleFarmerSection =()=>{
  navigate('/farmer/dash/dashboard')
}

const handleBuyerSection =()=>{
  navigate('/buyer/market')
}

const handleSignIn =()=>{
  navigate('/login')
}
const handleBuyer =()=>{
  navigate('/buyer/signup')
  handleClose()
}
const handleClose =()=>{
setOpenDialog(false)
}
const handeleOpen =()=>{
setOpenDialog(true)
}

  return(
    <React.Fragment>
      <FormDialog openDialog={openDialog} handleClose={handleClose}>
      <Stack marginTop={4} direction="row" spacing={1}>
      <Chip label="AS FARMER" variant="outlined" onClick={handleFarmer} />
      <Chip label="AS BUYER" variant="outlined" onClick={handleBuyer} />
    </Stack>
      </FormDialog >
            <NavBar isLogin={user.auth } userType={user.userRole}/>     
      <CssBaseline />
    
      <div style={{ maxWidth: 'auto',   minHeight:660, backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor:'#f5f9fb', 
  }}>
    {/* backgroundSize:'150vh', backgroundPosition:'right', */}
  <div style={{ width:'700px',   minHeight:660,   background: 'rgba(255, 255, 255, 0.6)', paddingLeft:100, paddingTop:170,
  }} >
    
            <div style={{ paddingTop:18, paddingLeft:5,
  }}>
            <Typography  variant="h2" sx={{
              fontWeight:600,
              display: { xs: 'flex', md: 'flex' },
              fontSize: {xs: '46px', md: '68px'},
              fontFamily: "'Poppins', sans-serif",
              
              color: "#075E54",
               
              
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px",alignContent:"center", }}>
            FarmToMart 
            </Typography>
            </div>
      <Typography variant="h3" sx={{
              fontWeight:500,
              display: { xs: 'flex', md: 'flex' },
              fontSize: {xs: '32px', md: '43px'},
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54",
               
              
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px",alignContent:"center", }} > Agriculture Market Place<br/> & Data center <br/> 
            </Typography>
            
            
            <div>
            {!user?.auth && <><Button
              color="secondary"
              variant="contained"

              sx={{ width: 200, padding: 1, marginTop: 7, fontSize: 20, marginRight: 4 }}
              onClick={handeleOpen}
            >
              <b> Sign Up</b>
            </Button><Button
              color="secondary"
              variant="contained"

              sx={{ width: 200, padding: 1, marginTop: 7, fontSize: 20, backgroundColor: "#128C7E" }}
              onClick={handleSignIn}
            >
                <b> LOGIN</b>
              </Button></>}
              {
                (user?.auth && user?.userRole=='FARMER') && <>
                <Button
                color="secondary"
                variant="contained"
  
                sx={{ width: 200, padding: 1, marginTop: 7, fontSize: 20, backgroundColor: "#128C7E" }}
                onClick={handleFarmerSection}
              >
                  <b> FARMER SECTION</b>
                </Button>
                </>


                
              }

              {
                (user?.auth && user?.userRole=='BUYER') && <>
                <Button
                color="secondary"
                variant="contained"
  
                sx={{ width: 200, padding: 1, marginTop: 7, fontSize: 20, backgroundColor: "#128C7E" }}
                onClick={handleBuyerSection}
              >
                  <b> Visit Market</b>
                </Button>
                </>


                
              }
            </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );


}