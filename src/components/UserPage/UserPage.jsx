import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  // const spotsFromStore = useSelector(store => store.spots);
  const dispatch = useDispatch(); 

      useEffect(() => {
        dispatch({ type: "GET_SPOTS_BY_ID", payload: user.id });
    }, [])

      const spots = useSelector(store => store.spots);


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <ul>
        {spots.map((spotObject) => {
          return (
           <div>
              <p>{spotObject.description}</p>
              <p>{spotObject.location.x}</p>
              <p>{spotObject.location.y}</p>
           </div>
          )
        })}
        <div></div>
      </ul>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
