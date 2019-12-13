import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MyToggle from './components/MyToggle.js';
import MyTimer from './components/MyTimer.js';
import MyListItem from './components/MyListItem.js';
import CircleAvatar from './components/CircleAvatar.js';

const name = "React.JS";
const getMessage = function(){
  return `Welcome to ${name}`;
}

class Home extends Component{
  render(){
    return(
      <p>Home Page</p>
    )
  }
}

class Product extends Component{
  render(){
    return(
      <div>
        <p>Product Page</p>
        {/* <ul>
          <li> <Link to="product/laptop">Laptop</Link> </li>
          <li> <Link to="product/camera">Camera</Link> </li>
        </ul> */}
          <MyListItem name="Laptop" photo="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"/>
         <MyListItem name="Camera" photo="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"/>
      </div>
    )
  }
}

function ProductDetail({match}){
  
    return(
    <p>Detail Product of {match.params.product_name}</p>
    )
  
}

class Account extends Component{
  render(){
    return(
      <p>Account Page</p>
    )
  }
}

class PageNotFound extends Component{
  render(){
    return(
      <p>Oups.. Page Not Found!</p>
    )
  }
}

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <nav>
              <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/product">Product</Link> </li>
                <li> <Link to="/account">Account</Link> </li>
              </ul>
            </nav>

          <main>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/product" exact component={Product}></Route>
              <Route path="/account" exact component={Account}></Route>
              <Route path="/product/:product_name" exact component={ProductDetail}></Route>
              <Route component={PageNotFound}></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />



//         <MyTimer time="0"/>
//         <MyToggle/>
//         <p>{getMessage()}</p>
//         <MyListItem name="Agus" photo="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"/>
//         <MyListItem name="Barizi" photo="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"/>
//         <p>
//           <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
