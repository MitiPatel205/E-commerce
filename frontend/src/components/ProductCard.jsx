import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm product-card">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: '180px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-bold text-primary">₹{product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-outline-primary mt-auto">
          <i className="bi bi-eye me-1"></i>View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
