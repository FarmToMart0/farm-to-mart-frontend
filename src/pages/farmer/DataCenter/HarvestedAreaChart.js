import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: 450,
        type: 'area',
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ years }) => {
    const theme = useTheme();
    const slot ='month'
    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);
    const [series, setSeries] = useState([
        {
            name: 'Expected Amount',
            data: [0, 86, 28, 115, 48, 210, 136]
        },
        {
            name: 'Harvested Amount',
            data: [0, 43, 14, 56, 24, 105, 68]
        }
    ]);
    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.primary.main, theme.palette.primary[700]],
            xaxis: {
                categories: years,
                       
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
                    color: line
                },
                tickAmount: slot === 'month' ? 11 : 7
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            }
        }));
    }, [primary, secondary, line, theme, slot]);

 

    useEffect(() => {
        setSeries([
            {
                name: 'Expected Amount',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            },
            {
                name: 'Harvested Amount',
                data:  [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] 
            }
        ]);
    }, [slot]);

    return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
    slot: PropTypes.string
};

export default IncomeAreaChart;