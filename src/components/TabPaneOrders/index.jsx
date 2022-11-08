import  React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomizedTables from '../TableComponent/index';
import api from '../../api'
export default function TabPane(props) {
    
  const [value, setValue] = React.useState('1');
  const [placedOrderData, setPlacedOrderData] = React.useState([]);
  const [deliveredOrderData, setDeliveredOrderData] = React.useState([]);
  const [rejectedOrderData, setRejectedOrderData] = React.useState([]);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
 async function getPlacedOrderList() {
  try {
    let [code,res]=await api.order.getPlacedOrder('633693db8b0ef806b4a0819e');
    
    if (code ==201) {
      
      setPlacedOrderData(res.map((item)=> {return {id:item._id,date:new Date(item.orderedDate).getFullYear()+'-'+(new Date(item.orderedDate).getMonth()+1)+'-'+new Date(item.orderedDate).getDate(),product:item.product,amount:item.amount, paymentStatus:item.paymentStatus,orderStatus:item.orderStatus,description:item.description,paymementmethod:item.paymementmethod,isFromBiding:item.isFromBiding,farmer:item.farmer,buyer:item.buyer,deliveryMethod:item.deliveryMethod,totalPrice:item.totalPrice}}))
     
    }
  } catch (error) {
    console.log(error)
  } 
 }
 async function getDeliveredOrderList() {
  try {
    let [code,res]=await api.order.getPlacedOrder('633693db8b0ef806b4a0819e');
    
    if (code ==201) {
      setDeliveredOrderData(res.map((item)=> {return {id:item._id,date:item.orderedDate,product:item.product,amount:item.amount, paymentStatus:item.paymentStatus,orderStatus:item.orderStatus,description:item.description,paymementmethod:item.paymementmethod,isFromBiding:item.isFromBiding,farmer:item.farmer,buyer:item.buyer,deliveryMethod:item.deliveryMethod,totalPrice:item.totalPrice}}))
     
    }
  } catch (error) {
    console.log(error)
  } 
 }
 async function getRejectedOrderList() {
  try {
    let [code,res]=await api.order.getPlacedOrder('633693db8b0ef806b4a0819e');
    
    if (code ==201) {
      setRejectedOrderData(res.map((item)=> {return {id:item._id,date:new Date(item.orderedDate).getFullYear()+'-'+new Date(item.orderedDate).getMonth()+1+'-'+new Date(item.orderedDate).getDate(),product:item.product,amount:item.amount, paymentStatus:item.paymentStatus,orderStatus:item.orderStatus,description:item.description,paymementmethod:item.paymementmethod,isFromBiding:item.isFromBiding,farmer:item.farmer,buyer:item.buyer,deliveryMethod:item.deliveryMethod,totalPrice:item.totalPrice}}))
     
    }
  } catch (error) {
    console.log(error)
  } 
 }
useEffect(()=>{
  getPlacedOrderList()
  getDeliveredOrderList()
  getRejectedOrderList();
    
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
        <TabPanel value="1"> <CustomizedTables itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='place') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /> </TabPanel>
        <TabPanel value="2"><CustomizedTables itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='delivered') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
        <TabPanel value="3"><CustomizedTables itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='rejected') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
      </TabContext>
    </Box>
  );
}
