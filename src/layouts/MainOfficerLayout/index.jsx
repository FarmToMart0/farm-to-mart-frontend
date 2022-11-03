import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MO_SECTIONS } from '../../constants';

import SidePanel from '../../components/SidePanel';

import MainOfficerListItems from './mainOfficerListItem';
import HomeMainOfficer from './../../pages/homeMainOfficer/index';
const drawerWidth = 240;

export default function MainOfficerLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');
  
    if (params.length === 4) {
      
      const subComponent = params[3];
     
    
      switch (subComponent) {
        case MO_SECTIONS.DASHBOARD:
          setOpenPane( );
          break;
        
        case MO_SECTIONS.GSOMANAGE:
         setOpenPane(<HomeMainOfficer/>)
          break;
       
     
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<MainOfficerListItems/>} item2="Categories"  page={openPane}/>
  );
}
