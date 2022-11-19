import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ItemAdd from '../../../components/ItemAdd/index';
import { CssBaseline, Grid, Typography } from '@mui/material';

import ProductList from '../../../components/ProductList';
import api from '../../../api';
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../components/Loader';
function ProductManage(props) {
  const user = useSelector((state) => state?.user);
  const navigate = useNavigate()
  const [manageAddProdct, setManageAddProduct] = useState([false,0,0]);
 const [product,setProduct] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [products, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAllProducts =async (id)=>{
    let temp = await api.farmer.getProduct(id);
    setAllProducts(temp[1]);
    setIsLoading(false);
    
  }
  React.useEffect(() => {
    if (!user?.auth ) {
      navigate('/login')
  }
  if(user?.userRole!='FARMER'){
    navigate('/')
}
      
    
  }, []);

React.useEffect(() => {

  getAllProducts(user?.id);
    
  
}, [manageAddProdct[0]]);
const handleEdit = (e) =>{
  
  setManageAddProduct(e)
  
  setProduct(products.filter(((item)=>{
    if (item._id==e[1]) {
      return item
    }
  })))
}
const handleChangeSearchFilter =(e)=>{
  setSearchedText(e.target.value)
}
const doRemove = async(id)=>{
  let prod = await api.farmer.deleteProduct(id)
  getAllProducts(user?.id);
}
React.useEffect(() => {
  
  if (searchedText !== '') {
    
    const items = products.filter((item) =>
      item?.productName.includes(searchedText)
    );
    setAllProducts(items);
  } else {
    getAllProducts(user?.id);
  }
}, [searchedText]);

// useEffect(()=>{

// },[manageAddProdct])
    return (
       
        <div> 
        <CssBaseline/> 
    <Box  sx={{ml:1,mt:1}} elevation={0}  square >
   {
   !manageAddProdct[0] && <Box  sx={{ '& > :not(style)': { m: 1 } }}>
 
 
 <Button variant="contained" color="success" startIcon={<AddCircleIcon />} onClick={()=>{setManageAddProduct([true,0,0])}}>
  Add Item
</Button>

  </Box>
  
  }
  {
   manageAddProdct[0] && <Box  sx={{ '& > :not(style)': { m: 1 } }}>
 
 
 <Button variant="contained" color="success" startIcon={<ArrowBackIcon />} onClick={()=>{setManageAddProduct([false,0,0])}}>
  Product List
</Button>

  </Box>
  
  }
</Box>

{manageAddProdct[0] && <ItemAdd getProducts={getAllProducts} formShow={manageAddProdct} editProduct={product} edit={manageAddProdct[2]}/>}
{(!manageAddProdct[0] && !isLoading) ? <ProductList  handleRemove={doRemove} handleChangeFilter={handleChangeSearchFilter} dataList={products} openProductAddForm={handleEdit} />:
<Loader/> 
   
}

</div> 
    
    );
}

export default ProductManage;