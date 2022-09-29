import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import SidePanel from '../../components/SidePanel';
import Home from '../../pages/home/index'
import ItemAdd from '../../components/ItemAdd/index'
import ProductManage from '../../pages/farmer/ProductManage/index';
import OrderPage from './../../pages/farmer/Orders/index';
import TabPaneMyCrops from '../../pages/farmer/MyCrops';
import MapComponent from '../../components/MapComponent';

import SalaseDashBoard from '../../pages/farmer/SalesDashBoard';

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
          setOpenPane( <SalaseDashBoard/>);
          break;
        
        case FARMER_SECTIONS.MYCROP:
         setOpenPane(<TabPaneMyCrops/>)
          break;
        
      
        case FARMER_SECTIONS.SALES:
          setOpenPane(<ProductManage/>)
          break;
        case FARMER_SECTIONS.ORDERS:
          setOpenPane(<OrderPage/>)
          break;
        case FARMER_SECTIONS.TRANSACTIONS:
          setOpenPane()
          break;
     
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories"  page={openPane}/>
  );
}
