import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { FARMER_SECTIONS } from '../../constants';
import FarmerListItems from './farmerListItem';
import SidePanel from '../../components/SidePanel';
import ProductManage from '../../pages/farmer/ProductManage/index';
import OrderPage from './../../pages/farmer/Orders/index';
import TabPaneMyCrops from '../../pages/farmer/MyCrops';
import SalaseDashBoard from '../../pages/farmer/SalesDashBoard';
import MyRequets from '../../pages/farmer/myRequests';
import ReviewCard from '../../pages/farmer/Reviews/card';
import DataCenter from '../../pages/farmer/Datacenter';


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
          case FARMER_SECTIONS.FDASHBOARD:
          setOpenPane( <DataCenter/>);
          break;        
        case FARMER_SECTIONS.MYCROP:
         setOpenPane(<TabPaneMyCrops/>)
          break;
        case FARMER_SECTIONS.SALES:
          setOpenPane(<ProductManage/>)
          break;
          case FARMER_SECTIONS.BID:
          setOpenPane(<MyRequets/>)
          break;
        case FARMER_SECTIONS.ORDERS:
          setOpenPane(<OrderPage/>)
          break;
        case FARMER_SECTIONS.REVIEWS:
          setOpenPane(<ReviewCard/>)
          break;
     
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<FarmerListItems/>} item2="Categories"  page={openPane}/>
  );
}
