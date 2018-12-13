/* eslint-disable import/first */
import React from "react"
import { render } from "react-dom"
import logo from './assets/logo.png'
import { createBrowserHistory } from "history"
import { Router, Route, Link } from "react-router-dom"
import './App.css';
import './medium'

//Subcomponents
import Home from "./components/Home"
import Movimiento from './components/Movimiento'
import Articulos from './components/Articulos'
//import Contacto from './Contact/Contact'
const history = createBrowserHistory();
const Context = React.createContext();
const styles = { height : "80px", width : "200px" }

const Content = () => (
  <React.Fragment>
      
   <div className="App">
   <nav className="fixed-top navbar navbar-expand-lg navMov">  
        <a className="navbar-brand" href="/">
         <img src={logo} style={styles} alt="Tech Mov"/>
        </a>
        <div className="navbar-collapse collapse show" id="navbarSupportedContent-4" >
            <ul className="navbar-nav ml-auto">

            <li className="nav-item size">
                <Link to="/" className="nav-link waves-effect waves-light"> Home </Link>
            </li>
            <li className="nav-item size">
                <Link to="/movimiento" className="nav-link waves-effect waves-light">Movimiento</Link>
            </li>
            <li className="nav-item size">
                <Link to="/articulos" className="nav-link waves-effect waves-light">Articulos</Link>
            </li>
            <li className="nav-item size">
                <Link to="/contacto" className="nav-link waves-effect waves-light">Contacto</Link>
            </li>

            </ul>
        </div>
    </nav>
    </div> 
    <hr />

    <Route exact path="/" component={Home} />
    <Route path="/movimiento" component={Movimiento} />
    <Route path="/articulos" component={Articulos} />
    {/* <Route path="/contacto" component={Contacto} /> */}
  </React.Fragment>
);

const Nav = () => (
    <Router history={history}>
      <Context.Provider value="one">
        <Content />
      </Context.Provider>
    </Router>
  );
  
  
  render(<Nav />, document.getElementById('root'));