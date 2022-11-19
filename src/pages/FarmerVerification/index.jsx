import React,{useEffect,useState} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import VerifyComponent from '../../components/VerifyComponent';
import NavBar from '../../components/navbar'
import { CssBaseline } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
function FarmerVerification() {
    const user = useSelector((state) => state?.user);
    const location = useLocation();
    const navigate = useNavigate()
    const [token,setToken]=useState();
useEffect(()=>{
    if (user?.auth ) {
        navigate('/')
    }
    const params = location.pathname.split('/');
    setToken(params[2])

},[])
    
    return (
        <><NavBar isLogin={user?.auth} />
        <CssBaseline/>
        <VerifyComponent id={token}/>
        </>
    );
}

export default FarmerVerification;