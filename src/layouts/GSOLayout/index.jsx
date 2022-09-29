import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { GSO_SECTIONS } from '../../constants';
import GSOListItems from './gsoListItem';
import SidePanel from '../../components/SidePanel';
import GSOHome from '../../pages/gsoHome';





const drawerWidth = 240;

export default function GSOLayout() {
  
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [openPane, setOpenPane] = React.useState();
  const location = useLocation();

  React.useEffect(() => {
    const params = location.pathname.split('/');
  
    if (params.length === 4) {
      
      const subComponent = params[3];
     
    
      switch (subComponent) {
        case GSO_SECTIONS.DASHBOARD:
          setOpenPane( );
          break;
        
        case GSO_SECTIONS.FARMERDETAILS:
         setOpenPane(<GSOHome/>)
          break;
       
     
        default:
          
      }
    }
  }, [location]);

 

  return (
    <SidePanel list={<GSOListItems/>} item2="Categories"  page={openPane}/>
  );
}
