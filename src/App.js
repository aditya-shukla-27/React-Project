import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './ReactMenu/Home';
import About from './ReactMenu/About';
import Contact from './ReactMenu/Contact';
import Service from './ReactMenu/Service';
import Navbar from './ReactMenu/Navbar';
import Footer from './ReactMenu/Footer';
import Mutual from './ReactMenu/Mutual';
import Insurance from './ReactMenu/Insurance';
import Finance from './ReactMenu/Finance';
import Bond from './ReactMenu/Bond';
import Nri from './ReactMenu/Nri';


import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    
    <Switch>
    
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/mutual" component={Mutual}/>
    <Route exact path="/insurance" component={Insurance}/>
    <Route exact path="/finance" component={Finance}/>
    <Route exact path="/bonds" component={Bond}/>
    <Route exact path="/nri" component={Nri}/>
    <Redirect to="/" />
    </Switch>
    <Footer/>
    </>
  );
}

export default App;
