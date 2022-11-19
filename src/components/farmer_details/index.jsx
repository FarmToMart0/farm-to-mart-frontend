import * as React from 'react';
import { useState,useEffect } from 'react';
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/material/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CropForm from '../addCropData/index';
import api from  '../../api'

export default function Home({userDetails, farmerDetails}) {
    const [click, setClick] = useState(false);
    

    // const farmerDetails = 
    //     {
    //         first_name : 'Piyumi Chan',
    //         last_name : 'Mahaarachchi',
    //         address : 'Pawani, Meda Mawatha, Ella Road, Kurundugaha, Elpitiya',
    //         mobile : '0765867087',
    //         district: 'Galle',
    //         gso : 'Elpitiya',
    //         gso_code : 'E-009',
    //         email : 'mpiyumichaan@gmail.com',
    //         nic : '988460222V',
    //         crop_details: [{crop_id: 1, crop_type: 'Paddy', crop_name: 'Samba', crop_area: '10', start_date: '2022-10-12', estimated_harvest: '1000', harvest: '900', estimated_time: '3 months', harvest_date: '2022-12-12'},
    //         {crop_id: 2, crop_type: 'Paddy', crop_name: 'Kekule', crop_area: '10', start_date: '2022-10-12', estimated_harvest: '1000', harvest: '900', estimated_time: '3 months', harvest_date: '2022-12-12'}]
    
    //     }
    
        const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleRemove = async (e) => {
        console.log({farmerDetails})
        try{
            await api.gso.removeFarmer({farmerDetails})

        }catch(error){
            console.log(error);
        }
    };


    return (
        <div>
            {!click && <Container  component="main" width="" sx={{
                                                            background:'#ffffff4d', 
                                                            borderLeft: "1px solid #ffffff4d",
                                                            borderTop: "1px solid #ffffff4d",
                                                            backdropFilter: 'blur(10px)',
                                                            // boxShadow: '20px 20px 40px -6px rgb(0 0 0 / 20%)',
                                                            boxShadow: 
                                                                        '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )',
                                                            borderRadius:'10px', mb: '5vw', mt:0, width: '100%', padding: '2vw', paddingTop: 0}}>
                <CssBaseline />
                <Box sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'Left',
                    }}>

                        <div style={
                            {float: 'right', marginTop: '2vw'}
                        }>
                            <Button variant="outlined" sx={{margin: 0, fontWeight: 'bold', fontSize: '1rem', color: 'red', float: 'right', width: '25%'}} onClick={handleRemove}>
                            Remove Farmer <hr/> <DeleteIcon/> </Button>
                        </div>

                        <Typography component="h1" variant="h5" color='primary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center'}}>
                            {farmerDetails.firstName} {farmerDetails.lastnName}
                        </Typography>
                        <Typography component="h2" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.3rem', textAlign: 'center'}}>
                            {farmerDetails.gsoName} {farmerDetails.gsoCode}
                        </Typography>

                        <Grid container spacing={2} sx={{mt: '1.5vw'}}>
                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Full Name
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.firstName} {farmerDetails.lastnName}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Address
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.address}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Mobile Number
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.phone}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                District
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.district}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Govijana Seva Devision
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.gsdName}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Govijana Seva Devision Code
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.gsdCode}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                Email
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {userDetails.email}
                            </Grid>

                            <Grid item xs={12} md={4} sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>
                                National Identity Card
                            </Grid>
                            <Grid item xs={12} md={8} sx={{fontSize: '1.2rem'}}>
                                : {farmerDetails.nic}
                            </Grid>
                            </Grid>
                            
                            <div style={
                            {float: 'right', marginTop:'1vw'}
                            }>
                                <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 0, height: '2.5rem', width:'25%', float: 'right'}}
                            onClick={() => {
                                setClick(true);
                            }}
                            >
                            Add New Crop data
                            </Button>
                            </div>
                            

                            {/* <List
                            sx={{ width: '100%', bgcolor: 'background.paper', mt: '2vw' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader">
                                    <Typography component="h2" variant="h5" color='primary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.4rem', textAlign: 'left'}}>
                                        Crop Details
                                    </Typography>
                                </ListSubheader>
                            }>
                            
                            {farmerDetails['crop_details'].map((crop) => {
                                    return (
                                        <><ListItem button key={crop.crop_id} onClick={handleClick}>
                                            <ListItemIcon>
                                                <ArrowForwardIcon sx={{fontSize: '1rem', color: '#25D366'}}/>
                                            </ListItemIcon>
                                            
                                                <ListItemText sx={{ color: 'black'}} primary={ <Typography sx={{color: 'black', fontWeight: 'bold', fontSize: '1.2rem'}}> {crop['crop_name']} - Start Date of Growing {crop['start_date']} </Typography>} />
                                                {open ? <ExpandLess /> : <ExpandMore />}
                                            
                                            
                                           
                                        </ListItem><Collapse key ={crop.crop_id} in={open} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>

                                                <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Crop Type</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8}>
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['crop_type']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Crop Name</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['crop_name']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Growing Area</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['crop_area']} acres</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Start Date of Growing</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['start_date']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Estimated Harvest</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['estimated_harvest']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Final Harvest</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['harvest']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Estimated Time Period to Harvest</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['estimated_time']} months</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    <ListItem button key={crop.crop_id} sx={{ pl: 4 }}>
                                                        <Grid container spacing={2}>
                                                            <Grid item xs={12} md={4}>
                                                            <ListItemText  primary={<Typography sx={{color: 'black', fontWeight: '', fontSize: '1rem'}}>Final Harvest Date</Typography>} />
                                                            </Grid>
                                                            <Grid item xs={12} md={8} >
                                                            <ListItemText primary={<Typography sx={{color: 'black', fontSize: '1rem'}}>: {crop['harvest_date']}</Typography>} />
                                                            </Grid>
                                                        </Grid>
                                                    </ListItem>

                                                    

                                                    
                                                </List>
                                            </Collapse>
                                            </>
                                    )
                                })}

                            </List> */}
                        
                </Box>


            </Container>}
            {click && <CropForm farmersNic ={farmerDetails.nic} /> }
        </div>
        
    );
}




