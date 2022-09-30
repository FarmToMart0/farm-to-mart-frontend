import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function HeaderAuth({
    title
}) {
    return (
        <>
            <Typography component="h1" variant="h5" color='primary'>
                {title}
            </Typography>
        </>
    )
}
