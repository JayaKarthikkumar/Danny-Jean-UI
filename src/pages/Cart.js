import React, { useState } from "react";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

const initialCart = [
  {
    id: 1,
    name: "Holborne Regular Fit Mid Waist Straight Leg Jeans",
    price: 1899,
    image: "/JN1.webp",
    quantity: 1,
  },
  {
    id: 2,
    name: "Holborne Black Mid Rise Straight Fit Jeans",
    price: 2519,
    image: "/JN3.webp",
    quantity: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm p-3">
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center">
                    <img
                      src={item.image}
                      className="img-fluid rounded"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text fw-bold text-danger">₹{item.price}</p>
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleQuantityChange(item.id, -1)}
                          disabled={item.quantity === 1}
                        >
                          -
                        </button>
                        <span className="mx-3">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm p-3">
              <h4 className="mb-3">Cart Summary</h4>
              <p className="fw-bold">Total: ₹{getTotal()}</p>
              <button className="btn btn-success w-100">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
