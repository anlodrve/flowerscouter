import React from 'react';
import MainMap from '../MainMap/MainMap';
import { useHistory } from 'react-router-dom';

//mui imports
import { Box, Typography, Button, } from '@mui/material'


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
        variant='h4'
        >
          Home Page
      </Typography>
      <MainMap />
      <Button variant='contained' id="addSpot" onClick={handleAdd}>Add a Spot</Button>
      <Button variant='contained' id="toList" onClick={handleList}>List of Spots</Button>
    </Box>
  );
}

export default HomePage;
