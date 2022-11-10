import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import bg from "../../../assets/images/bg4.jpg";
import Stack from '@mui/material/Stack';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
 

 
export default function BidDetailCard() {
 
  return (
    <Paper
      sx={{
        p: 2,
        margin: '5%',
        maxWidth: '100%',
        flexGrow: 1,
        
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={bg} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom  fontSize='20px' component="div">
                <b>Carrot</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Bids : 15
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Current Bid :<b> LKR 500.00</b>
              </Typography>
              <Stack direction="row" spacing={2}>
       <Typography fontSize='16px' color="text.primary">
              Sumeela Madhusankha
             </Typography>
       <Typography fontSize='13px' color="text.secondary" paddingTop='3px'>
              12 Nov 2022 | 16.00 PM
             </Typography>
        
      </Stack>
              
              
            </Grid>
            
          </Grid>
          <Grid item>
          <Box
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        padding :'10px',
        borderRadius:'10px',
        borderColor: '#b9bab8',
  m: 1,
  border: 1.5,
  justifyContent: 'center',
      }}
    >
        <Typography fontSize='15px' color='black' component="div">
             Ends in:
            </Typography>
            <Typography fontSize='22px' color='black' component="div">
             5 hours 23 mins
             <br/>
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}