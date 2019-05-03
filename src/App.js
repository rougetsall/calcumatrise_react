import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route ,Redirect} from 'react-router-dom';
import Calculator from './Component/Calculator'
import PasCalculator from './Component/PasCalculator'
//http://doc.blog.etherial.fr
class App extends Component {
   render(){
     return(
         <Router>
           <div>
             <Route path={'/calculator'} component={Calculator}/>
             <Route path={'/'} component={PasCalculator}/>
           </div>
         </Router>
     );
   }
}
export default App;