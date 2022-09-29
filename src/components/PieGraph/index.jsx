

import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function TestCom (props) {
  const theme = useTheme();
  const supData = [63, 15, 22,40];
  const supColors = ['#3F51B5', '#e53935', '#FB8C00','#00FFAB','#15133C','#F9D923','#FF5F00'].slice(0,supData.length)

  const data = {
    datasets: [
      {
        data: supData,
        backgroundColor: supColors,
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Vegetable', 'Paddy', 'Grails','Eggs',]
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'Desktop',
      value: 63,
      color: '#3F51B5'
    },
    {
      title: 'Tablet',
      value: 15,
      color: '#e53935'
    },
    {
      title: 'Mobile',
      value: 23,
      color: '#FB8C00'
    },
    {
      title: 'Mobile',
      value: 23,
      color: '#00FFAB'
    }
  ];

  return (
    <div {...props} style={{  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', marginBottom:40,marginTop:7, padding:20,height:698}}>
      <h1 style={{display:'flex', justifyContent:'center', alignItems:'center',color:'#42C2FF',marginTop:30,marginBottom:70}}> Harvest Distibution </h1>
      <Divider />
      
        <Box
          sx={{
            height: 300,
            weight:400,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      
    </div>
  );
};