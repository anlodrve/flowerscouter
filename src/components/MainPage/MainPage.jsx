import React from 'react';
import MainMap from '../MainMap/MainMap';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory(); 

const handleAdd = () => {
    history.push("/add");
}

const handleList = () => {
  history.push("/list");
}

  return (
    <div className="container">
      <p>Home Page</p>
      <MainMap />
      <button id="addSpot" onClick={handleAdd}>Add a Spot</button>
      <button id="toList" onClick={handleList}>List of Spots</button>
    </div>
  );
}

export default HomePage;
