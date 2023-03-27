import React from 'react';
import MainMap from '../MainMap/MainMap';
import { useHistory } from 'react-router-dom';

//mui imports
import { Box, Typography, Button } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';


function HomePage() {
  const history = useHistory();

  const handleAdd = () => {
    history.push("/add");
  }

  const handleList = () => {
    history.push("/list");
  }

  return (
    <Box
      width='350px'
    >
      <Typography
        align='center'
        variant='h5'
        sx={{
          ml:'20px'
        }}
      >
        Home Page
      </Typography>
      <Button
        variant='outlined'
        id="toList"
        color='secondary'
        onClick={handleList}
        sx={{
          mt: '20px',
          mb: '15px',
          ml: '130px',
          px: '20px'
        }}
        >
          List View
      </Button>
      <MainMap />
   
      <Button
        variant='contained'
        id="addSpot"
        onClick={handleAdd}
        color='secondary'
        startIcon={<AddLocationAltIcon />}
        sx={{
          mt: '15px',
          ml: '120px',
        }}
      >
          Add A Spot
      </Button>

    </Box>
  );
}

export default HomePage;
