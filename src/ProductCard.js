import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <img src={product.hoverImageUrl} alt={product.name} className="product-image hover-image" />
            </div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard;