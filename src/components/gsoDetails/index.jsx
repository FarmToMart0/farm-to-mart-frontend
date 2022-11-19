import * as React from 'react';
import { useState,useEffect } from 'react';
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/material/styles";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function Home({gsoDetails}) {

    const handleSubmit = (event) => {
        event.preventDefault();
      };



    // const gsoDetails = 
    //     {
    //         first_name : 'Amaya',
    //         last_name : 'Adikari',
    //         mobile : '0786785672',
    //         district: 'Mannar',
    //         gso : 'Mannar 2',
    //         gso_code : '456',
    //         email : 'mpiyumichaan@gmail.com',
    //         nic : '988460223V'
    
    //     }

    const [isEdit, setIsEdit] = useState(false);

    const editHandler = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div>
            <Container component="main" Width="" sx={{background:'white', boxShadow: 
            '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )', borderRadius:'10px', mb: '5vw', mt:0, width: '100%', padding: '2vw', paddingTop: 0}}>
                <CssBaseline />
                <Box sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'Left',
                    }}>
                        <Typography component="h1" variant="h5" color='primary' sx={{mt: 2, fontWeight: 'bold', fontSize: '2rem'}}>
                            {gsoDetails.gsoName}
                        </Typography>
                        <Typography component="h2" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.8rem'}}>
                            {gsoDetails.gsoCode}
                        </Typography>

                        <div style={
                            {float: 'right', marginTop: '-5vw'}
                        }>
                            <Button variant="outlined" onClick={editHandler} sx={{margin: 0, fontWeight: 'bold', fontSize: '1rem', color: 'primary', float: 'right', width: '25%'}}>
                            Edit Details  <hr/> <EditIcon/> </Button>
                        </div>

                        <div style={
                            {float: 'right', marginTop: '1vw'}
                        }>
                            <Button variant="outlined" sx={{margin: 0, fontWeight: 'bold', fontSize: '1rem', color: 'red', float: 'right', width: '25%'}}>
                            Remove Officer  <hr/> <DeleteIcon/> </Button>
                        </div>

                        

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 3}}>
                        <Grid container spacing = {2} >
                        <Grid item xs={12} md={6}>
                            <div style={{marginTop: "2vw"}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    First Name
                                </InputLabel>

                                <TextField
                                disabled = {!isEdit}
                                id="outlined-disabled"
                                label=""
                                
                                defaultValue= {gsoDetails.firstName}

                                // InputProps={{
                                //     classes:{
                                //       root: classes.inputRoot,
                                //       disabled: classes.disabled
                                //     }
                                //   }}

                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <div style={{marginTop: "2vw"}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    Last Name
                                </InputLabel>

                                <TextField
                                disabled = {!isEdit}
                                id="outlined-disabled"
                                label=""
                                defaultValue={gsoDetails.lastName}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    Mobile Number
                                </InputLabel>

                                <TextField
                                disabled = {!isEdit}
                                id="outlined-disabled"
                                label=""
                                type="tel"
                                defaultValue={gsoDetails.mobile}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    District
                                </InputLabel>

                                <TextField
                                disabled = {true}
                                id="outlined-disabled"
                                label=""
                                defaultValue={gsoDetails.district}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={7}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    Govijana Seva Devision
                                </InputLabel>

                                <TextField
                                disabled = {true}
                                id="outlined-disabled"
                                label=""
                                defaultValue={gsoDetails.gsoName}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    Govijana Seva Devision Code
                                </InputLabel>

                                <TextField
                                disabled = {true}
                                id="outlined-disabled"
                                label=""
                                defaultValue={gsoDetails.gsoCode}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    Email Address
                                </InputLabel>

                                <TextField
                                disabled = {!isEdit}
                                id="outlined-disabled"
                                label=""
                                defaultValue={gsoDetails.email}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div style={{marginTop: ""}}>
                                <InputLabel shrink htmlFor="" sx={{fontSize: '1.5rem', padding: '2px', fontWeight: 'bold'}}>
                                    National Identity Card Number
                                </InputLabel>

                                <TextField
                                disabled = {!isEdit}
                                id="outlined-disabled"
                                label=""
                                defaultValue= {gsoDetails.nic}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%', fontWeight: 'bold'}}
                                />
                            </div>
                        </Grid>
                        </Grid>

                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, height: '2.5rem'}}
                        disabled={!isEdit}
                        >
                        Update Details
                        </Button>

                        </Box>
                </Box>


            </Container>
        </div>
    );
}




