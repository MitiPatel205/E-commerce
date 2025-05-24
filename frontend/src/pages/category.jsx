// src/pages/Category.js
import React from "react";
import { useParams } from "react-router-dom";

function Category() {
  const { categoryName } = useParams();

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-capitalize">{categoryName.replace("-", " ")} Products</h1>
      {/* Here you can fetch and show products for this category */}
      <p>Product list for <strong>{categoryName}</strong> coming soon...</p>
    </div>
  );
}

export default Category;
