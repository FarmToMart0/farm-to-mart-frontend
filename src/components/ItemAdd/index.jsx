import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import {Stack,Grid,Button,Typography,Paper,CircularProgress,TextField,Autocomplete,CssBaseline,Card,CardContent} from '@mui/material';
import * as yup from 'yup';
import { color } from '@mui/system';
import Switch from '@mui/material/Switch';
import ImageCollection from '../imageList/index';
import SnackBarComponent from '../../components/Snackbars';
import axios from 'axios';
import api  from "../../api"
import {Image} from 'cloudinary-react';
const validationSchema = yup.object().shape({
  productName: yup.string().required().label('Product productName'),
  quantity: yup.number().required().min(1).label('Product Quantity'),
  price: yup.number().required().min(1).label('Unit price of product'),
  bid: yup.number().required().min(1).label('Initial bid of product'),
  description: yup.string().required().label('Description'),
  // delivery: yup.array().length().min(1).label('Delivery option'),
  // payment: yup.array().length().min(1).label('Payment option'),
});





const Input = styled('input')({
  display: 'none',
});
export default function ItemAdd(props) {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [imageList,setImageList]=useState(
    [
    
    ]
    );
    const [img,setImg]=useState([])
  const [checked, setChecked] = React.useState(true);

  const handleChangeBiding = (event) => {

    setChecked(event.target.checked);
  };
  const [errorOccured, setErrorOccured] = useState(false)
  const [errorMessage, setErrorMessage] = useState({ type: '', message: '' });
  const [productId,setProductId]= useState()
  const [imageFiles, setImageFiles] = useState([]);
  const [loadingProductAdd, setLoadingProductAdd] = useState(false);
  const [loadingImageAdd, setLoadingImageAdd] = useState(false);
  const [loadingVariantAdd, setLoadingVariantAdd] = useState(false);
  const [selectedDeliveryOption,setSelectedDeliveryOption]=useState([])
  const [selectCategory,setSelectCategory]=useState('')
  const [selectedPayementOption,setSelectedPayementOption]=useState([])
  const [valuesArray,setValuesArray]=useState([])
  const [initialValues, setInitialValues] = useState({
    productName: '',
    quantity: '',
    description: '',
    price:'',
    bid:'',
  });

 
 
   useEffect(()=>{
    
    if (props.edit==1) {
      setSelectCategory(props.editProduct[0].category)
      setProductId(props.editProduct[0]._id)
      setSelectedPayementOption(props.editProduct[0].paymentOption)
      setSelectedDeliveryOption(props.editProduct[0].deliveryOption)
      setChecked(props.editProduct[0].biddingEnable)
      setImageList(props.editProduct[0].images)
      setInitialValues({productName:props.editProduct[0].productName,description:props.editProduct[0].description,quantity:props.editProduct[0].quantity,price:props.editProduct[0].unitPrice,bid:props.editProduct[0].initialBid})
      setValuesArray({productName:props.editProduct[0].productName,description:props.editProduct[0].description,quantity:props.editProduct[0].quantity,price:props.editProduct[0].unitPrice,bid:props.editProduct[0].initialBid})
      
    }
   },[])
 
  
 
  const [productAddSuccesfully, setProductAddedSuccesfully] = useState(false);
  
  const [imageAddSuccesfully, setImageAddedSuccesfully] = useState(false);
  
const handleSave = async (values)=>{
  try {
    setLoadingProductAdd(true)
    
      const [code,res] = await api.farmer.updateProduct({_id:productId,'category':selectCategory,'farmer':user.id,'productName':values.productName,'quantity':values.quantity,'unitPrice':values.price,'initialBid':values.bid,'description':values.description,'biddingEnable':checked,'paymentOption':selectedPayementOption,'deliveryOption':selectedDeliveryOption,'images':imageList});
      if (code === 201) {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(false);
        props.formShow[0]=false
        await props.getProducts()
        navigate('/farmer/dash/sales')

        setErrorMessage({ type: 'success', message: res });
        setErrorOccured(true);
        // setUserObjectInLocal(res.data.user);
       
       
      }if (code ==400) {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(true)
        setErrorMessage({ type: 'error', message: res });
        setErrorOccured(true);
      } else {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(true)
        setErrorMessage({ type: 'error', message: res });
        setErrorOccured(true);
      }
     
    } catch (error) {
      setLoadingProductAdd(false);
      setProductAddedSuccesfully(false)
      setErrorMessage({ type: 'error', message:'server error' });
      setErrorOccured(true);
     
    }
}
  const doSubmit =async(values)=>{
    try {
      setLoadingProductAdd(true)
      const [code,res] = await api.farmer.addProduct({'category':selectCategory,'productName':values.productName,'quantity':values.quantity,'unitPrice':values.price,'initialBid':values.bid,'description':values.description,'biddingEnable':checked,'paymentOption':selectedPayementOption,'deliveryOption':selectedDeliveryOption,'images':imageList.map((item)=>{return item.img})});
    
      if (code === 201) {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(false)
        props.formShow[0]=false
       
        navigate('/farmer/dash/sales')
        setErrorMessage({ type: 'success', message: res });
        setErrorOccured(true);
        // setUserObjectInLocal(res.data.user);
       
       
      }if (code ==400) {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(true)
        setErrorMessage({ type: 'error', message: res });
        setErrorOccured(true);
      } else {
        setLoadingProductAdd(false);
        setProductAddedSuccesfully(true)
        setErrorMessage({ type: 'error', message: res });
        setErrorOccured(true);
      }
     
    } catch (error) {
      setLoadingProductAdd(false);
      setProductAddedSuccesfully(false)
      setErrorMessage({ type: 'error', message:'server error' });
      setErrorOccured(true);
     
    }
  
  }
  const deleteFunc = (id) => {
    
    const arr = imageList.filter((item)=>{
      if (item.img!=id) {
        return item
      }

    })
    setImageList(arr);
    }


  const handleChangeImage = (event) => {
    // const files = .from(event.target.files);
    // setImageFiles(files);
    setLoadingImageAdd(true)
    const img = event.target.files[0];
    if (!img.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setErrorMessage('error','File type is not matched')
      setErrorOccured(true)
      setLoadingImageAdd(false);
      return false;
    }


    
    const formData = new FormData();
    formData.append('file',img);
    formData.append('upload_preset','xfj3iupf');
try {
  axios.post("https://api.cloudinary.com/v1_1/dnrpcuqvr/image/upload",formData).
    then((res)=>{
    
    setImageList([...imageList,{ img: res.data.secure_url}])
    setLoadingImageAdd(false)

   
    }
    
    )
} catch (error) {
  setLoadingImageAdd(false)
}
    
    
  };
  return (
  



<div
style={{
  maxWidth: 800,
  marginLeft: '10%',

  paddingTop: 10,
}}
>
<CssBaseline />


<Formik
  initialValues={initialValues}
  enableReinitialize={true}
  validationSchema={validationSchema}
  onSubmit={(values) => {
    if (props.edit==0) {
      setValuesArray(values)
      doSubmit(values)
    }if (props.edit==1) {
      setValuesArray(values)
      handleSave(values)
    }
    
  }}
>
  {(formikProps) => {
    const { values, handleChange, handleSubmit, touched, errors } =
      formikProps;

    return (
      <Paper margin={0} elevation={0} >
      <React.Fragment>
      <SnackBarComponent open={errorOccured} message={errorMessage.message} type={errorMessage.type}  setOpen={setErrorOccured}/>

         <Card  sx={{ minWidth: 600 }}>
      <CardContent color='white'>
        <Stack direction="column" spacing={3} alignItems="center">
         
          <Typography color='text.default' variant="h5">Add Product</Typography>
          <Autocomplete
      disablePortal
      id="combo-box-demo"

      options={['Vegetables','Grains','Fruits']}
      value={selectCategory}
      onChange={(event,value)=>{
        setSelectCategory(value);
      }}
      sx={{ width: 700 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
          <TextField
            label="Product productName"
            variant="outlined"
            helperText={errors.productName}
            
            error={touched.productName && Boolean(errors.productName)}
            style={{ width: 700 }}
            value={values.productName}
            onChange={handleChange('productName')}
            InputLabelProps={{ shrink: true }}
          />
          <Grid container   spacing={2}>
  <Grid sx={{ml:3}}  item xs={3.6}>
    
      <TextField
            label="Quantity(Kg)"
            variant="outlined"
            helperText={errors.quantity}
            
            error={touched.quantity && Boolean(errors.quantity) }
            style={{ width: 225 }}
            value={values.quantity}
            onChange={handleChange('quantity')}
            InputLabelProps={{ shrink: true }}
          />
  </Grid>
  <Grid item xs={3.6}>
     <TextField
            label="Unit Price"
            variant="outlined"
            helperText={errors.price}
            
            error={touched.price && Boolean(errors.price)}
            style={{ width: 225 }}
            value={values.price}
            onChange={handleChange('price')}
            InputLabelProps={{ shrink: true }}
          />
  </Grid>
  <Grid item xs={3.5}>
     <TextField
            label="Initial Bid"
            variant="outlined"
            helperText={errors.bid}
            
            error={touched.bid && Boolean(errors.bid)}
            style={{ width: 225 }}
            value={values.bid}
            onChange={handleChange('bid')}
            InputLabelProps={{ shrink: true }}
          />
  </Grid>
 
</Grid>
          
          <TextField
            label="Description"
            variant="outlined"
            helperText={errors.description}
            
            error={touched.description && Boolean(errors.description)}
            style={{ width: 700 }}
            value={values.description}
            onChange={handleChange('description')}
            InputLabelProps={{ shrink: true }}
          />
             

   

          <Autocomplete
            multiple
            id="combo-box-demo"
            value={selectedDeliveryOption}
            
            getOptionLabel={(option) => option}
            options={['Farm pickup','Delivery Service']}
            filterSelectedOptions
            sx={{ width: 700 }}
            onChange={(event, value) => {

              setSelectedDeliveryOption(value)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Available Delivery Options"
                placeholder="Delivery Options"
                helperText={errors.delivery}
                InputLabelProps={{ shrink: true }}
                error={touched.delivery && Boolean(errors.delivery)}
                
                variant="outlined"
              />
            )}
          />

<Autocomplete
            multiple
            id="combo-box-demo"
            value={selectedPayementOption}
            
            getOptionLabel={(option) => option}
            options={['Online Payment','Cash on delivery','Shop pichup payment']}
            filterSelectedOptions
            sx={{ width: 700 }}
            onChange={(event, value) => {
          
              setSelectedPayementOption(value)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Available Payment Options"
                placeholder="Payment Options"
                helperText={errors.payment}
                InputLabelProps={{ shrink: true }}
                error={touched.payment && Boolean(errors.payment)}
                onChange={handleChange('payment')}
                variant="outlined"
              />
            )}
          />
          <Grid container spacing={2}>
  <Grid ml={5} item xs={8}>
     <Stack direction='row' spacing={2}>
            <Typography>Bidding Enable</Typography>
          <Switch
      checked={checked}
      onChange={handleChangeBiding}
      inputProps={{ 'aria-label': 'controlled' }}
    />

          </Stack>
  </Grid>
  
</Grid>
<Grid container spacing={2}>
  <Grid ml={4} mt={0} item xs={8}>
  <React.Fragment>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={handleChangeImage}
                    />
                    <Button
                      variant="outlined"
                      color="success"
                      component="span"
                      disabled={imageAddSuccesfully || loadingImageAdd}
                    >
                     {loadingImageAdd ? <CircularProgress /> : 'Add Image'}
                    </Button>
                  </label>
                </React.Fragment>
  </Grid>
  
</Grid>
         
<ImageCollection itemData={imageList} doDelete={deleteFunc}/>

                {props.edit==0 && <Button
                  variant="contained"
                  color="success"
                  sx={{ width: "40%",paddingTop:'15px',paddingBottom:'15px' } }
                  onClick={handleSubmit}
                  disabled={loadingProductAdd}
                >
                  {loadingProductAdd ? <CircularProgress /> : 'Create Product'}
                </Button>
                
              }{
                props.edit==1 && <Button
                variant="contained"
                color="secondary"
                sx={{ width: 300 }}
                onClick={handleSubmit}
                disabled={ loadingProductAdd}
              >
                {loadingProductAdd ? <CircularProgress /> : 'Save'}
              </Button>
              }
       
        </Stack>
        </CardContent>
        </Card>
      </React.Fragment>
      </Paper>
    );
  }}
</Formik>

</div>




  )
}