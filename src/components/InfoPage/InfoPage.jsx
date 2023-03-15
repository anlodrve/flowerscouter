import React from 'react';
import MainMap from '../MainMap/MainMap';
import { useHistory } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history = useHistory(); 

const handleAdd = () => {
    history.push("/add");
}

const handleList = () => {
  history.push("/list");
}

  return (
    <div className="container">
      <p>Info Page</p>
      <MainMap />
      <button id="addSpot" onClick={handleAdd}>Add a Spot</button>
      <button id="toList" onClick={handleList}>List of Spots</button>
    </div>
  );
}

export default InfoPage;
