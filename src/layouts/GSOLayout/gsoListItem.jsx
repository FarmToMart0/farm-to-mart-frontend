import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';

import { GSO_SECTIONS } from '../../constants';

import Tooltip from '@mui/material/Tooltip';



export default function GSOListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/gso/dash/${page}`);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={() => routeToPage(GSO_SECTIONS.DASHBOARD)}>
        <ListItemIcon>
      <Tooltip title="Sales Dashboard">
        <DashboardIcon color="secondary" />
      </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <Divider/>
      

      <ListItemButton onClick={() => routeToPage(GSO_SECTIONS.FARMERDETAILS)}>
        <ListItemIcon>
        <Tooltip title="Crop Details">
        <AssignmentIcon  color="secondary" />
      </Tooltip>          
        </ListItemIcon>
        <ListItemText primary="Crop Details" />
      </ListItemButton>
      <Divider/>
      
      
      

    </React.Fragment>
  );
}