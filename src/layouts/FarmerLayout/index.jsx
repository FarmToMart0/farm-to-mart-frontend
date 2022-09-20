import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import SidePanel from '../../components/SidePanel';
import Home from '../../pages/home/index'


const drawerWidth = 240;

export default function FarmerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');

    if (params.length === 4) {
      const subComponent = params[3];
      switch (subComponent) {
        case FARMER_SECTIONS.DASHBOARD:
          setOpenPane(<Home/>);
          break;
        case FARMER_SECTIONS.FINDTRANSPORTER:
          
          break;
        case FARMER_SECTIONS.CART:
         
          break;
        case FARMER_SECTIONS.MYCROP:
         
          break;
        case FARMER_SECTIONS.ADDCROP:
         
          break;
        case FARMER_SECTIONS.EDITCROP:
          
          break;
        case FARMER_SECTIONS.DELETECROP:
          
          break;
        case FARMER_SECTIONS.SALES:
        
          break;
        case FARMER_SECTIONS.ORDERS:
         
          break;
        case FARMER_SECTIONS.TRANSACTIONS:
         
          break;
     
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories"  page={openPane}/>
  );
}
