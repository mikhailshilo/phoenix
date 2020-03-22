import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEmployeeForm from './components/CreateEmployeeForm';
import ViewEmployees from './components/ViewEmployees';
import Settings from './components/Settings';

function App() {
  //////
  return (
    <div>
      <CreateEmployeeForm /> 
      <ViewEmployees/> 
      <Settings/>  
    </div>
  );
}

export default App;
