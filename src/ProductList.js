import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './ProductList.css';

const ProductList = ({ addToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});

  const updateQuantity = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, newQuantity),
    }));
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: productQuantities[product.id] || 1 });

    const existingToast = document.getElementById(`toast-${product.id}`);
    if (!existingToast) {
      const toastElement = document.createElement('div');
      toastElement.id = `toast-${product.id}`;
      document.body.appendChild(toastElement);

      toast.success(`${product.name} added to cart!`, {
        containerId: `toast-${product.id}`,
        position: 'top-right',
        autoClose: 2000,
      });
    }
  };

const products = [
  { id: 1, name: 'Spring Dress', description: 'Spring Has Sprung Chiffon Skater Dress', price: 10, image: 'summer_Dress.jpg' },
  { id: 2, name: 'Trench Coat', description: 'Solid Double Breasted Belted Overcoat, Versatile Long Sleeve Midi Length Thermal Winter Coat', price: 20, image: 'TrenchCoat.jpg' },
  { id: 3, name: 'Maxi Black Dress', description: 'One Shoulder Hollow Formal Dresses for Women Evening Party Gown Wrap Elegant Sleeveless Slim Slit Ruched Maxi Dress', price: 30, image: 'blackGown.jpg' },
  { id: 4, name: 'Black Leather Purse', description: 'Black Leather Purse Top Handles, Small Leather Clutch, Antique Formal Evening Black Purse Kisslock Gold Metal Frame, Art Deco Women Bag', price: 40, image: 'bag1.jpg'},
  { id: 5, name: 'Small White Shoulder Bags', description: 'Shoulder Bags for Women Small White Purse Y2K Handbag Crocodile Pattern Clutch 90s Purses', price: 50, image: 'bag2.jpg' },
  { id: 6, name: 'Yellow Clutch Handbag', description: 'The Presley Handbag', price: 60, image: 'bag3.jpg' },
  { id: 7, name: 'Shoes', description: 'Description 5', price: 50, image: 'Shoes.jpg' },
  { id: 8, name: 'Shoes', description: 'Description 6', price: 60, image: 'Shoes2.jpg' },
  { id: 9, name: 'Shoes', description: 'Description 5', price: 50, image: 'Shoes3.jpg' },
  
];

  return (
    <div className="product-list-heading">
      <h2>Product List</h2>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <p className="product-name">{product.name}</p>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(product.id, productQuantities[product.id] - 1 || 1)}
                  className="quantity-button"
                >
                  <FaMinus />
                </button>
                <span className="quantity">{productQuantities[product.id] || 1}</span>
                <button
                  onClick={() => updateQuantity(product.id, (productQuantities[product.id] || 1) + 1)}
                  className="quantity-button"
                >
                  <FaPlus />
                </button>
              </div>
              <button onClick={() => handleAddToCart(product)} className="product-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

