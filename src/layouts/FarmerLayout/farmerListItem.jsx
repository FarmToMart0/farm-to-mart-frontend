import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { useNavigate } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import StoreIcon from '@mui/icons-material/Store';
import RateReview from '@mui/icons-material/RateReview';
import ViewListIcon from '@mui/icons-material/ViewList';
import Tooltip from '@mui/material/Tooltip';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SellIcon from '@mui/icons-material/Sell';

export default function FarmerListItems() {
  const navigate = useNavigate();

  function routeToPage(page) {
    navigate(`/farmer/dash/${page}`);
  }
  return (
    
      <><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.DASHBOARD)}>
      <ListItemIcon>
        <Tooltip title="Market Dashboard">
          <StoreIcon color="primary" />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary="Market Dashboard" />
    </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.FDASHBOARD)}>
        <ListItemIcon>
          <Tooltip title="Crop Dashboard">
            <DashboardIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Crop Dashboard" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.MYCROP)}>
        <ListItemIcon>
          <Tooltip title="Crop Updates">
            <AssignmentIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Crop Updates" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.SALES)}>
        <ListItemIcon>
          <Tooltip title="Market Manage"><AddBusinessIcon color="primary" /></Tooltip>
        </ListItemIcon>
        <ListItemText primary="Market Manage" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.ORDERS)}>
        <ListItemIcon>
          <Tooltip title="Orders">
            <ViewListIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton><Divider /><ListItemButton onClick={() => routeToPage(FARMER_SECTIONS.BID)}>
        <ListItemIcon>
          <Tooltip title="Bidding">
            <SellIcon color="primary" />
          </Tooltip>
        </ListItemIcon>
        <ListItemText primary="Bidding" />
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