import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Headercomponent from './components/Headercomponent';
import Footercomponent from './components/Footercomponent';
import CreateEmployeComponent from './components/CreateEmployeComponent';

function App() {
  return (
    
    <div>

      <Router>

    
    
      <Headercomponent />
      <div className="Container">
<Switch> 

  <Route path= "/ " exact component ={ListEmployeeComponent}></Route>
  <Route path= "/employees" exact component ={ListEmployeeComponent}></Route>
  <Route path= "/add-employee" exact component ={CreateEmployeComponent}></Route>
</Switch>
</div>

<Footercomponent />

 </Router>
 </div>

  
  );
}

export default App;
