//mui imports
import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'

//react imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import UserMap
import UserMap from '../UserMap/UserMap';

import './UserPage.css'


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  // const spotsFromStore = useSelector(store => store.spots);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: "GET_SPOTS_BY_ID", payload: user.id });
  }, [])

  const user = useSelector((store) => store.user);
  const spots = useSelector(store => store.spots);
  console.log('spots by user', spots)

  const handleDelete = (event) => {
    event.preventDefault();

    const id = event.target.value;

    dispatch({
      type: "DELETE_SPOT",
      payload: id,
    });
  };

  const handleAdd = () => {
    history.push("/add");
  }
  return (
    <Box width='385px'>
      <Typography
        variant='h3'
        component='div'
        sx={{
          fontWeight: 600,
          fontSize: '36px',
          textAlign: 'center',
          mb: '10px'
        }}
      >
        Welcome, {user.username}!
      </Typography>
      <div id="ternary">
        {spots.length > 0
          ? (
            <>
              <Typography
                variant='h5'
                color='text.secondary'
                sx={{
                  fontWeight: 500,
                  ml: '20px'
                }}
              >
                Your Posts:
              </Typography>
              <UserMap />
              <ul>
                {spots.map((spotObject) => {
                  return (
                    <Box
                      id={spotObject.id}
                      width='300px'>

                      {user.id === spotObject.author && (
                        <>
                          <Card
                            sx={{
                              mb: '20px'
                            }}
                          >
                            <CardContent>
                              <Typography
                                variant='h5'
                                component='div'
                                gutterBottom
                                sx={{
                                  textAlign: 'center',
                                }}
                              >
                                {spotObject.name}
                              </Typography>
                              <Typography
                                variant='body2'
                                color='text.secondary'
                                sx={{ 
                                  mb: '10px'
                                }}
                              >
                                Description: {spotObject.description}
                              </Typography>
                              <Typography
                                variant='body2'
                                color='text.secondary'
                              >
                                {spotObject.location.x}, {spotObject.location.y}
                              </Typography>
                            </CardContent>

                            <CardActions >
                            <Box
                              sx={{ 
                                mx: '40px',
                                mb: '10px'
                              }}
                              >
                              <Button
                                size='small'
                                variant='contained'
                                className="deleteButton"
                                value={spotObject.id}
                                onClick={handleDelete}
                                sx={{ 
                                  mr: '40px'
                                }}
                                >
                                Delete
                              </Button>
                              <Button
                                size='small'
                                variant='contained'
                                color='secondary'
                                value={spotObject.id}
                                onClick={() => history.push(`/edit/${spotObject.id}`)}
                                sx={{ 
                                  ml: '20px'
                                }}
                              >
                                Edit
                              </Button>
                              </Box>
                            </CardActions>
                          </Card>
                        </>
                      )}
                    </Box>)
                })}
              </ul>
            </>)
          : (<>
            <h3>You haven't added any spots to the map yet!</h3>
            <Button variant='contained' id="addSpot" onClick={handleAdd}>Add a Spot</Button>
          </>)}
      </div>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
