import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import ViewEmployees from './components/ViewEmployees';
import Settings from './components/Settings';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';

function App() {
  //////
  return (
    <Router>
      <NavigationBar/>
      <Switch>
        <Route path="/" exact component={ViewEmployees}/>
        <Route path="/create-employee" component={CreateEmployeeForm}/>
        <Route path="/settings" component={Settings}/>
      </Switch>
    </Router>
  
  );
}

export default App;
