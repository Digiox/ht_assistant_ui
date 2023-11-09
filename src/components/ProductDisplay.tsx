import React from 'react';

interface ProductDisplayProps {
  productName: string;
  price: number;
  imageUrl: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ productName, price, imageUrl }) => {
  return (
    <div className="product-display">
      <h2>{productName}</h2>
      <img src={imageUrl} alt={productName} />
      <p>Prix: {price.toFixed(2)} €</p>
      // Boutons et interactions supplémentaires ici
    </div>
  );
};

export default ProductDisplay