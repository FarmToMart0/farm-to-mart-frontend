import PropTypes from "prop-types";


// material-ui
import { useTheme } from "@mui/material/styles";

// third-party
import ReactApexChart from "react-apexcharts";

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ years, series }) => {
  const theme = useTheme();
  const slot = "month";
  const {  secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const options = {
    chart: {
      height: 450,
      type: "area",
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      strokeDashArray: 0,
    },
    colors: [theme.palette.primary.main, theme.palette.primary[700]],
    xaxis: {
      categories: years,
      axisTicks: {
        show: true,
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
            secondary,
          ],
        },
      },
      axisBorder: {
        show: true,
        color: line,
      },
      tickAmount: slot === "month" ? 11 : 7,
    },
    yaxis: {
      labels: {
        style: {
          colors: [secondary],
        },
      },
    },
    grid: {
      borderColor: line,
    },
    tooltip: {
      theme: "light",
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={450}
    />
  );
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string,
};

export default IncomeAreaChart;
