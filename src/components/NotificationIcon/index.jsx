import  React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Dialog, DialogTitle, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import { blue, red, green } from '@mui/material/colors';
import axios from 'axios';
import Button from '@mui/material/Button';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import PaidIcon from '@mui/icons-material/Paid';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import firebaseapp from "../../api/firebase"
import AgricultureIcon from '@mui/icons-material/Agriculture';
import {ref,set,get,child,onValue,push} from "firebase/database"
import { NineteenMp } from '@mui/icons-material';
import api from '../../api'

export default function NotificationIcon() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [newNotofication,setNewNotificaton]=useState([])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  async function pushCropUpdateNotification(nic) {
    try {
     
      let [code,res]=await api.farmer.getOngoingMycrops(nic);
      console.log('user')
      if (code ==201) { 
        const db = firebaseapp.startFirebase()
        res.map( async element  => {
          if (new Date(element.expectingDateOfHarvest).getFullYear()+'-'+(parseInt(new Date(element.expectingDateOfHarvest).getMonth())+1) +'-'+new Date(element.expectingDateOfHarvest).getDate()== new Date(Date.now()).getFullYear()+'-'+(parseInt(new Date(Date.now()).getMonth())+1) +'-'+new Date(Date.now()).getDate() && element.status!='completed' && !element.notified) {
            const notoficationData = {
              message: 'Reminder for update the harvest details.',
              seen:false,
              date: Date.now(),
              
            };
           
            await api.farmer.notify(element?._id)

            // Get a key for a new Post.
            const newKey = push(child(ref(db), 'notification')).key;
              set(ref(db,'notification/'+user?.id+'/'+newKey),
              notoficationData).then(()=>{
                console.log("succussfully added")
              }).catch((error)=>{
              console.log("faield ")
              })    
               }
                  });
                  
                }
              } catch (error) {
                console.log(error)
              } 
  }


  const getNotification =async ()=>{
    const db = firebaseapp.startFirebase()
    
    try {
      const dbref = ref(db, 'notification/'+user?.id);
     await onValue(dbref, (snapshot) => {
        const data = snapshot.val();
       
        var arr=[]
        for (let key in data) {
          let value = data[key];
          if (!value.seen) {
            value['id']=key;
            arr.push(value)
          }
          
        }
        console.log('message',arr);
        setNewNotificaton(arr);
      });
    } catch (error) {
      console.log(error);
      
    }
    
  }


  
  React.useEffect(() => {
    getNotification();
  
    if(user?.userRole=='FARMER'){
      pushCropUpdateNotification(user?.nic);
    }
    
  }, []);

  const clearNotification = () => {
 
  
    // Get a key for a new Post.
    const db = firebaseapp.startFirebase()
    
  
      set(ref(db,'notification/'+user?.id),
      null).then(()=>{
        console.log("succussfully added")
      }).catch((error)=>{
       console.log("faield ")
      }) 
  };

  return (
    <React.Fragment>
       <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={newNotofication.length} color="secondary">
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
       <Tooltip title="Notifications">
         <IconButton
           onClick={handleClick}
           size="small"
           sx={{ ml: 2 }}
           aria-controls={open ? 'account-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
         >
           <NotificationsIcon sx={{ width: 34, height: 34 ,color:'#ffffff'}} />
         </IconButton>
       </Tooltip>
     </Box>

     
     <Menu
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       PaperProps={{
         elevation: 0,
         sx: {
           overflow: 'visible',
           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           mt: 1.5,
           '& .MuiAvatar-root': {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 1,
           },
           '&:before': {
             content: '""',
             display: 'block',
             position: 'absolute',
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: 'background.paper',
             transform: 'translateY(-50%) rotate(45deg)',
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
     >
        <DialogTitle>Notifications</DialogTitle>
        <Divider/>
       

       
       {
       newNotofication.map((item, index) => {
         return (
           <MenuItem>
             <ListItem  sx={{maxHeight: 200, overflow: 'auto'}}>
               <ListItemAvatar>
                 <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <NotificationAddIcon/>
                 </Avatar>
               </ListItemAvatar>
               <ListItemText primary={item.message} secondary={new Date(item.date).toUTCString()}/>
             </ListItem>
           </MenuItem>
         );
       })}
     
     <MenuItem>
     <Typography align='center'>
   <Button onClick={clearNotification} variant="contained" startIcon={<DeleteIcon />}>
         Read all notifications
     </Button> 
 </Typography>
     
     </MenuItem>
       
     </Menu>
          </Badge>
        </IconButton>

     
    </React.Fragment>
  );
}
