import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

import PaidIcon from '@mui/icons-material/Paid';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SellIcon from '@mui/icons-material/Sell';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DeleteIcon from '@mui/icons-material/Delete';

import AgricultureIcon from '@mui/icons-material/Agriculture';
// import NotificationIcon from './index';

export default function NotificationIcon() {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const notificationData = {
    "farmer": {
      "notification": [
        "Your Fund has been released",
        "Your transport request is accepted",
        "Your transport request is rejected",
        "Your stock sell successfully",
        "Your stock rejected by the buyer", 
      ],
      "icon":[
        <PaidIcon/>,
        <DirectionsCarIcon/>,
        <CarCrashIcon/>,
        <SellIcon/>,
        <StorefrontIcon/>,

      ]
    },
   
    "stockBuyer": {
      "notification": [
        "Your fund is released",
        "Farmer request are available",
        "You win the bid",
      ],
      "icon":[
        <PaidIcon/>,
        <AgricultureIcon/>,
        <StorefrontIcon/>,

      ],
    },
   
  };

  const [notification, setNotification] = React.useState({
    userType:"farmer", notification:[{alert:1,time:"12:00PM"},
    {alert:2,time:"12:00AM"}]});
  
  React.useEffect(() => {
    if(user.auth){
      const interval = setInterval(() => {
        // axios.get('/api/users/notifications/'+ user.email).then(res => {
        //   setNotification(res.data.data);
        // });
      }, 2000);
  
      return () => clearInterval(interval);
    }
    
  }, []);

  const clearNotification = () => {
    // axios.put('/api/users/notifications/clear/'+ user.email).then(res => {
    //   console.log('notification cleared');
    // });
  };

  return (
    <React.Fragment>
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
        
        {console.log(notificationData)}
        
        {
        notification.notification.map((item, index) => {
          return (
            <MenuItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    {notificationData[notification.userType].icon[item.alert]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={notificationData[notification.userType].notification[item.alert]} secondary={item.time}/>
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
    </React.Fragment>
  );
}
