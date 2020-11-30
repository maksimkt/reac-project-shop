import { connect } from 'react-redux';
import React, { Component } from 'react';
import {filterProducts, sortProducts } from "../actions/productActions";


class Filter extends Component {
    render() {
        return (
            !this.props.filteredProducts ?(
            <div>Loadin...</div>
            ) :(
            <div className ="filter">
                {/* <input type="text"  placeholder="search"></input> */}
                <div className="filter-result">{this.props.filteredProducts.length} Products</div>
                <div className = "filter-sort">Order{" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.products, e.target.value)}>
                    <option value="Latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    </select>
                </div>
                <div className = "filter-produser">Produser
                <select value={this.props.creator} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                    <option value="All" >All</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Xiaomi">Xiaomi</option>
                    <option value="Google">Google</option>
                    <option value="One Plus">One Plus</option>
                </select>
                </div>
            </div>
            )
        )
    }
}


export default connect(
    (state) => ({
      creator: state.products.creator,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(Filter);