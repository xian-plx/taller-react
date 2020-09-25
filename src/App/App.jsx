import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import TopBar from './components/TopBar';
import Register from './components/Register';
import ProductList from './components/ProductList';

// const clients = [
//   {
//     idClient: 1,
//     nombreClient: 'admin',
//     pass: 'abc123.',
//   },
//   {
//     idClient: 2,
//     nombreClient: 'Luis',
//     pass: 'abc123.',
//   },
//   {
//     idClient: 3,
//     nombreClient: 'Perfecto',
//     pass: 'perfecto',
//   },
// ];

const App = () => (
  <Router>
    <div>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
      </Switch>
    </div>
    <div className="app">
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  </Router>
);

export default App;
