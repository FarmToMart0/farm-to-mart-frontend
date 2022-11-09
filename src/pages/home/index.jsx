import { Typography } from "@mui/material";
import React,{useEffect,useState} from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/navbar/index";
import { CssBaseline, Stack,Chip} from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import background from "../../assets/images/bg4.jpg"
import FormDialog from "../../components/DialogComponent";
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';



export default function HomePage(props) {
 const user = useSelector((state) => state?.user);
 const [isLoading,setIsLoading]=useState(false);
 const [openDialog,setOpenDialog]=useState(false);
 const navigate = useNavigate();
const handle =()=>{

}
const handleFarmer =()=>{
  navigate('/farmer/signup')
  handleClose()
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
            <NavBar isLogin={user.auth}/>     
      <CssBaseline />
    
      <div style={{ maxWidth: 'auto',   minHeight:660, backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundColor:'#f5f9fb', 
  }}>
    {/* backgroundSize:'150vh', backgroundPosition:'right', */}
  <div style={{ width:'50%',   minHeight:660,   background: 'rgba(255, 255, 255, 0.6)', paddingLeft:100, paddingTop:170,
  }} >
    <div style={{ paddingTop:18, paddingLeft:5,
  }}>
            <Typography  sx={{
              
              
              display: { xs: 'flex', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#074C0E", 
              fontSize: {xs: '24px', md: '22px'},
              fontWeight: {xs: 600, md: 500}
              
            }} >
              
            </Typography>
            </div>
            <div style={{ paddingTop:18, paddingLeft:5,
  }}>
            <Typography  variant="h2" sx={{
              fontWeight:600,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              
              color: "#075E54",
               
              
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px",alignContent:"center", }}>
            FarmToMart 
            </Typography>
            </div>
      <Typography variant="h3" sx={{
              fontWeight:500,
              display: { xs: 'none', md: 'flex' },
              fontFamily: "'Poppins', sans-serif",
              color: "#075E54",
               
              
              
            // color: "primary", 
           
              
            }}style={{ lineHeight: "70px",alignContent:"center", }} > Agriculture Market Place<br/> & Data center <br/> 
            </Typography>
            
            
            <div>
            <Button
              color="secondary"
              variant="contained"
              
              sx={{ width: 250, padding: 1, marginTop: 7 ,fontSize: 20, marginRight:4}}
              onClick={handeleOpen}
            >
             <b> Sign Up</b> 
            </Button>
            <Button
              color="secondary"
              variant="contained"
              
              sx={{ width: 200, padding: 1, marginTop: 7 ,fontSize: 20, backgroundColor: "#128C7E"}}
              onClick={handleSignIn}
            >
             <b> LOGIN</b> 
            </Button>
            </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );


}