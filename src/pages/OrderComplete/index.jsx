import * as React from 'react';
import Navbar from '../../components/navbar/index';
import OrderComplete from '../../components/order_complete';
import Stack from '@mui/material/Stack';

export default function SuccessComplete(){
    return (
        <div style={{backgroundColor:'#ECECEC',padding:40}}>
            <Stack spacing={2}>
            <Navbar />
            <div >
                <OrderComplete style={{marginTop:50}}></OrderComplete>
            </div>
            
            </Stack>
        </div>
        
        
    )
} 