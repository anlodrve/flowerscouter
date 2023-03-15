import React from 'react';
import MainMap from '../MainMap/MainMap';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history = useHistory(); 

const handleClick = () => {
    history.push("/add");
}

  return (
    <div className="container">
      <p>Info Page</p>
      <MainMap />
      <button id="addSpot" onClick={handleClick}>Add a Spot</button>
    </div>
  );
}

export default InfoPage;
