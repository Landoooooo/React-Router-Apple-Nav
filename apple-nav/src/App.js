import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavWrapper from './NavWrapper/NavWrapper';
import MacNavbar from './Pages/Mac';
import IpadNavbar from './Pages/Ipad';
import IphoneNavbar from './Pages/Iphone';
import WatchNavbar from './Pages/Watch';
import TVNavbar from './Pages/TV';
import MusicNavbar from './Pages/Music';
import SupportNavbar from './Pages/Support';
import MacPage from './Pages/MacPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NavWrapper} />
        <Route path="/mac" component={MacNavbar} />
        <Route path="/ipad" component={IpadNavbar} />
        <Route path="/iphone" component={IphoneNavbar} />
        <Route path="/watch" component={WatchNavbar} />
        <Route path="/tv" component={TVNavbar} />
        <Route path="/music" component={MusicNavbar} />
        <Route path="/support" component={SupportNavbar} />
        <Route path="/mac/macbook" component={MacPage}/>
      </div>
    );
  }
}

export default App;
