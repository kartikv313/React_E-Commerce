import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">React Shop</h5>
            <p>
              Your one-stop destination for all your shopping needs. Quality products, amazing prices.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
            <p>
              <NavLink to="/product" className="text-white text-decoration-none">All Products</NavLink>
            </p>
            <p>
              <NavLink to="/product" className="text-white text-decoration-none">New Arrivals</NavLink>
            </p>
            <p>
              <NavLink to="/product" className="text-white text-decoration-none">Best Sellers</NavLink>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            <p>
              <NavLink to="/cart" className="text-white text-decoration-none">Your Cart</NavLink>
            </p>
            <p>
              <NavLink to="/about" className="text-white text-decoration-none">About Us</NavLink>
            </p>
            <p>
              <NavLink to="/contact" className="text-white text-decoration-none">Contact Us</NavLink>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@reactshop.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>Copyright ©2025 All rights reserved by:
              <a href="https://github.com/kartikv313" className="text-white text-decoration-none">
                <strong> Kartik Verma</strong>
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <NavLink to="/" className="btn-floating btn-sm text-white">
                    <i className="fab fa-facebook"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <NavLink to="/" className="btn-floating btn-sm text-white">
                    <i className="fab fa-twitter"></i>
                  </NavLink>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/kartikv313" className="btn-floating btn-sm text-white">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
