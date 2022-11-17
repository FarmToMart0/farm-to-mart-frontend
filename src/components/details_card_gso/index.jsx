import  {React, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import GSODetails from '../gsoDetails/index';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function OutlinedCard({gsoDetails}) {

  const [click, setClick] = useState(false);
  return (
    <>
    {!click && <Container component="main" maxWidth="" sx={{background:'rgb(245, 245, 245)',width:'100%',borderRadius:'10px', mb: '5vw', mt:0, boxShadow: 
    'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>    
    <Box sx={{ minWidth: 275 }}>
      <Card variant='basic' sx={{background: 'rgb(245, 245, 245)'}}>
          
        <CardContent>
            <Typography component="h1" variant="h5" color='primary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.8rem'}}>
                {gsoDetails.gsoName}
            </Typography>
            <Typography component="h2" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.5rem'}}>
                {gsoDetails.gsoCode}
            </Typography>
            <Typography component="h3" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.2rem', color: 'black'}}>
                {gsoDetails.firstName}  {gsoDetails.lastName}
            </Typography>
            <Typography component="h3" variant="h5" color='secondary' sx={{mt: 2, fontWeight: 'bold', fontSize: '1.2rem', color: 'black'}}>
                {gsoDetails.nic}  
            </Typography>
        </CardContent>
        <CardActions sx={{float: 'right'}}>
            <div style={{ marginTop: '-5vw'}}>
                <Button size="small" onClick={() => {
                    setClick(true);
                }}>See More</Button>
            </div>
          
        </CardActions>
      
      </Card>
    </Box>

    </Container>}

    {click && <GSODetails gsoDetails={gsoDetails}/> }
    </>

  );
}
