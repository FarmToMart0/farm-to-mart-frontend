import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';



// ==============================|| MONTHLY BAR CHART ||============================== //

const MonthlyBarChart = ({years,series}) => {

    // chart options
const barChartOptions = {

};


    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const info = theme.palette.info.light;

   

   
const options ={
            chart: {
                type: 'bar',
                height: 365,
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '45%',
                    borderRadius: 4
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: years,
                axisTicks: {
                    show: true
                },
                labels: {
                    style: {
                        colors: [
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary
                        ]
                    }
                },
                axisBorder: {
                    show: true,
                    color: 'none'
                },
                tickAmount:  11 
            },
            yaxis: {
                show: true
            },
            grid: {
                show: true
            },
            colors: [info],
            
            tooltip: {
                theme: 'light'
            }
        }

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={400} />
        </div>
    );
};

export default MonthlyBarChart;
