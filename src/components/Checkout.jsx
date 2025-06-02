import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Checkout.css';

const Checkout = () => {
    const state = useSelector((state) => state.handleCart);
    const subtotal = state.reduce((total, item) => total + item.price * item.qty, 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    return (
        <div className="checkout-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="checkout-form">
                            <div className="form-section">
                                <h4>Shipping Information</h4>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label className="form-label">First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-12 form-group">
                                        <label className="form-label">Address</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="form-label">City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="form-label">Postal Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <h4>Payment Method</h4>
                                <div className="payment-methods">
                                    <div className="payment-method active">
                                        <i className="far fa-credit-card"></i>
                                        <div>Credit Card</div>
                                    </div>
                                    <div className="payment-method">
                                        <i className="fab fa-paypal"></i>
                                        <div>PayPal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="order-summary">
                            <h4>Order Summary</h4>
                            <div className="summary-item">
                                <span>Subtotal ({state.length} items)</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-item">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="summary-item">
                                <strong>Total</strong>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                            <button className="place-order-btn">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;