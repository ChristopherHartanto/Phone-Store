import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Default from './components/Default'; 
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import ProductList from './components/ProductList';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/login" component={Login}/>
          <Route component={Default}/>
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

