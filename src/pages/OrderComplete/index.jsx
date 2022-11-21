import * as React from 'react';
import NavBar from '../../components/navbar/index';
import OrderComplete from '../../components/order_complete';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function SuccessComplete(){
    const user = useSelector((state) => state?.user);
    return (
        <div style={{backgroundColor:'#ECECEC',padding:40}}>
            <Stack spacing={2}>
            <NavBar isLogin={user.auth } userType={user.userRole}/>    
            <div >
                <OrderComplete style={{marginTop:50}}></OrderComplete>
            </div>
            
            </Stack>
        </div>
        
        
    )
} 