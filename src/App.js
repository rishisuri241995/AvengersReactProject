import React from 'react';
import './App.css';
import UserDashBoard from './components/UserDashBoard';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NgoDashBoard from './Ngo Component/NgoDashBoard';
import Login from './components/Login/Login';
import NGoLogin from './Ngo Component/Login/NGOLogin';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        {/* User Routes */}
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/ngos" component={UserDashBoard}/>
        <Route exact path="/ngos/:id" component={UserDashBoard}/>
        <Route exact path="/donation" component={UserDashBoard}/>
        <Route exact path="/listofdonation" component={UserDashBoard}/>
        <Route exact path="/thankyou" component={UserDashBoard}/>
        
        {/* Ngo Routes */}
        <Route exact path="/ngo/login" component={NGoLogin}/>
        <Route exact path="/ngo/donation" component={NgoDashBoard}/>
        <Route exact path="/ngo/profile" component={NgoDashBoard}/>
        <Route exact path="/ngo/conformation" component={NgoDashBoard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
