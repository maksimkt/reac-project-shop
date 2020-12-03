import React, { Component } from "react";
import Cart from "../components/Cart";

export default class CartPage extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Cart/>
        </div>
      </div>
    );
  }
}
