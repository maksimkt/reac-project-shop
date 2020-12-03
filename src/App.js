import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import OrdersPage from "./Pages/ordersPage";
import HomePage from "./Pages/homePage";
import CartPage from "./Pages/cartPage";
// import ProductPage from "./Pages/productPage"


const App = (props) => {
  // render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app-conatiner">
            <header>
              <Link to = "/">Project shop   </Link>
              <Link to = "/admin">Orders    </Link>
              <Link to = "/Cart">Cart    </Link>
            </header>
            <main>
              <Route path="/admin" component={OrdersPage}/>
              <Route path="/" component={HomePage} exact/>
              <Route path="/Cart" component={CartPage} exact/>
             
            </main>
            <footer>test</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  // }
 }

export default App;
