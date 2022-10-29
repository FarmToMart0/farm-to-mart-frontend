import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import { Formik } from 'formik';
import {Stack,Grid,Button,Typography,Paper,CircularProgress,TextField,Autocomplete,CssBaseline,Card,CardContent} from '@mui/material';
import * as yup from 'yup';
import { color } from '@mui/system';
import Switch from '@mui/material/Switch';
import ImageCollection from '../imageList/index';
import axios from 'axios';
import {Image} from 'cloudinary-react';
const validationSchema = yup.object().shape({
  name: yup.string().required().label('Product Name'),
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
export default function ItemAdd() {
  const [imageList,setImageList]=useState(
    [
    
    ]
    );
    const [img,setImg]=useState([])
  const [checked, setChecked] = React.useState(true);

  const handleChangeBiding = (event) => {
    setChecked(event.target.checked);
  };

  const [imageFiles, setImageFiles] = useState([]);
  const [loadingProductAdd, setLoadingProductAdd] = useState(false);
  const [loadingVariantAdd, setLoadingVariantAdd] = useState(false);
  const [selectedDeliveryOption,setSelectedDeliveryOption]=useState([])
  const [selectCategory,setSelectCategory]=useState()
  const [selectedPayementOption,setSelectedPayementOption]=useState([])
  const [initialValues, setInitialValues] = useState({
    name: 'Beans',
    category:'',
    quantity: '1000kg',
    description: '',
    price:'',
    bid:'',
    delivery:[],
    payment:[]
  
  });
  const [productAdded, setProductAdded] = useState(null);
  const [productAddSuccesfully, setProductAddedSuccesfully] = useState(false);
  

  
  const handleChangeImage = (event) => {
    // const files = Array.from(event.target.files);
    // setImageFiles(files);
    
    const formData = new FormData();
    formData.append('file',event.target.files[0]);
    formData.append('upload_preset','xfj3iupf');
    axios.post("https://api.cloudinary.com/v1_1/dnrpcuqvr/image/upload",formData).
    then((res)=>{

    setImageList([...imageList,{ img: res.data.secure_url,
    title: 'img',
    rows: 2,
    cols: 2,}])

    console.log('sumeela',res.data.secure_url)
    })
  };
  return (
  



<div
style={{
  maxWidth: 800,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: 10,
}}
>
<CssBaseline />


<Formik
  initialValues={initialValues}
  enableReinitialize={true}
  validationSchema={validationSchema}
  onSubmit={(values) => {
    // createProduct(values);
  }}
>
  {(formikProps) => {
    const { values, handleChange, handleSubmit, touched, errors } =
      formikProps;

    return (
      <Paper margin={2} elevation={20} >
      <React.Fragment>
         <Card  sx={{ minWidth: 600 }}>
      <CardContent color='white'>
        <Stack direction="column" spacing={3} alignItems="center">
         
          <Typography color='text.default' variant="h5">Add Product</Typography>
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Vegetables','Grains','Fruits']}
      onChange={(event,value)=>{
        setSelectCategory(value);
      }}
      sx={{ width: 500 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
          <TextField
            label="Product Name"
            variant="outlined"
            helperText={errors.name}
            
            error={touched.name && Boolean(errors.name)}
            style={{ width: 500 }}
            value={values.name}
            onChange={handleChange('name')}
            InputLabelProps={{ shrink: true }}
          />
          <Grid container   spacing={2}>
  <Grid sx={{ml:15}}  item xs={3}>
    
      <TextField
            label="Quantity"
            variant="outlined"
            helperText={errors.quantity}
            
            error={touched.quantity && Boolean(errors.quantity) }
            style={{ width: 100 }}
            value={values.quantity}
            onChange={handleChange('quantity')}
            InputLabelProps={{ shrink: true }}
          />
  </Grid>
  <Grid item xs={3}>
     <TextField
            label="Unit Price"
            variant="outlined"
            helperText={errors.price}
            
            error={touched.price && Boolean(errors.price)}
            style={{ width: 100 }}
            value={values.price}
            onChange={handleChange('price')}
            InputLabelProps={{ shrink: true }}
          />
  </Grid>
  <Grid item xs={3}>
     <TextField
            label="Initial Bid"
            variant="outlined"
            helperText={errors.bid}
            
            error={touched.bid && Boolean(errors.bid)}
            style={{ width: 100 }}
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
            style={{ width: 500 }}
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
            sx={{ width: 500 }}
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
                onChange={handleChange('delivery')}
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
            sx={{ width: 500 }}
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
  <Grid ml={16} item xs={8}>
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
  <Grid ml={16} item xs={8}>
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
                      variant="contained"
                      color="success"
                      component="span"
                      disabled={productAddSuccesfully || loadingProductAdd}
                    >
                     Add Images
                    </Button>
                  </label>
                </React.Fragment>
  </Grid>
  
</Grid>
         
<ImageCollection itemData={imageList}/>

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ width: 300 }}
                  onClick={handleSubmit}
                  disabled={productAddSuccesfully || loadingProductAdd}
                >
                  {loadingProductAdd ? <CircularProgress /> : 'Create Product'}
                </Button>
       
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
