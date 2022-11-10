import { useState } from 'react';

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


// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import SelectingInputField from './SelectInputField';
import CategoryOverview from './CategoryOverview';



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
    const [value, setValue] = useState('today');
    const [years, setYears] = useState([2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]);
    const [district,setDistrict] =useState('Matara')
    const [cropType,setCropType] =useState('Matara')
    const [tableData,setTabledata] = useState([{id:1,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:2,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:3,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:4,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:5,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:6,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:7,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:8,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:9,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"},{id:10,cropType:"Paddy",harvestedAmount:"10000000",expectedAmount:"120000",land:"10000"}])

    const handleChangeDistrict =(event)=>{
        setDistrict(event.target.value);
    }
    const handleChangeCropType =(event)=>{
        setCropType(event.target.value);
    }
    return (
        <><Stack
        marginTop={4}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
        >
            <SelectingInputField lable={"District"} handleChangeValue={handleChangeDistrict} value={district} valuesArray={["Matara", "Galle", "Hambanthota", "Anuradhapura", "Polonnaruwa"]} />
            <SelectingInputField lable={"Crop Type"} handleChangeValue={handleChangeCropType} value={cropType} valuesArray={["Beans", "Paddy", "Pampkin", "Banana", "Mango"]} />
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
                            <IncomeAreaChart years={years} />
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
                            <Typography variant="h5">Top Harvested Crops</Typography>
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
