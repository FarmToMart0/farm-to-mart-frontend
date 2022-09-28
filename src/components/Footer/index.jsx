import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography color="secondary" align='center'>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Agri2GO
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
   
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'auto',
      }}
      
    >
      <CssBaseline />
      
      <Box
      
        component="footer"
        sx={{
          py: 1,
          px: 1,
          mt: 'auto',
          backgroundColor:'#128C7E',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" align='center'>
             footer 
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}