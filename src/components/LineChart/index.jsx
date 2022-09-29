import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Stack } from '@mui/system';

function LineGraph() {

    const data = [
        {
          name: 'January',
          Haevest: 2400,
        },
        {
          name: 'February',
          Haevest: 1398,
        },
        {
          name: 'March',
          Haevest: 9800,
        },
        {
          name: 'April',
          Haevest: 3908,
        },
        {
          name: 'May',
          Haevest: 4800,
        },
        {
          name: 'June',
          Haevest: 3800,
        },
        {
          name: 'July',
          Haevest: 9000,
        },
        {
          name: 'August',
          Haevest: 1200,
        },
        {
          name: 'September',
          Haevest: 300,
        },
        {
          name: 'Octomber',
          Haevest: 4300,
        },
        {
          name: 'November',
          Haevest: 2400,
        },
        {
          name: 'December',
          Haevest: 7500,
        }
      ];
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',padding:20, boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', marginBottom:30}}> 
        

      <Stack>
      <h1 style={{display:'flex', justifyContent:'center', alignItems:'center',color:'#42C2FF',marginBottom:30}}>Harvest Distribution Between 2012 And 2021</h1>
      <LineChart
          width={800}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          style={{fontWeight:'bold',floodColor:'black'}}
        >
        
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{fontWeight:'bold',floodColor:'black'}}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Haevest" stroke="green"  activeDot={{ r: 8, }} />
          
        </LineChart>
      </Stack>
        
    
    </div>
  )
}

export default LineGraph