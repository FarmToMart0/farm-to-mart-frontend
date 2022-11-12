import { useEffect,useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function CategoryOverview ({categoryData}) {
  const theme = useTheme();
 
  const supColors = ['#3F51B5', '#e53935', '#FB8C00','#00FFAB','#15133C','#F9D923','#FF5F00'].slice(0,categoryData.length)
 
  

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
console.log('dog',categoryData)
const data = {
  datasets: [
    {
      data: categoryData.map(item=>{return item.value}),
      backgroundColor: ['#2D31FA','#FB8C00','#E60965'],
      borderWidth: 8,
      borderColor: '#FFFFFF',
      hoverBorderColor: '#FFFFFF'
    }
  ],
  labels: ['Vegetable',  'Grains','Fruits']
};
  return (
    <div  style={{  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', marginBottom:40,marginTop:7, padding:10,height:510,width:'100%'}}>
      <h1 style={{display:'flex', justifyContent:'center', alignItems:'center',color:'#42C2FF',marginTop:10,marginBottom:20}}> Category Distibution </h1>
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
          {categoryData.map(({
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