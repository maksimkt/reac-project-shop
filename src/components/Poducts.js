import React, { Component } from 'react'

export default class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product) =>(
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    {/* <img srs={product.img} alt={product.title}></img> */}
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>
                                    &#36;{product.price}
                                    </div>
                                    <button 
                                        className ="button primary"
                                        onClick={()=>this.props.addToCart(product)}>
                                        Add To Cart 
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

