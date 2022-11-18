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
import { useNavigate } from 'react-router-dom';




// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DataCenter = () => {
    const user = useSelector((state) => state?.user);
  const navigate = useNavigate()
    const [years, setYears] = useState([]);
    const [sum, setSum] = useState(0);
    const [yearsForTable, setYearsForTable] = useState([]);
    const [categorySummary,setCategorySummary] = useState([]);
    const [district,setDistrict] =useState('');
    const [cropList,setCropList] =useState([]);
    const [cropType,setCropType] =useState('Paddy');
    const [districtList,setDistrictList]= useState([])
    const [tableData,setTabledata] = useState([])
    const [yearForTable, setYearForTable] = useState('2022')
    const [series,setSeries]=useState([ ]);
    const [landData,setLandData] =useState([]);
    const handleChangeDistrict = async (event)=>{
        setDistrict(event.target.value);
        // await getHarvestDetails(event.target.value,cropType)
    }
    const handleChangeYear =(event)=>{
        setYearForTable(event.target.value);
    }
    const handleChangeCropType = async (event)=>{
        
        setCropType(event.target.value);
        // await getHarvestDetails(district,event.target.value)
    }
    async function getYears(district) {
        try {
            const [code,res] =await api.farmer.getYearstList(district)
            if (code==201) {
                setYearsForTable(res.map((item)=>{return item._id.year}));

            }
            
        } catch (error) {
            console.log(error)
            
        }
    }

    async function getAverageCategory(district,year) {
        try {
            const [code,res] = await api.farmer.getCategorySummary(district,year);
            
            if (code ==201) {
               
                var total = 0
                
                res.forEach(element => {
                    total = total+ element.totalHarvest;
                }); 
                
                var devices = [ ];

                res.forEach(element => {
                    if (element._id=='vegetable' ) {
                    devices.push({
                        title: 'vegetable',
                        value:Math.round((element.totalHarvest/total)*100),
                       
                        color: '#2D31FA'
                    })
                    
                    }else if(element._id=='grains'){
                        devices.push({
                        title: 'grains',
                        value: Math.round((element.totalHarvest/total)*100),
                        color: '#2D31FA'
                    })
                    }else if(element._id=='fruits'){
                        devices.push({
                        title: 'fruits',
                        value:Math.round((element.totalHarvest/total)*100),
                        color: '#2D31FA'
                    })
                    }
                  
                });
                console.log('devices',devices)
                setCategorySummary(devices);
            }    
            
        } catch (error) {
            console.log(error)
        }
    }
    async function getHarvestDetails(district,crop){
        try {
            const [code,res] = await api.farmer.getHarvestdetails(district,crop);
            if (code==201) {
               setYears(res.map((item)=>{return item._id.year}));
               const totalharvest = res.map((item)=>{return item.totalHarvest})
               const totalexpected = res.map((item)=>{return item.totalExpected})
               const totalLand = res.map((item)=>{return item.totalLand})
               
               setSeries([
                {
                    name: 'Expected Amount',
                    data: totalexpected
                },
                {
                    name: 'Harvested Amount',
                    data:  totalharvest
                },
            ])
            setLandData([{
                name:"Harvested Area",
                data: totalLand
            }]);
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
        if (!user?.auth  ) {
            navigate('/login')
        }
        if(user?.userRole!='FARMER'){
            navigate('/')
        }
        getAllListDetailst();    
   },[])
   
    useEffect(() =>{
        getHarvestDetails(district? district: user.district,cropType);
    },[district,cropType])

    useEffect(() =>{
        getYears(district? district: user.district);    
   },[district])
    useEffect(() =>{

       getTopHarvestDetails(district? district: user.district,yearForTable);
       
        
   },[yearForTable])
   useEffect(() =>{
    getAverageCategory(district,yearForTable); 
   },[yearForTable,district])
    return (
        <><Stack
        marginTop={4}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >
            <SelectingInputField lable={"District"} handleChangeValue={handleChangeDistrict} value={district} valuesArray={districtList} />
            <SelectingInputField lable={"Crop Type"} handleChangeValue={handleChangeCropType} value={cropType} valuesArray={cropList} />
        </Stack><Grid marginTop={0} container rowSpacing={4.5} columnSpacing={2.75}>


                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 2 */}
                <Grid item xs={12} md={7} lg={8}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Comparison Of Harvested and Expected Amount of {cropType} in Past Years in {district}</Typography>
                            <Typography variant="caption" display="block" gutterBottom>Yields are measured in tonnes </Typography>
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
                            <Typography variant="h5">Statistics of Growing Area in {district} district  </Typography>
                            <Typography  variant="caption" display="block" gutterBottom>Area ismeasured in hectare </Typography>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <Box sx={{ p: 3, pb: 0 }}>
                            <Stack spacing={2}>
                                

                            </Stack>
                        </Box>
                        <MonthlyBarChart series={landData} years={years} />
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
            <SelectingInputField lable={"year"} handleChangeValue={handleChangeYear} value={yearForTable} valuesArray={yearsForTable} />
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
                        
                        <CategoryOverview   categoryData={categorySummary} />
                    </MainCard>
                </Grid>

                {/* row 4 */}


            </Grid></>
            
       
    );
};

export default DataCenter;
