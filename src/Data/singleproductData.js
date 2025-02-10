import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>Price: ₹{product.salePrice} <del>₹{product.price}</del></p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          View Product
        </Link>
      </div>
    </div>
  );
};
