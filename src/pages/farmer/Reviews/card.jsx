import  React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import api from '../../../api'
import { useSelector } from 'react-redux';
export default function ReviewCard() {
   const user = useSelector((state) => state?.user);
   const [revies,setReviews]= useState([]);
   async function getReviewsList(id) {
     try {
      const [code,res] = await api.farmer.getReviews(id);
      if (code ==201) {
        setReviews(res)
       
      }
     } catch (error) {
       console.log(error);
     }
   }
   useEffect(()=>{
getReviewsList(user?.id);
   },[])
  return (
    <div>
      <Box sx={{marginTop:5, minWidth: '95%', paddingRight:'10%', paddingLeft:'5%' }}>
     {revies.map(item=>{
      return (
        
      <Card variant="outlined" sx={{mx:'15px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: yellow}} aria-label="recipe">
            {item.buyer.firstName[0]}
          </Avatar>
        }
        action={
            <Rating name="read-only" value={item.rating} readOnly />
          }
        title={item.buyer.firstName+" "+item.buyer.lastName}
        subheader={new Date(item.commentedDate).getFullYear()+'-'+(parseInt(new Date(item.commentedDate).getMonth())+1) +'-'+new Date(item.commentedDate).getDate()}
      />
      
    <CardContent>
      <Typography sx={{ fontSize: 14, marginLeft:"4%" }}component="div" >
        {item.comment}
      </Typography>
    </CardContent>

        </Card>
    
      )
     })
     }
     </Box>
    </div>
  );
}
