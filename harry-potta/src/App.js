import React from 'react';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import HouseList from "./components/HouseList";

function App() {
  return (
    <div className="App">
      <HouseList />
    </div>
  );
}

export default App;
