import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import NavigationIcon from '@mui/icons-material/Navigation';
import ItemAdd from '../../../components/ItemAdd/index';
import { CssBaseline } from '@mui/material';
import ProductList from '../../../components/ProductList';
function ProductManage(props) {
  const [manageAddProdct, setManageAddProduct] = useState([false,0]);
  const [searchedText, setSearchedText] = useState('');
  const [products, setAllProducts] = useState([]);
  var row =[{
    name:'Paddy',
    lastModified:'2022-09-23',
    status:'Sold out',
    data: [
      {
        description: 'testing',
        unitPrice: '11091700',
        initialBid: 3,
        totalQuantity:456,
        remainingQuantity:67
      },
      
    ],
  },
  {
    name:'beans',
    lastModified:'2022-09-23',
   
    data: [
      {
        description: 'testing',
        unitPrice: '11091700',
        initialBid: 3,
        totalQuantity:456,
        remainingQuantity:67
      },
      
    ],
  },
  {
    name:'potatos',
    lastModified:'2022-09-23',
   
    data: [
      {
        description: 'testing',
        unitPrice: '11091700',
        initialBid: 3,
        totalQuantity:456,
        remainingQuantity:67
      },
      
    ],
  },
]
React.useEffect(() => {
  
    
  
}, []);

const handleChangeSearchFilter =(e)=>{
  setSearchedText(e.target.value)
}
React.useEffect(() => {
  
  if (searchedText !== '') {
    const items = products.filter((item) =>
      item?.name.includes(searchedText)
    );
    setAllProducts(items);
  } else {
    setAllProducts(row);
  }
}, [searchedText]);
useEffect(()=>{

},[manageAddProdct])
    return (
       <div> 
        <CssBaseline/> 
    <Box  sx={{m:5}} elevation={24}  square >
    <Box  sx={{ '& > :not(style)': { m: 1 } }}>
 
  <Fab variant="extended" size="medium" color="secondary" aria-label="add" onClick={()=>{setManageAddProduct([true,0])}}>
    <NavigationIcon sx={{ mr: 1 }} />
    Add Item
  </Fab>
  </Box>
</Box>

{manageAddProdct[0] && <ItemAdd/>}
{!manageAddProdct[0] && <ProductList handleChangeFilter={handleChangeSearchFilter} dataList={products} openProductAddForm={setManageAddProduct} />}
</div> 
    );
}

export default ProductManage;