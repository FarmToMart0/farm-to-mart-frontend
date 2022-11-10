import  React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/images/logo.png'
import user from '../../api/modules/user';
import { logOutRequest } from '../../reducers/modules/user';




const pages = ['HOME', 'ABOUT'];
const settings = ['Profile', , 'Logout'];

const ResponsiveAppBar = ({isLogin}) => {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box>
             <img src = {logo} style={{width:60}}/>
          </Box>
          </Typography>
          
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/')
                  }}>
                  <Typography  textAlign="center">HOME</Typography>
                </MenuItem>
                <MenuItem  onClick={()=>{
                  handleCloseNavMenu()
                  navigate('/buyer/market')
                  }}>
                  <Typography  textAlign="center">MARKET PLACE</Typography>
                </MenuItem>
         
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
             <img src = {logo}  style={{width:60}}/>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FARM TO MART
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

              <Button
               
                onClick={()=>{
                  navigate('/')
                  handleCloseNavMenu()}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                HOME
              </Button>
              <Button
               
                onClick={()=>{
                  navigate('/buyer/market')
                  handleCloseNavMenu()}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                MARKET PLACE
              </Button>
          </Box>

   { isLogin &&  <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.firstName} src="#" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                setting=='Logout'?
                (<MenuItem key={setting} onClick={()=>{
                  handleCloseUserMenu()
                  console.log('logout');
                  dispatch(logOutRequest());
                  localStorage.clear();
                  navigate('/login')
                  }}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>)
                :
                (<MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>)
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
