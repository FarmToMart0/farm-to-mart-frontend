import  React,{useState,useEffect} from 'react';
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
import Timer from './../../../components/Timer/index';



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
 const [biddindDetails,setBiddingDetails]= useState([{productName: 'Carrot',biddingCount:15,winner:'Sumeela Madusankha',currentBid:'50000',date:'12 Nov 2022 | 16.00 PM', endDate:'11/21/2022'},{productName: 'Beans',biddingCount:10,winner:'Jagath Madusankha',currentBid:'80000',date:'15 Nov 2022 | 12.08 PM',endDate:'11/18/2022'}])



  return (
    <Paper
      sx={{
        p: 2,
        margin: '5%',
        maxWidth: '100%',
        flexGrow: 1,
        
      }}
    >
      {biddindDetails.map(item=>{
        return <div>
          <Grid container spacing={2}>
        <Grid item md={4}  xs={12} sm container>
          <ButtonBase sx={{ width: '100%', height: '80%' }}>
            <Img alt="complex" src={bg} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom  fontSize='20px' component="div">
                <b>{item.productName}</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Bids : {item.biddingCount}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Current Bid :<b> LKR {item.biddingCount}</b>
              </Typography>
              <Stack direction="row" spacing={2}>
       <Typography fontSize='16px' color="text.primary">
              {item.winner}
             </Typography>
       <Typography fontSize='13px' color="text.secondary" paddingTop='3px'>
              {item.date}
             </Typography>
        
      </Stack>
              
              
            </Grid>
            
          </Grid>
          <Grid item  >
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
             <Timer date={item.endDate}/>
             <br/>
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
        </div>
      })}
    </Paper>
  );
}