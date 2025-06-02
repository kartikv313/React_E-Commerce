import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import './styles/Cart.css';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const EmptyCart = () => {
        return (
            <div className="empty-cart">
                <i className="fa fa-shopping-cart"></i>
                <h3>Your Cart is Empty</h3>
                <NavLink to="/product" className="btn btn-outline-dark mt-3">
                    Continue Shopping
                </NavLink>
            </div>
        );
    };

    const CartItems = () => {
        return (
            <div className="container cart-container">
                <div className="row">
                    <div className="col-md-8">
                        {state.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                    <div className="flex-grow-1">
                                        <h5>{item.title}</h5>
                                        <p className="mb-0">${item.price}</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button className="quantity-btn" onClick={() => dispatch(delCart(item))}>-</button>
                                        <span>{item.qty}</span>
                                        <button className="quantity-btn" onClick={() => dispatch(addCart(item))}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4">
                        <div className="cart-summary">
                            <h4>Order Summary</h4>
                            <div className="summary-item">
                                <span>Subtotal</span>
                                <span>${state.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)}</span>
                            </div>
                            <div className="summary-item">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="summary-item">
                                <strong>Total</strong>
                                <strong>${state.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)}</strong>
                            </div>
                            <button className="checkout-btn">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {state.length === 0 ? <EmptyCart /> : <CartItems />}
        </>
    );
};

export default Cart;