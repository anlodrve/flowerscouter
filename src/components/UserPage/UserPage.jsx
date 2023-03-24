//mui imports
import { Box, Card, CardContent, Typography, CardActions, Button } from '@mui/material'

//react imports
import React, { useEffect } from 'react';
import {useSelector, useDispatch, } from 'react-redux';
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
  console.log(spots)

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
      <h2>Welcome, {user.username}!</h2>
      <div id="ternary">
        {spots.length > 0
          ? (
           <> 
           <h3 id='yourPosts'>Your Posts:</h3>
            <UserMap />
            <ul>
            {spots.map((spotObject) => {
              return (
                <Box 
                  id={spotObject.id}
                  width='300px'>
                    <Typography
                      variant='h5' 
                      component='div'
                      >
                        {spotObject.name}
                      </Typography>
                      <Typography 
                        variant='body2' 
                        color='text.secondary'
                        >
                          Description: {spotObject.description}
                      </Typography>
                      <Typography 
                        variant='body2' 
                        color='text.secondary'
                        >
                          {spotObject.location.x}, {spotObject.location.y}          
                      </Typography>

                    {user.id === spotObject.author && (
                      <>

                        <Button 
                          size='small' 
                          variant='contained' 
                          className="deleteButton" 
                          value={spotObject.id} 
                          onClick={handleDelete}>
                          Delete
                        </Button>
                        <Button 
                          size='small' 
                          value={spotObject.id} 
                          onClick={() => history.push(`/edit/${spotObject.id}`)}
                        >
                          Edit
                        </Button>
                     </>
                    )}
                </Box>)
                })}
              </ul>
            </>)
          : (<>
              <h3>You haven't added any spots to the map yet!</h3>
              <Button  variant='contained' id="addSpot" onClick={handleAdd}>Add a Spot</Button>
            </>)}
        </div>
    </Box>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
