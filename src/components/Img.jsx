import React from "react";

const Img = ({ src, alt, className = "", style = {} }) => {
  return (
    <img 
      src={src} 
      alt={alt || "image"} 
      className={`img-fluid ${className}`} 
      style={{ maxWidth: "100%", ...style }} 
    />
  );
};

export default Img;
