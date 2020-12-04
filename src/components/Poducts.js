import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "../util";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }
  openModal = (product) => {
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };

  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade={true}>
          {!this.props.products ? (
            <div>Loading...</div>
          ) : (
            <ul className="products">
              {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a
                      href={"#" + product._id}
                      onClick={() => this.openModal(product)}
                    >
                      <img
                        className="product-img"
                        src={product.img}
                        alt={product._id}
                      ></img>
                      <p className="title-p">
                        {product.title}
                        {":"}
                      </p>
                    </a>

                    <div className="product-price">
                      <p>{formatCurrency(product.price)}</p>
                      <button
                        onClick={() => this.props.addToCart(product)}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Fade>

        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}
        
          >
            <Zoom>
              <button className="close-modal" onClick={this.closeModal}>
                X
              </button>
              <div className="product-details">
                <img src={product.img} alt={product._id}></img>
                <div className="product-details-description">
                  <p>
                    <strong>{product.title}</strong>
                  </p>
                  <p>{product.description}</p>
                 
                  <div className="product-price">
                    <div>{formatCurrency(product.price)}</div>
                   
                  </div>
                  <botton
                      className=" primary"
                      onClick={() => {
                        this.props.addToCart(product);
                        this.closeModal();
                      }}
                    >
                      Add to Cart{" "}
                    </botton>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({ products: state.products.filteredItems }),
  {
    fetchProducts,
    addToCart,
  }
)(Products);
