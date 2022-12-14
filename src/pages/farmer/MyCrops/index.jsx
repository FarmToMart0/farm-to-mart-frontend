import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import api from "../../../api";
import MyCropTable from "./Table/index";
import SnackBarComponent from "../../../components/Snackbars";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";

export default function TabPaneMyCrops(props) {
  const [searchedText, setSearchedText] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState({ type: "", message: "" });
  const [errorOccured, setErrorOccured] = useState(false);
  const [value, setValue] = React.useState("1");
  const user = useSelector((state) => state?.user);
  const [orderData, setOrderData] = React.useState([]);
  const [completedTask, setCompletedTask] = React.useState([]);
  const navigate = useNavigate();
  const handleSearch =(e)=>{
    
    setSearchedText(e.target.value)
  }
 
  React.useEffect(() => {
    

    if (searchedText !== '') {
      if (value==='1') {
        const items = orderData.filter((item) =>
        item?.cropType.includes(searchedText)
      );
      setOrderData(items)
      }else if(value==='2'){
        const pro = completedTask.filter((item) =>
        item?.cropType.includes(searchedText)
      );
      setCompletedTask(pro)
      }
      
    } else {
      
      
    getCompletedMyCropTask(user?.nic);
    getMyCropTask(user?.nic);
    }
  }, [searchedText]);


  const handleClickEdit = (id) => {
    var temp = completedTask.map((item) => {
      if (item.id == id) {
        item.isEdit = true;
        return item;
      } else {
        return item;
      }
    });
    setCompletedTask(temp);
  };

  const updateHarvestAmount = (id, event) => {
    var temp = completedTask.map((item) => {
      if (item.id == id) {
        item.harvestedAmount = event + "Kg";
        return item;
      } else {
        return item;
      }
    });
    setCompletedTask(temp);
  };

  const doSave = async (id) => {
    var temp = completedTask.map((item) => {
      if (item.id == id) {
        item.isEdit = false;
        return item;
      } else {
        return item;
      }
    });

    try {
      let arr = temp.filter((item) => {
        return item.id == id;
      })[0];
      const [code, res] = await api.farmer.updateHarvestedData([
        {
          harvestedDate: arr.harvestedDate,
          harvestedAmount: parseInt(arr.harvestedAmount),
        },
        id,
      ]);
      if (code === 201) {
        setErrorMessage({
          type: "success",
          message: "successfully updated harvest details",
        });
        setErrorOccured(true);
        setCompletedTask(temp);
      } else {
        setErrorMessage({ type: "error", message: res });
        setErrorOccured(true);
      }
    } catch (error) {
      setErrorMessage({ type: "error", message: "server error" });
      setErrorOccured(true);
    }
  };
  const doRefresh = async () => {
    await getMyCropTask(user?.nic);
    await getCompletedMyCropTask(user?.nic);
  };

  const updateHarvestDate = (id, event) => {
    var temp = completedTask.map((item) => {
      if (item.id == id) {
        item.harvestedDate = event;
        return item;
      } else {
        return item;
      }
    });
    setCompletedTask(temp);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getCompletedMyCropTask(nic) {
    try {
      let [code, res] = await api.farmer.getCompletedMycrops(nic);
      if (code === 201) {
        setCompletedTask(
          res.map((item) => {
            return {
              id: item._id,
              isEdit: false,
              startedDate:
                new Date(item.startingDateOfGrowing).getFullYear() +
                "-" +
                new Date(item.startingDateOfGrowing).getMonth() +
                1 +
                "-" +
                new Date(item.startingDateOfGrowing).getDate(),
              expectedDate:
                new Date(item.expectingDateOfHarvest).getFullYear() +
                "-" +
                new Date(item.expectingDateOfHarvest).getMonth() +
                1 +
                "-" +
                new Date(item.expectingDateOfHarvest).getDate(),
              cropType: item.cropType,
              landArea: `${item.landArea} ha`,
              location: item.location,
              harvestedAmount: `${item.harvestedAmount}Kg`,
              expectedAmount: `${item.expectedAmount}Kg`,
              harvestedDate:
                new Date(item.harvestedDate).getFullYear() +
                "-" +
                (parseInt(new Date(item.harvestedDate).getMonth()) + 1) +
                "-" +
                new Date(item.harvestedDate).getDate(),
            };
          })
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getMyCropTask(nic) {
    try {
      let [code, res] = await api.farmer.getOngoingMycrops(nic);
      if (code === 201) {
        setOrderData(
          res.map((item) => {
            return {
              id: item._id,
              isEdit: false,
              startedDate:
                new Date(item.startingDateOfGrowing).getFullYear() +
                "-" +
                (parseInt(new Date(item.startingDateOfGrowing).getMonth()) +
                  1) +
                "-" +
                new Date(item.startingDateOfGrowing).getDate(),
              expectedDate:
                new Date(item.expectingDateOfHarvest).getFullYear() +
                "-" +
                (parseInt(new Date(item.expectingDateOfHarvest).getMonth()) +
                  1) +
                "-" +
                new Date(item.expectingDateOfHarvest).getDate(),
              cropType: item.cropType,
              landArea: `${item.landArea} ha`,
              location: item.location,
              harvestedAmount: `${item.harvestedAmount}Kg`,
              expectedAmount: `${item.expectedAmount}Kg`,
              harvestedDate:
                new Date(item.harvestedDate).getFullYear() +
                "-" +
                (parseInt(new Date(item.harvestedDate).getMonth()) + 1) +
                "-" +
                new Date(item.harvestedDate).getDate(),
            };
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!user?.auth) {
      navigate("/login");
    }
    if (user?.userRole != "FARMER") {
      navigate("/");
    }

    getMyCropTask(user?.nic);
    getCompletedMyCropTask(user?.nic);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Box sx={{ width: "100%", typography: "body1" }}>
          <SnackBarComponent
            open={errorOccured}
            message={errorMessage.message}
            type={errorMessage.type}
            setOpen={setErrorOccured}
          />
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="On going Growing" value="1" />
                <Tab label="Completed Tasks" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {" "}
              <MyCropTable
              handleChangeFilter={handleSearch}
                doRefresh={doRefresh}
                tab={true}
                columns={[
                  "Crop Type",
                  "Started date of Growing",
                  "Expected date for haversted",
                  "Viwe Details",
                  "Update harvest",
                ]}
                rows={orderData}
              />{" "}
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <MyCropTable
                 handleChangeFilter={handleSearch}
                doSave={doSave}
                updateHarvestAmount={updateHarvestAmount}
                updateHarvestDate={updateHarvestDate}
                handleClickEdit={handleClickEdit}
                tab={false}
                columns={[
                  "Crop Type",
                  "Harvested Date",
                  "Harvested Amount",
                  "Viwe Details",
                  "Edit",
                ]}
                rows={completedTask}
              />{" "}
            </TabPanel>
          </TabContext>
        </Box>
      )}
    </div>
  );
}
