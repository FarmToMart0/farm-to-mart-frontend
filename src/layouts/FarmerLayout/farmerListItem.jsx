import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import ChatIcon from '@mui/icons-material/Chat';
import RateReview from '@mui/icons-material/RateReview';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ViewListIcon from '@mui/icons-material/ViewList';
import Tooltip from '@mui/material/Tooltip';


export default function FarmerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/farmer/dash/${page}`);
  }
  return (
    
      <><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.DASHBOARD)}>
      <ListItemIcon>
        <Tooltip title="Dashboard">
          <DashboardIcon color="primary" />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.FDASHBOARD)}>
        <ListItemIcon>
          <Tooltip title="Sales Dashboard">
            <DashboardIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.MYCROP)}>
        <ListItemIcon>
          <Tooltip title="My Crops">
            <AssignmentIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="My Crops" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.SALES)}>
        <ListItemIcon>
          <Tooltip title="Sales"><ReceiptIcon color="primary" /></Tooltip>
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <Tooltip title="Orders">
            <ViewListIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.BID)}>
        <ListItemIcon>
          <Tooltip title="My Requests">
            <ChatIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="My Requests" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.REVIEWS)}>
        <ListItemIcon>
          <Tooltip title="Reviews">
            <RateReview color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Reviews" />
      </ListItemButton><Divider /></>
      

  
  );
}