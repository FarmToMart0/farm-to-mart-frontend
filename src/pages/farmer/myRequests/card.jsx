import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import bg from "../../../assets/images/bg4.jpg";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
 

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Sumeela Madusankha', 159, 6.0, 24, ),
        createData('Sethni Disanayaka', 237, 9.0, 37, ),
        createData('Lihini Apsara', 262, 16.0, 24, ),
        createData('Dilukshi Kawmadi', 305, 3.7, 67, ),
        createData('Anura Disanayaka', 356, 16.0, 49, ),
      ];

export default function BidDetailCard() {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Paper
      sx={{
        p: 2,
        margin: '5%',
        maxWidth: '100%',
        flexGrow: 1,
        
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={bg} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom  fontSize='20px' component="div">
                <b>Carrot</b>
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Current Bid :<b> LKR 500.00</b>
              </Typography>
              <Typography variant="body2" color="text.secondary">
               Bids : 15
              </Typography>
            </Grid>
            <Grid item>
            <Typography fontSize='10px' color="text.secondary">
              VIEW DETAILS
             
              <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        </Typography>
        {/* hidden table */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
       <CardContent>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Bid&nbsp;(LKR)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</CardContent>
      </Collapse>
            </Grid>
          </Grid>
          <Grid item>
          <Box
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        padding :'10px',
        borderRadius:'10px',
        borderColor: '#b9bab8',
  m: 1,
  border: 1.5,
  justifyContent: 'center',
      }}
    >
        <Typography fontSize='15px' color='black' component="div">
             Ends in:
            </Typography>
            <Typography fontSize='22px' color='black' component="div">
             5 hours 23 mins
             <br/>
            </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}