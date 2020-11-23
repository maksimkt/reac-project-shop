import React, { Component } from 'react'


export class Filter extends Component {
    render() {
        return (
            <div className ="filter">
                <input type="text"  placeholder="search"></input>
                <div className="filter-result">{this.props.count} Products</div>
                <div className = "filter-sort">Order
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                    <option value="Latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    </select>
                </div>
                <div className = "filter-produser">Produser
                <select value={this.props.produser} onChange={this.props.filterProducts}>
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
    }
}

