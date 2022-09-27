import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function UserProfileIcon(Props) {
  const currentuser = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
       
        <Tooltip title="My Account">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AccountCircleIcon sx={{ width: 36, height: 36 ,color:'#ffffff'}} />
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
        
        <MenuItem onClick={()=>{navigate(`/${currentuser}/profile`);}}>
          <ListItemIcon>
            <AccountCircleIcon color="secondary"/>
          </ListItemIcon>
        <Typography>Profile</Typography>
        </MenuItem>
        <MenuItem onClick={()=>{navigate(`/${currentuser}/category`);}}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="secondary" />
          </ListItemIcon>
        <Typography>{Props.item2}</Typography>
        </MenuItem>
        <MenuItem onClick={()=>{navigate(`/${currentuser}/dash/dashboard`);}}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="secondary" />
          </ListItemIcon>
        <Typography>Dashboard</Typography>
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="secondary" />
          </ListItemIcon>
        <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
