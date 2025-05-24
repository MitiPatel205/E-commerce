import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categoryNames = {
  electronics: "Electronics",
  fashion: "Fashion",
  home: "Home & Living",
  books: "Books",
};


function ProductList() {
  const { category } = useParams();
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products; // Show all if no category

  console.log("URL param category:", category);
  console.log("Filtered products:", filtered);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">{categoryNames[category] || "Products"}</h2>
        <div>
          {Object.keys(categoryNames).map((cat) => (
            <Link
              key={cat}
              to={`/products/${cat}`}
              className={`btn btn-outline-primary me-2 mb-2 ${cat === category ? "active" : ""}`}
            >
              {categoryNames[cat]}
            </Link>
          ))}
        </div>
      </div>
      <div className="row">
        {filtered.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-12">
            <div className="alert alert-warning">No products found in this category.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
