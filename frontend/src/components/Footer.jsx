import React from "react";

function Footer() {
  return (
    <footer className="footer-area mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="footer-title">BuyBliss</h5>
            <p className="footer-desc">
              Your one-stop shop for amazing products. Fast delivery, secure checkout, and top-notch service.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Shop</a></li>
              <li><a href="/cart">Cart</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h6 className="footer-heading">Contact Us</h6>
            <ul className="footer-contact list-unstyled">
              <li><i className="bi bi-envelope me-2"></i> support@BuyBliss.com</li>
              <li><i className="bi bi-telephone me-2"></i> +91 12345 67890</li>
              <li className="footer-social mt-2">
                <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center pt-3">
          <small>© {new Date().getFullYear()} BuyBliss. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
