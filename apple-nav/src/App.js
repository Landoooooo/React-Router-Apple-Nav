import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavWrapper from './NavWrapper/NavWrapper';
import Mac from './Pages/Mac';
import Ipad from './Pages/Ipad';
import Iphone from './Pages/Iphone';
import Watch from './Pages/Watch';
import TV from './Pages/TV';
import Music from './Pages/Music';
import Support from './Pages/Support';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={NavWrapper} />
        <Route path="/mac" component={Mac} />
        <Route path="/ipad" component={Ipad} />
        <Route path="/iphone" component={Iphone} />
        <Route path="/watch" component={Watch} />
        <Route path="/tv" component={TV} />
        <Route path="/music" component={Music} />
        <Route path="/support" component={Support} />
      </div>
    );
  }
}

export default App;
