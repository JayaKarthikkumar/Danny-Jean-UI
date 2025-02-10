import React from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const products = [
  { id: "1", name: "Men's Black Regular Fit Utility Cargo Trousers", price: 4399, salePrice: 4136, image: "/product1.jpg", description: "Stylish and comfortable cargo trousers for men.", color: "Black", sizes: ["S", "M", "L", "XL", "XXL"], length: "32" },
  { id: "2", name: "Blue Denim Jeans", price: 2999, salePrice: 2799, image: "/product2.jpg", description: "Classic blue denim jeans with a regular fit.", color: "Blue", sizes: ["S", "M", "L", "XL"], length: "32" },
];

const SingleProduct = () => {
 const { id } = useParams();
const product = products.find((item) => item.id === id);


  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.description}</p>
          <h4>Price: ₹{product.salePrice} <del>₹{product.price}</del></h4>
          <p>Color: {product.color}</p>
          <p>Sizes Available: {product.sizes.join(", ")}</p>
          <p>Length: {product.length}</p>
          <button className="btn btn-dark">Add to Cart</button>
          <button className="btn btn-danger ms-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
