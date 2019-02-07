import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import  Form  from './components/Form';
import NavbarPage from './components/NavbarPage';
import AddForm from './components/AddForm';

class App extends Component {
  render() {
    return (
        <div className="App">
        <NavbarPage/>
          <Switch>
            <Route path="/" exact component={Posts}/>
            <Route path="/PostForm" exact component={PostForm}/>
            <Route path="/Login" exact component={Login}/>
            <Route path="/Form" exact component={Form}/>
            <Route path="/addForm" exact component={AddForm}/>
          </Switch>
        </div>
    );
  }
}

export default App;
