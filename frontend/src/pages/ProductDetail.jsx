import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Product Not Found</h2>
        <Link to="/products/electronics" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold">{product.name}</h2>
          <p className="text-primary fs-4 fw-bold">₹{product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-success btn-lg">
            <i className="bi bi-cart-plus me-2"></i>Add to Cart
          </button>
          <Link to={`/products/${product.category}`} className="btn btn-link ms-3">
            <i className="bi bi-arrow-left"></i> Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
