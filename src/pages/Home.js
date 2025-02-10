import React from "react";
import Footer from "../components/Footer";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { products } from '../Data/homeData';  



const App = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/jabnn.webp" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/jeannn.webp" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/JEANS_website_b6bd4012-d04c-48df-963e-01b8cbdc9c65.webp" className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="text-center my-3" style={{ fontSize: "24px" }}>
                <strong>EASY RETURN | FREE SHIP | CASH ON DELIVERY</strong>
            </div>
            <div className="text-center my-3" style={{ fontSize: "34px" }}>
                <strong>NEW ARRIVALS</strong>
            </div>

      <div className="card-group">
  <div className="card position-relative">
  <span 
      className="position-absolute badge bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow"
      style={{
        width: "50px",
        height: "50px",
        top: "15px",
        left: "15px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
      }}
    >
      NEW!
    </span>
    <img src="/JN1.webp" className="card-img-top" alt="Card 1" />
    <div className="card-body">
      <h5 className="card-title">RELAXED FIT BLUE JEAN</h5>
      <p className="card-text">
        <span className="fw-bold">₹3,099</span> 
        <span className="text-decoration-line-through text-muted ms-2">₹5,999</span>
      </p>
        <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
        <span 
      className="position-absolute badge bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow"
      style={{
        width: "50px",
        height: "50px",
        top: "15px",
        left: "15px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
      }}
    >
      NEW!
    </span>
          <img src="/JN2.webp" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title">SLIM TAPERED FIT BLACK JEANS</h5>
            <p className="card-text">
  <span className="fw-bold">₹2,099</span> <span className="text-decoration-line-through">₹2,999</span>
</p>

            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
        <span 
      className="position-absolute badge bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow"
      style={{
        width: "50px",
        height: "50px",
        top: "15px",
        left: "15px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
      }}
    >
      NEW!
    </span>
          <img src="/JN3.webp" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title">SLIM FIT BLUE JEAN</h5>
            <p className="card-text">
  <span className="fw-bold">₹2,099</span> <span className="text-decoration-line-through">₹3,999</span>
</p>

            <p className="card-text">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>

            
            <div className="text-center my-3" style={{ fontSize: "34px" }}>
                <strong>OUR BEST PICKS</strong>
            </div>
            <div className="d-flex justify-content-center my-3">
            <img src="/HOME2.webp" alt="Blue Denim Jeans" />
            <img src="/HOME.webp" alt="Blue Denim Jeans" />

            </div>

            <div className="container mt-5">
            <div className="text-center my-3">
  <strong style={{ fontSize: "34px" }}>STYLE MEETS FUNCTION</strong>
</div>
                <div className="row">
                    {products.map((product, index) => (
                        <div className="col-md-4 col-lg-3 mb-4" key={index}>
                            <div className="card h-100 text-center shadow-sm">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        <span className="fw-bold text-danger me-2">₹{product.newPrice}</span>
                                        <span className="text-decoration-line-through text-muted">₹{product.oldPrice}</span>
                                    </p>
                                    <span className="badge bg-danger rounded-pill p-2">{product.discount}% OFF</span>
                                </div>
                                <div className="card-footer d-flex justify-content">
                                    <button className="btn btn-outline-primary w-50">Cart</button>
                                    <button className="btn btn-danger w-50 ms-3">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card text-bg-dark">
                <img src="/Jeancar.webp" className="card-img" alt="..." />
                <div className="card-img-overlay"></div>
            </div>

            <Footer />
        </>
    );
};

export default App;
