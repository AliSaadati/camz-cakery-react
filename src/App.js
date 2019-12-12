import React from 'react';

import Parallax from './Components/Parallax/Parallax'
import Toolbar from './Components/Toolbar/Toolbar';
import classes from './App.module.css';



function App() {
  return (
    <div className={classes.App}>
      <Toolbar></Toolbar>
      <Parallax></Parallax>
    </div>
  );
}

export default App;
