import React from "react";

function Cart() {
  // For now, static cart
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>
      <div className="alert alert-info">
        <i className="bi bi-info-circle me-2"></i>
        Your cart is empty. Start shopping!
      </div>
    </div>
  );
}

export default Cart;
