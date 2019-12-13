import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"
import LoginPage from "./pages/LoginPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import ExampleComponent from "./components/ExampleComponent"
import AuthComponent from "./components/AuthComponent"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/product/:id" exact component={ProductDetailPage} />
            <Route path="/shopping_cart" exact component={ShoppingCartPage} />
            <AuthComponent>
              <Route path="/example" exact component={ExampleComponent} />
            </AuthComponent>  
            <Route component={Page404}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
