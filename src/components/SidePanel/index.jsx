import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
// import appimage from '../../assets/images/appimg.jpg'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { Button } from '@mui/material';
// import LoginPage from '../../pages/LoginPage';
import UserProfileIcon from '../UserProfileIcon';
import logo from '../../Assets/images/logo.png';


import {Stack } from '@mui/material';
import { FARMER_SECTIONS } from '../../constants';

import NotificationIcon from '../NotificationIcon';



const drawerWidth = 240;





const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export default function SidePanel(Props) {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
 
  const location = useLocation();

  

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar
       
          sx={{
            pr: '24px', // keep right padding when drawer closed
          }}
        >
           {/* <img src={appimage} sx={{height:20}} /> */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon color="inherit" />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
          <Toolbar sx={{ width: '100%', maxWidth: 1470, mx: 'auto' }}>
            <img src={logo} style={{ width: 60 }} sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/#')}/>
          <Typography
          fontFamily={"'Lilita One', cursive"}
       
          color="#fdb61d"
          
          variant="h5"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            FarmToMart
          </Typography>
          <Box sx={{ flexGrow: 1}} />
          <Stack spacing={3} direction="row">
            {/* <Button color="inherit" onClick={() => navigate('/#')}> */}
            <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="secondary">
          <NotificationIcon/>
            {/* <NotificationsIcon /> */}
          </Badge>
        </IconButton>
            {/* </Button> */}
           
            
            <UserProfileIcon item2={Props.item2}/>
          </Stack>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
        </Toolbar>
          </Typography>
          
        </Toolbar>
      </AppBar>
        
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon color="secondary" />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" >
        {Props.list}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
      {Props.page}
      </Box>
    </Box>
  );
}