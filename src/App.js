import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Headercomponent from './components/Headercomponent';
import Footercomponent from './components/Footercomponent';


function App() {
  return (
    
    <div>

      <Router>

    
      <div className='.container'>
      <Headercomponent />
      <div className="Container">
<Switch> 

  <Route path="/" component ={ListEmployeeComponent}></Route>
  <Route path="/employees" component ={ListEmployeeComponent}></Route>

      <ListEmployeeComponent />
</Switch>


</div>

 <Footercomponent />
 </div>
 </Router>

     
     
    </div>
  );
}

export default App;
