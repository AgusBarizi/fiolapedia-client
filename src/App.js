import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"
import LoginPage from "./pages/LoginPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import SearchResultPage from "./pages/SearchResultPage"
import RegisterPage from "./pages/RegisterPage"
import ExampleComponent from "./components/ExampleComponent"
import AuthComponent from "./components/AuthComponent"
import UserPage from "./pages/admin/UserPage"
import ProductPage from "./pages/admin/ProductPage"
import AddProductPage from "./pages/admin/AddProductPage"
import TransactionPage from "./pages/admin/TransactionPage"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/product/:id" exact component={ProductDetailPage} />
            <Route path="/shopping_cart" exact component={ShoppingCartPage} />
            <Route path="/search/:keyword" exact component={SearchResultPage} />
            <Route path="/admin/users" component={UserPage} />
            <Route path="/admin/products/add" component={AddProductPage} />
            <Route path="/admin/products" component={ProductPage} />
            <Route path="/admin/transactions" component={TransactionPage} />
            <Route component={Page404}></Route>
            {/* <AuthComponent>
              <Route path="/example" exact component={ExampleComponent} />
            </AuthComponent>   */}
            
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
