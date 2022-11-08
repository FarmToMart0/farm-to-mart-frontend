import  React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomizedTables from '../TableComponent/index';
import api from '../../api'
import SnackBarComponent from './../Snackbars/index';
export default function TabPane(props) {
    
  const [value, setValue] = React.useState('1');
  const [placedOrderData, setPlacedOrderData] = React.useState([]);
  const [deliveredOrderData, setDeliveredOrderData] = React.useState([]);
  const [rejectedOrderData, setRejectedOrderData] = React.useState([]);
  const [errorMessage, setErrorMessage] = useState({ type: '', message: '' });
  const [errorOccured, setErrorOccured] = useState(false);
  const handleChange = (event, newValue) => {
   
    setValue(newValue);
  };


  const handleClickRecieved =async (id) => {
    try {
      
      const [code,res] = await api.order.markAsPaid(id)
      if (code==201) {
        await getPlacedOrderList('633693db8b0ef806b4a0819e')
        setErrorOccured(true)
        setErrorMessage({type:'success',message:"payment status updated succesfully"})
      }
      
    } catch (error) {
      setErrorOccured(true)
      setErrorMessage({type:'error',message:"error occured while upadating payment status"})
    }
  };
  const handleClickDelivereded = async (id) => {
    try {
      const [code,res] = await api.order.markAsDelivered(id)
      
      if (code==201) {
        await getPlacedOrderList('633693db8b0ef806b4a0819e')
        setErrorOccured(true)
        setErrorMessage({type:'success',message:"Delivery status updated succesfully"})
      }
      
    } catch (error) {
      setErrorOccured(true)
      setErrorMessage({type:'error',message:"error occured while upadating delivery status"})
    }
  };
  const handleClickRejected =async (id) => {
    try {
      const [code,res] = await api.order.markAsRejected(id)
      if (code==201) {
        await getPlacedOrderList('633693db8b0ef806b4a0819e')
        setErrorOccured(true)
        setErrorMessage({type:'success',message:"order rejected succesfully"})
      }
      
    } catch (error) {
      setErrorOccured(true)
      setErrorMessage({type:'error',message:"error occured while rejecting  order"})
    }
  };
  const handleClickUnDoRejected =async (id) => {
    try {
      const [code,res] = await api.order.unDoRejectedOrder(id)
      if (code==201) {
        await getPlacedOrderList('633693db8b0ef806b4a0819e')
        setErrorOccured(true)
        setErrorMessage({type:'success',message:"undo rejected order  succesfully"})
      }
      
    } catch (error) {
      setErrorOccured(true)
      setErrorMessage({type:'error',message:"error occured while undo rejected order"})
    }
  };
  
 async function getPlacedOrderList() {
  try {
    let [code,res]=await api.order.getPlacedOrder('633693db8b0ef806b4a0819e');
    
    if (code ==201) {
      
      setPlacedOrderData(res.map((item)=> {return {id:item._id,date:new Date(item.orderedDate).getFullYear()+'-'+(new Date(item.orderedDate).getMonth()+1)+'-'+new Date(item.orderedDate).getDate(),product:item.product,amount:item.amount, paymentStatus:item.paymentStatus,orderStatus:item.orderStatus,description:item.description,paymementmethod:item.paymementmethod,isFromBiding:item.isFromBiding,farmer:item.farmer,buyer:item.buyer,deliveryMethod:item.deliveryMethod,paymentMethod:item.paymentMethod,totalPrice:item.totalPrice}}))
     
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
        <SnackBarComponent open={errorOccured} message={errorMessage.message} type={errorMessage.type}  setOpen={setErrorOccured}   />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Place Orders" value="1" />
            <Tab label="Delivered Orders" value="2" />
            <Tab label="Rejected" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> <CustomizedTables handleClickRecieved={handleClickRecieved} handleClickDelivereded={handleClickDelivereded} handleClickRejected={handleClickRejected} handleClickUnDoRejected={handleClickUnDoRejected} itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='place') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /> </TabPanel>
        <TabPanel value="2"><CustomizedTables handleClickRecieved={handleClickRecieved} handleClickDelivereded={handleClickDelivereded} handleClickRejected={handleClickRejected} handleClickUnDoRejected={handleClickUnDoRejected} itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='delivered') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
        <TabPanel value="3"><CustomizedTables handleClickRecieved={handleClickRecieved} handleClickDelivereded={handleClickDelivereded} handleClickRejected={handleClickRejected} handleClickUnDoRejected={handleClickUnDoRejected} itemData={placedOrderData.filter((item)=>{if (item.orderStatus=='rejected') {
          return item
        }})}  columns={['Order Date','Product','View','Payment Status','Order Status']} /></TabPanel>
      </TabContext>
    </Box>
  );
}
