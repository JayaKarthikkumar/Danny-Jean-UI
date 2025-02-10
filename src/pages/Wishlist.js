import React, { useState } from "react";
import Footer from "../components/Footer";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      name: "Holborne Regular Fit Mid Waist Straight Leg Jeans",
      price: 1899,
      image: "/JN1.webp",
    },
    {
      name: "Holborne Black Mid Rise Straight Fit Jeans",
      price: 2519,
      image: "/JN3.webp",
    },
    {
      name: "Track Straight Fit Jeans",
      price: 3499,
      image: "/JN2.webp",
    },
  ]);

  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-center">Your wishlist is empty.</p>
        ) : (
          <div className="row">
            {wishlist.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 text-center shadow-sm">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text fw-bold text-danger">₹{item.price}</p>
                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromWishlist(index)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;
