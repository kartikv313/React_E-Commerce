import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles/Product.css'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4" to="/">
                    <span className="text-danger">React</span> Shop
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons d-flex gap-2">
                        <NavLink to="/login" className="btn btn-outline-dark">
                            <i className="fa fa-sign-in-alt me-1"></i> Login
                        </NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark">
                            <i className="fa fa-user-plus me-1"></i> Register
                        </NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark">
                            <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
