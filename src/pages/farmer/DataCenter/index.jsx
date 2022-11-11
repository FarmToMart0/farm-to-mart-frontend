import { useState,useEffect} from 'react';

// material-ui
import {
    
    Box,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
    Divider
} from '@mui/material';

// project import
import OrdersTable from './TopHarvestedCrops';
import IncomeAreaChart from './HarvestedAreaChart';
import MonthlyBarChart from './HarvetedLand';
import MainCard from './MainCard';
import SelectingInputField from './SelectInputField';
import CategoryOverview from './CategoryOverview';
import api from '../../../api'
import { useSelector } from 'react-redux';


// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};



// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DataCenter = () => {
    const user = useSelector((state) => state?.user);
  
    const [years, setYears] = useState([]);
    const [district,setDistrict] =useState(user.district);
    const [cropList,setCropList] =useState([]);
    const [cropType,setCropType] =useState('');
    const [districtList,setDistrictList]= useState([])
    const [tableData,setTabledata] = useState([{id:1,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:2,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:3,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:4,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:5,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:6,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:7,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:8,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:9,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:10,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"}])
    const [year, setYear] = useState('2022')
    const [series,setSeries]=useState([ ]);
    const handleChangeDistrict =(event)=>{
        setDistrict(event.target.value);
    }
    const handleChangeYear =(event)=>{
        setYear(event.target.value);
    }
    const handleChangeCropType =(event)=>{
        setCropType(event.target.value);
    }
      
    async function getHarvestDetails(district,crop){
        try {
            const [code,res] = await api.farmer.getHarvestdetails(district,crop)
            if (code==201) {
               setYears(res.map((item)=>{return item._id.year}))   

               const totalharvest = res.map((item)=>{item.totalHarvest})
               const totalexpected = res.map((item)=>{item.totalexpected})
               setSeries([
                {
                    name: 'Expected Amount',
                    data: totalexpected
                },
                {
                    name: 'Harvested Amount',
                    data:  totalharvest
                }
            ])
            }else{
                console.log(code,res)
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async function getTopHarvestDetails(district,year){
        try {
            const [code,res] = await api.farmer.getToHarvestedCrops(district,year)
            if (code==201) {
                setTabledata(res); 
            }else{
                console.log(code,res)
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllListDetailst() {
        try {
            const [code,res] = await api.farmer.getCropTypeList()
            if (code==201) {
                setCropList(res);
                setCropType(res[0])
            }else{
                console.log(code,res)
            }
            const [code1,res1]= await api.farmer.getDistrictList()
            if (code1==201) {
                setDistrictList(res1)
                setDistrict(user?.district)
            }else{
                console.log(code,res)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
         getAllListDetailst();
         getHarvestDetails(district,cropType);
         getTopHarvestDetails(district,year);
         
    },[])
    return (
        <><Stack
        marginTop={4}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >
            <SelectingInputField lable={"District"} handleChangeValue={handleChangeDistrict} value={district} valuesArray={districtList} />
            <SelectingInputField lable={"Crop Type"} handleChangeValue={handleChangeCropType} value={cropType? cropType:"Beans"} valuesArray={cropList} />
        </Stack><Grid marginTop={0} container rowSpacing={4.5} columnSpacing={2.75}>


                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Comparison Of Harvested and Expected Amount in Past Years</Typography>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                    <MainCard content={false} sx={{ mt: 1.5 }}>
                        <Box sx={{ pt: 1, pr: 2 }}>
                            <IncomeAreaChart series={series} years={years} />
                        </Box>
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={5}  lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Statistics of Growing Area in {district} </Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}>
                                <Typography sx={{display:'hide'}} variant="h6" color="textSecondary">
                                Growing Area
                                </Typography>

                            </Stack>
                        </Box>
                        <MonthlyBarChart years={years} />
                    </MainCard>
                </Grid>

                {/* row 3 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">

                        <Grid item>
                        <Stack
        marginTop={4}
            direction="row"
           
            spacing={2}
        >
            
           <Typography variant="h5">Top Harvested Crops</Typography>
            <SelectingInputField lable={"year"} handleChangeValue={handleChangeYear} value={year} valuesArray={years} />
        </Stack>
                            
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <OrdersTable tableData={tableData} />
                    </MainCard>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Analytics Report</Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        
                        <CategoryOverview/>
                    </MainCard>
                </Grid>

                {/* row 4 */}


            </Grid></>
            
       
    );
};

export default DataCenter;
