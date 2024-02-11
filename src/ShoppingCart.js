// ShoppingCart.js

import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaAlignCenter, FaMinus, FaPlus } from 'react-icons/fa';
import './ShoppingCart.css';

const ShoppingCart = ({ cart, removeFromCart, finalizePurchase, updateQuantity }) => {
  const handleFinalizePurchase = () => {
    // Show a toast notification for the finalize purchase 
    toast.success('Your order will be placed to your address.', {
      autoClose: 3000,
    });
    // Redirect to the Account page
    setTimeout(() => {
      window.location.href = '/account-page';
    }, 2000);
  };

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-content">
        <h2 style={{ fontFamily: "Merriweather" }}>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="shopping-cart-product-image"
                />
                <div className="product-details">
                  <p className="product-name">{item.product.name}</p>
                  <p>{item.product.description}</p>
                   {/* for quantity icons - 'react-icons/fa' library is used */}
                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                    >
                      <FaMinus />
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-button"
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="product-price">Price: ${item.product.price}</p>
                  <button className="remove-button" onClick={() => removeFromCart(item.product)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* For displaying total items in cart and its total price */}
            <div className="cart-summary">
              <p className="total-items">
                Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
              </p>
              <p className="total-price">
                Total Price: $
                {cart.reduce((total, item) => total + item.quantity * item.product.price, 0)}
              </p>
            </div>

            <button className="buy-button" onClick={handleFinalizePurchase}>
              BUY ALL
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
