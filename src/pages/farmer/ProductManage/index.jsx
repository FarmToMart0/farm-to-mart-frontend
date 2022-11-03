import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ItemAdd from '../../../components/ItemAdd/index';
import { CssBaseline } from '@mui/material';
import ProductList from '../../../components/ProductList';
import api from '../../../api'


function ProductManage(props) {
  const [manageAddProdct, setManageAddProduct] = useState([false,0,0]);
 const [product,setProduct] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [products, setAllProducts] = useState([]);
  const getAllProducts =async ()=>{
    let temp = await api.farmer.getProduct();
    setAllProducts(temp[1]);
    
  }


React.useEffect(() => {
  getAllProducts();
    
  
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
  getAllProducts();
}
React.useEffect(() => {
  
  if (searchedText !== '') {
    
    const items = products.filter((item) =>
      item?.productName.includes(searchedText)
    );
    setAllProducts(items);
  } else {
    getAllProducts();
  }
}, [searchedText]);

// useEffect(()=>{

// },[manageAddProdct])
    return (
       <div> 
        <CssBaseline/> 
    <Box  sx={{m:5}} elevation={24}  square >
   {manageAddProdct[2]==0 && <Box  sx={{ '& > :not(style)': { m: 1 } }}>
 
  <Fab variant="extended" size="medium" color="secondary" aria-label="add" onClick={()=>{setManageAddProduct([true,0,0])}}>
    <NavigationIcon sx={{ mr: 1 }} />
    Add Item
  </Fab>
  </Box>}
</Box>

{manageAddProdct[0] && <ItemAdd getProducts={getAllProducts} formShow={manageAddProdct} editProduct={product} edit={manageAddProdct[2]}/>}
{!manageAddProdct[0] && <ProductList  handleRemove={doRemove} handleChangeFilter={handleChangeSearchFilter} dataList={products} openProductAddForm={handleEdit} />}
</div> 
    );
}

export default ProductManage;