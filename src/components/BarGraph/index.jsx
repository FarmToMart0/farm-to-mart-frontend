import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarGraph() {
    const data = [
        {
          name: '2015',
          Harvest: 2400,
        },
        {
          name: '2016',
          Harvest: 1398,
        },
        {
          name: '2017',
          Harvest: 9800,
        },
        {
          name: '2018',
          Harvest: 3908,
        },
        {
          name: '2019',
          Harvest: 4800,
        },
        {
          name: '2020',
          Harvest: 3800,
        },
        {
          name: '2021',
          Harvest: 4300,
        },
      ];
  return (<div  style={{  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', marginBottom:40,marginTop:7, padding:10,height:510,width:'100%'}}>
    
    <h1 style={{display:'flex', justifyContent:'center', alignItems:'center',color:'#42C2FF',marginBottom:30}}>Harvest Distribution Between 2015 And 2021</h1>
        <BarChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
          
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Harvest" fill="green" background={{ fill: '#eee' }} />
        </BarChart>
      
    
    </div>)
 
}

export default BarGraph