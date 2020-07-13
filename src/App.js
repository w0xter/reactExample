import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'

import './App.css';
import 'antd/dist/antd.css';
import AntdHome from './pages/AntdHome';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/customHome" component={AntdHome} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
