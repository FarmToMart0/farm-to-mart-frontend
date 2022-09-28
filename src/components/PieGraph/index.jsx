import React from 'react'
import { PieChart,Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function PieChartDisplay() {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <PieChart width={600} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#00C49F"
            label

          />
          
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default PieChartDisplay