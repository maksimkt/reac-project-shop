import React from "react";
import Products from "./components/Poducts";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app-conatiner">
          <header className="">
            <a href="/">Project shop</a>
          </header>
          <main className="">
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer className="">test</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
