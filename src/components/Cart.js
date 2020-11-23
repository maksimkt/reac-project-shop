import React, { Component } from 'react'
import formatCurrency from "../util";


export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            firstName:"",
            lastName:"",
            address:"",
            showCheckout: false
        };
        
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value});
    };

    createOrder = (e) =>{
        e.preventDefault();
        const order = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };

    render() {
        const {cartItems} = this.props;
        return (
            <div>
                {cartItems.length  === 0 ? (
                <div className="cart cart-header">Cart is empty</div>
                 ) : (
                     <div className="cart cart-header">
                         You heve prduct {cartItems.length} in the cart 
                     </div>
                 )}
                <div>
                    <div className="cart">
                        <ul className = "cart-items">
                            {cartItems.map(item=>(
                                <li key={item._id}>
                                   
                                        <div>{item.title}</div>
                                            <div className="right">
                                                {formatCurrency(item.price)} x {item.count}{" "}
                                                <button className="button" onClick={()=>this.props.removeFromCart(item)}>
                                                  Remove
                                                </button>
                                        </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length!==0 && (
                        <div>
                        <div className="cart">
                        <div className="total">
                            <div>
                                Total:{" "}
                                {formatCurrency(
                                    cartItems.reduce((a,c) => a + c.price*c.count, 0)
                                )}
                            </div>
                            <button className = "button primary"
                            onClick={()=>{
                                this.setState({showCheckout: true});
                            }}>Proceed</button>
                        </div>
                    </div>
                    {this.state.showCheckout && (
                        <div className="cart">
                        <form onSubmit={this.createOrder}
                        className="form-container">
                            <ul>
                                <li>
                                    <label>Email</label>
                                    <input 
                                    name="email"
                                    type="email"
                                    required 
                                    onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>First Name</label>
                                    <input 
                                    name="firstName"
                                    type="text"
                                    required 
                                    onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Last Name</label>
                                    <input 
                                    name="lastName"
                                    type="text"
                                    required 
                                    onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input 
                                    name="address"
                                    type="text"
                                    required 
                                    onChange={this.handleInput}></input>
                                </li>
                                <li>
                                    <button type="submit"
                                    className="button primary">
                                        Checkout
                                    </button>
                                </li>
                            </ul>
                        </form>
                        </div>
                    )}
                    </div>
                    )}          
                </div>
            </div>
        
        )
    }
}
