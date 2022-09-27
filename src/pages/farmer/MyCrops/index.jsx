import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomizedTables from '../../../components/TableComponent';
import MyCropTable from './Table/index';


export default function TabPaneMyCrops(props) {
    
  const [value, setValue] = React.useState('1');
  const [orderData, setOrderData] = React.useState([]);

  const handleClickEdit=(id)=>{
   
 var temp =orderData.filter((item)=>{
  if(item.id==id) return item 
 })
 temp[0].isEdit=true;
 var arr= orderData.filter((item)=>{
  if(item.id!=id) return item 
 })
arr.splice(id-1, 0, temp[0]);

setOrderData(arr);
 }
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(()=>{
    setOrderData([{id:'1',isEdit:false,startedDate:'2022-09-13',expectedDate:'2022-09-13',cropType:'Carrot',landArea:'10 ha' , location:'Kotapola', harvestedAmount:'1000Kg',harvestedDate:'2022-12-23'},{id:'2',isEdit:false,startedDate:'2022-09-13',expectedDate:'2022-09-13',cropType:'Long Beans',landArea:'10 ha' , location:'Kotapola', harvestedAmount:'1000Kg',harvestedDate:'2022-12-23'},{id:'3',isEdit:false,startedDate:'2022-09-13',expectedDate:'2022-09-13',cropType:'Laddy fingers',landArea:'10 ha' , location:'Kotapola', harvestedAmount:'1000Kg',harvestedDate:'2022-12-23'},{id:'4',isEdit:false,startedDate:'2022-09-13',expectedDate:'2022-09-13',cropType:'Beans',landArea:'10 ha' , location:'Kotapola', harvestedAmount:'1000Kg',harvestedDate:'2022-12-23'}])
},[])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
       
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="On going Growing" value="1" />
            <Tab label="Completed Tasks" value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1"> <MyCropTable  tab={true} columns={['Crop Type','Started date of Growing','Expected date for haversted','Viwe Details','Update harvest']} rows={orderData}/> </TabPanel>
        <TabPanel value="2"> <MyCropTable handleClickEdit={handleClickEdit} tab={false} columns={['Crop Type','Harvested Date','Harvested Amount','Viwe Details','Edit']} rows={orderData}/> </TabPanel>
        
      </TabContext>
    </Box>
  );
  }
