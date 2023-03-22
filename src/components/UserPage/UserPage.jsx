//mui imports
import { Button } from '@mui/material'

//react imports
import React, { useEffect } from 'react';
import {useSelector, useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import UserMap
import UserMap from '../UserMap/UserMap';

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

//   const handleEdit = (event) => {
//     event.preventDefault();

//     const id = event.target.value;

//     dispatch({
//       type: "EDIT_SPOT",
//       payload: id,
//     });
// };

  const handleAdd = () => {
    history.push("/add");
}
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <div id="ternary">
        {spots.length > 0
          ? (
           <> 
           <h3>Your Posts:</h3>
            <UserMap />
            <ul>
            {spots.map((spotObject) => {
              return (
                <div key={spotObject.id}>
                    <h4>{spotObject.name}</h4>
                    <p>{spotObject.description}</p>
                    <p>{spotObject.location.x}</p>
                    <p>{spotObject.location.y}</p>

                    {user.id === spotObject.author && (
                      <>
                      <Button variant='contained' className="deleteButton" value={spotObject.id} onClick={handleDelete}>
                        Delete
                      </Button>
                       <Button className="editButton" value={spotObject.id} onClick={() => history.push(`/edit/${spotObject.id}`)}
                      >
                        Edit
                      </Button>
                     </>
                    )}
                </div>)
                })}
              </ul>
            </>)
          : (<>
              <h3>You haven't added any spots to the map yet!</h3>
              <Button  variant='contained' id="addSpot" onClick={handleAdd}>Add a Spot</Button>
            </>)}
        </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
