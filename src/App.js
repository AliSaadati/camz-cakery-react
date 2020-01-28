import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Toolbar from './Components/Toolbar/Toolbar';
import SubToolbar from './Components/Toolbar/SubToolbar';
import Content from './Components/Content/Content';
import Gallery from './Components/Gallery//Masonry/Gallery';
import Packages from './Components/Packages/Packages'
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Toolbar></Toolbar>
        <SubToolbar></SubToolbar>
        <Switch>
          <Route path="/Gallery" exact render={(props) => <Gallery {...props} />}></Route>
          <Route path="/Products/:product" render={(props) => <Content {...props} />}></Route>
          <Route path="/Packages" exact render={(props) => <Packages {...props}/>}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
