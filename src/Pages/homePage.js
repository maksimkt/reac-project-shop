import React, { Component } from "react";
import Filter from "../components/Filter";
import Products from "../components/Poducts";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Products></Products>
          </div>
        </div>
      </div>
    );
  }
}
