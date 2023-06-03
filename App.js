// App.js

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Coloms from './components/Coloms';
import Header from './components/Header';

const App = () => {
  const handleSearch = (searchQuery) => {
    // Perform search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Coloms />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
