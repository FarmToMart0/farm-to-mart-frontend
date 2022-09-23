import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomizedTables from './../TableComponent/index';



export default function TabPane(props) {
    
  const [value, setValue] = React.useState('1');
  const [orderData, setOrderData] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(()=>{
    setOrderData([{id:'1',date:'2022-09-13',product:'Beans',amount:1200, paymentStatus:'notPaid',orderStatus:'pending'},{id:'2',date:'2022-09-13',product:'Beans',amount:1200, paymentStatus:'paid',orderStatus:'delivered'},{id:'3',date:'2022-09-13',product:'Beans',amount:1200, paymentStatus:'paid',orderStatus:'delivered'},{id:'4',date:'2022-09-13',product:'Beans', paymentStatus:'notPaid',orderStatus:'rejected'},{id:'5',date:'2022-09-13',product:'Beans',amount:1200, paymentStatus:'notPaid',orderStatus:'pending'}])
},[])

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
       
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Place Orders" value="1" />
            <Tab label="Delivered Orders" value="2" />
            <Tab label="Rejected" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> <CustomizedTables itemData={orderData.filter((item)=>{return item.orderStatus=='pending'})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /> </TabPanel>
        <TabPanel value="2"><CustomizedTables itemData={orderData.filter((item)=>{return item.orderStatus=='delivered'})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
        <TabPanel value="3"><CustomizedTables itemData={orderData.filter((item)=>{return item.orderStatus=='rejected'})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
      </TabContext>
    </Box>
  );
}
