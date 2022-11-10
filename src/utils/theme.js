import { createTheme } from '@mui/material/styles';
import { presetPalettes } from '@ant-design/colors';


const Theme = (colors) => {
  const { blue, red, gold, cyan, green, grey } = colors;
  const greyColors = {
      0: grey[0],
      50: grey[1],
      100: grey[2],
      200: grey[3],
      300: grey[4],
      400: grey[5],
      500: grey[6],
      600: grey[7],
      700: grey[8],
      800: grey[9],
      900: grey[10],
      A50: grey[15],
      A100: grey[11],
      A200: grey[12],
      A400: grey[13],
      A700: grey[14],
      A800: grey[16]
  };
  const contrastText = '#fff';

  return {
      primary: {
          lighter: blue[0],
          100: blue[1],
          200: blue[2],
          light: blue[3],
          400: blue[4],
          main: '#035956',
          dark: blue[6],
          700: blue[7],
          darker: blue[8],
          900: blue[9],
          contrastText
      },
      secondary: {
          lighter: greyColors[100],
          100: greyColors[100],
          200: greyColors[200],
          light: greyColors[300],
          400: greyColors[400],
          main: greyColors[500],
          600: greyColors[600],
          dark: greyColors[700],
          800: greyColors[800],
          darker: greyColors[900],
          A100: greyColors[0],
          A200: greyColors.A400,
          A300: greyColors.A700,
          contrastText: greyColors[0]
      },
      error: {
          lighter: red[0],
          light: red[2],
          main: red[4],
          dark: red[7],
          darker: red[9],
          contrastText
      },
      warning: {
          lighter: gold[0],
          light: gold[3],
          main: gold[5],
          dark: gold[7],
          darker: gold[9],
          contrastText: greyColors[100]
      },
      info: {
          lighter: cyan[0],
          light: cyan[3],
          main: cyan[5],
          dark: cyan[7],
          darker: cyan[9],
          contrastText
      },
      
      grey: greyColors
  };
};




const greyPrimary = [
    '#ffffff',
    '#fafafa',
    '#f5f5f5',
    '#f0f0f0',
    '#d9d9d9',
    '#bfbfbf',
    '#8c8c8c',
    '#595959',
    '#262626',
    '#141414',
    '#000000'
];
const greyAscent = ['#fafafa', '#bfbfbf', '#434343', '#1f1f1f'];
const greyConstant = ['#fafafb', '#e6ebf1'];
const colors = presetPalettes;
colors.grey = [...greyPrimary, ...greyAscent, ...greyConstant];

const paletteColor = Theme(colors);
const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#035956',
          // main: '#128C7E',

        // main: '#075E54',
        
    
        },
        ...paletteColor,
        action:{
          hover:'#A3EBB1'
        },
        secondary: {
          // main: '#25D366',
          main: '#00917C',
        },
        

        background: {
          paper: paletteColor.grey[0],
          default: paletteColor.grey.A50
      },
        text: {
          primary: paletteColor.grey[700],
          secondary: paletteColor.grey[500],
          default:'#000000',
          disabled: paletteColor.grey[400]
      },
        text: {
          default:'#000000',
        },
        //#34B7F1
        
       
      },

    
      
  });
  export default theme;