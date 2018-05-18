import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretDoc from './secret_doc';
import OperativeList from './operative_list';
import { Route } from 'react-router-dom';


const App = () => (
    <div>
       <Nav/>
       <div className="container">
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/secret-doc' component={SecretDoc}/>
       <Route path='/operative-list' component={OperativeList}/>
       </div>
    </div>
);

export default App;
