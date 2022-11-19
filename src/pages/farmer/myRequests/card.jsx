import  React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import api from '../../../api'
import firebaseapp from "../../../api/firebase"
import {ref,set,get,child,onValue,push} from "firebase/database"
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';
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
  const user = useSelector((state) => state?.user);
  const [isLoading,setIsLoading]= useState(true);
 const [biddindDetails,setBiddingDetails]= useState([])
 const [bids,setBids]=useState([])
 const navigate = useNavigate()
 

async function getBidding(id) {
  try {
    const [code,res] = await api.farmer.getOngoingBidding(id)
    if (code == 201) {
       setBiddingDetails(res.map(item=>{
        return {id:item._id,productName: item.productName,winner:'',currentBid:'',date:'', endDate:item.biddingEndin,img:item.images[0]}
      }))
      setIsLoading(false);

     
      
    }
  } catch (error) {
    console.log(error);
  }
}

const getStartedBidding =async ()=>{
  const db = firebaseapp.startFirebase()
  
  try {
    const dbref = ref(db, 'BidOrders/'+user?.id);
    
   await onValue(dbref, (snapshot) => {
    
      const data = snapshot.val();
      
        setBids(data);
      
    });
    
  } catch (error) {
    console.log(error);
    
  }
  
}
useEffect(()=>{
  if (!user?.auth ){
    navigate('/login')
}
if(user?.userRole!='FARMER'){
  navigate('/')
}

  getBidding(user?.id)
  getStartedBidding()
  
},[])

  return (
   <div>
    {isLoading ? <Loader/>:
     <Paper
     sx={{
       p: 2,
       margin: '5%',
       maxWidth: '100%',
       flexGrow: 1,
       
     }}
   >
     {biddindDetails.map(item=>{
       var arr={}
       for (let key in bids) {
         let value = bids[key];
         
         
           
           if (item.id==key) {
             value.iswin=true
             arr=value
           }
           
         
       }


       return <div>
         <Grid container spacing={2}>
       <Grid item md={4}  xs={12} sm container>
         <ButtonBase sx={{ width: '100%', height: '80%' }}>
           <Img alt="complex" src={item.img} />
         </ButtonBase>
       </Grid>
       <Grid item xs={12} sm container>
         <Grid item xs container direction="column" spacing={2}>
           <Grid item xs>
             <Typography gutterBottom  fontSize='20px' component="div">
               <b>{item.productName}</b>
             </Typography>
             
     { Object.keys(arr).length != 0 ?      <><Typography variant="subtitle1" gutterBottom>
     <b>{ new Date(item.endDate) > Date.now() ?  "Current Bid :":"Winning Bid"}</b><b> LKR {arr.bidPrice}</b>
                 </Typography><Stack direction="row" spacing={2}>
                     <Typography fontSize='16px' color="text.primary">
                     <b>{ new Date(item.endDate) > Date.now() ?  "Current Winner :":"Final Winner "}</b>  <b>{arr?.buyerName}</b>
                     </Typography>


                   </Stack><Stack direction="row" spacing={2}>
                     <Typography fontSize='16px' color="text.primary">
                       Mobile No: {arr?.phone}
                     </Typography>


                   </Stack><Stack direction="row" spacing={2}>
                     <Typography fontSize='16px' color="text.primary">
                       Address: {arr?.address}
                     </Typography>


                   </Stack><Stack direction="row" spacing={2}>
                     <Typography fontSize='13px' color="text.secondary" paddingTop='3px'>
                       Bid Date :{(new Date(arr?.timeStamp)).getDate() +
                         "/" + ((new Date(arr?.timeStamp)).getMonth() + 1) +
                         "/" + (new Date(arr?.timeStamp)).getFullYear() +
                         " | " + (new Date(arr?.timeStamp)).getHours() +
                         ":" + (new Date(arr?.timeStamp)).getMinutes() +
                         ":" + (new Date(arr?.timeStamp)).getSeconds()}
                     </Typography>


                   </Stack></>:<Stack direction="row" spacing={2}>
                     <Typography fontSize='16px' color="text.primary">
                       None bid yet
                     </Typography>


                   </Stack>}

             
             
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
   </Paper>}
   </div>
  );
}