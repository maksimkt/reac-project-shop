import React, { Component } from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";
import { cleearOrder } from "../actions/orderActions";
import { createOrder } from "../actions/orderActions";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
    const order = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      phoneNumber: this.state.phoneNumber,
      total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    this.props.createOrder(order);
    
  };
  closeModal = () => {
    this.props.cleearOrder();
  };
  render() {
    
    const { cartItems, order } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You heve prduct {cartItems.length} in the cart
          </div>
        )}

        {order && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <botton className="close-modal" onClick={this.closeModal}>
                x
              </botton>
              <div className="order-details">
                <h3 className="success-message">Your order has placed.</h3>
                <h2>Order: {order._id}</h2>
                <ul>
                  <li>
                    <div>First Name:</div>
                    <div>{order.firstName}</div>
                  </li>
                  <li>
                    <div>Last Name:</div>
                    <div>{order.lastName}</div>
                  </li>
                  <li>
                    <div>Email:</div>
                    <div>{order.email}</div>
                  </li>
                  <li>
                    <div>Address:</div>
                    <div>{order.address}</div>
                  </li>
                  <li>
                    <div>Phone:</div>
                    <div>{order.phoneNumber}</div>
                  </li>
                  <li>
                    <div>Total:</div>
                    <div>{formatCurrency(order.total)}</div>
                  </li>
                  <li>
                    <div>Cart Items:</div>
                    <div>
                      {order.cartItems.map((i) => (
                        <div>
                          {" "}
                          {i.count} {" x "} {i.title}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Zoom>
          </Modal>
        )}
        <div>
          <div className="cart">
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <img src={item.img} alt={item._id}></img>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count}{" "}
                      <button
                        className="button"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    className="button primary"
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form
                      onSubmit={this.createOrder}
                      className="form-container"
                    >
                      <ul>
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>First Name</label>
                          <input
                            name="firstName"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Last Name</label>
                          <input
                            name="lastName"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Phone Number</label>
                          <input
                            name="phoneNumber"
                            type="tel"
                            minlength="10"
                            maxLength="13"
                            pattern="^[0-9-+\s()]*$"
                            required
                            placeholder="+380XXXXXXX"
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button type="submit" className="button primary">
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
  }),
  { removeFromCart, createOrder, cleearOrder }
)(Cart);
