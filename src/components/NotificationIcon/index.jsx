import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Dialog, DialogTitle, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import StoreIcon from '@mui/icons-material/Store';
import { blue, red, green } from '@mui/material/colors';


export default function NotificationIcon(Props) {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
  
  }, []);

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
        <MenuItem>
        <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Your order is ready!" secondary="10:50 AM"/>
        </ListItem>
        </MenuItem>
        
        <MenuItem>
        <ListItem autoFocus>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="We sent you an email. Check it out!" secondary="10:50 AM"/>
      </ListItem>
      </MenuItem>

      <MenuItem>
       <ListItem autoFocus>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
              <StoreIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Nearby shops are open!" secondary="10:50 AM"/>
        </ListItem>
        </MenuItem>

        <MenuItem>
        <ListItem autoFocus>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: green[100], color: green[600] }}>
              <StoreIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Nearby shops are open!" secondary="10:50 AM"/>
        </ListItem>
        </MenuItem>
        
      </Menu>
    </React.Fragment>
  );
}
