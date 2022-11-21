import * as React from 'react';
import Joi from "joi-browser";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import  TextField  from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../api';
import SnackBarComponent from '../Snackbars';
import Alert from '@mui/material/Alert';


export default function Home({userDetails, gsoDetails}) {
    // console.log(gsoDetails, "gso")
    const [isEdit, setIsEdit] = useState(false);
    const [errorOccured, setErrorOccured] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [updatedGSO, setupdatedGSO] = useState({
        _id: userDetails._id,
        firstName: gsoDetails.firstName,
        lastName: gsoDetails.lastName,
        mobile: gsoDetails.mobile
    })

    const schema = {
        _id: Joi.string().required(),
        firstName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
        lastName: Joi.string().regex(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/, 'name').required(),
        mobile: Joi.string().length(10).regex(/^[0-9]+$/, 'given').required(),
    }

    const handleSave = (event) => {
        const { name, value } = event.target;
        let errorData = { ...errors };
        const errorMessage = validateProperty(event);
        if (errorMessage) {
        errorData[name] = errorMessage;
        } else {
        delete errorData[name];
        }
        let UGsoData = { ...updatedGSO };
        UGsoData[name] = value;
        setupdatedGSO(UGsoData);
        setErrors(errorData);
      };

    const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    };

    
    const handleUpdate = async (event) => {
        event.preventDefault();
        console.log(updatedGSO)
        const result = Joi.validate(updatedGSO,
            schema, { abortEarly: false });
          const { error } = result;
          if (!error) {
            console.log("Submitted");
            await updateGso(updatedGSO);
          } else {
            const errorData = {};
            for (let item of error.details) {
              const name = item.path[0];
              const message = item.message;
              errorData[name] = message;
            }
            setErrors(errorData);
            console.log(errorData);
            return errorData;
          }
    }; 

    async function updateGso(values) {
        try {
          const [code,res] = await api.gso.updateGso(values);
          if (code === 201) {     
            navigate('/main-officer/success-update-gso');
          } else {
            setErrors({ type: 'error', message: res });
            setErrorOccured(true);
          }
          setIsLoading(false);
        } catch (error) {
          setErrors({ type: 'error', message:'server error' });
          setErrorOccured(true);
          setIsLoading(false);
        }
      }
    const handleRemove = async (e) => {
        
        try{
            console.log(gsoDetails)
            const [code,res] = await api.gso.removeGso(gsoDetails)
            console.log(code, res, "code, res")
            if (code === 201) {     
                navigate('/main-officer/success-remove-gso');
            } else {
                setErrors({ type: 'error', message: res });
                setErrorOccured(true);
            }

        }catch(error){
            setErrors({ type: 'error', message:'server error' });
            setErrorOccured(true);
        }
    };
    


    const editHandler = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div>
            <Container component="main" width="" sx={{background:'white', boxShadow: 
            '0px 0px 0px 5px rgba( 255,255,255,0.4 ), 0px 4px 20px rgba( 0,0,0,0.33 )', borderRadius:'10px', mb: '5vw', mt:0, width: '100%', padding: '2vw', paddingTop: 0}}>
                <CssBaseline />
                <SnackBarComponent open={errorOccured} message={errors.message} type='error'  setOpen={setErrorOccured}   />
                <Box sx={{
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'Left',
                    }}>
                        <Typography component="h1" variant="h5" color='primary' sx={{mt: 2, fontWeight: 'bold', fontSize: '2rem'}}>
                            {gsoDetails.gsdName}
                        </Typography>
                        <Typography component="h2" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.8rem'}}>
                            {gsoDetails.gsdCode}
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
                            <Button variant="outlined" onClick={handleRemove} sx={{margin: 0, fontWeight: 'bold', fontSize: '1rem', color: 'red', float: 'right', width: '25%'}}>
                            Remove Officer  <hr/> <DeleteIcon/> </Button>
                        </div>

                        

                        <Box component="form" noValidate sx={{ mt: 3, mb: 3}}>
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
                                name='firstName'
                                value= {updatedGSO.firstName}
                                onChange={handleSave}

                                // InputProps={{
                                //     classes:{
                                //       root: classes.inputRoot,
                                //       disabled: classes.disabled
                                //     }
                                //   }}

                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />

                            {errors.firstName && (
                            <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Name</Alert>)}
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
                                name='lastName'
                                value= {updatedGSO.lastName}
                                onChange={handleSave}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />

                                {errors.lastName && (
                                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Name</Alert>)}
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
                                name='mobile'
                                value={updatedGSO.mobile}
                                onChange={handleSave}
                                // variant = "standard"
                                sx={{color: 'red', width:'100%'}}
                                />
                                {errors.mobile && (
                                <Alert sx={{mt: '1vw', mb: '1vw'}} severity="error">Invalid Mobile Number</Alert>)}
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
                                defaultValue={gsoDetails.gsdName}
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
                                defaultValue={gsoDetails.gsdCode}
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
                                disabled = {true}
                                id="outlined-disabled"
                                label=""
                                defaultValue={userDetails.email}
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
                                disabled = {true}
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
                        onClick = {handleUpdate}
                        >
                        Update Details
                        </Button>

                        </Box>
                </Box>


            </Container>
        </div>
    );
}




