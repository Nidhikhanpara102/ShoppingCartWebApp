import React from 'react';

const ShoppingCart = ({ cart, removeFromCart, finalizePurchase }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="product-image"
              />
              <p>{item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.product.price}</p>
              <button onClick={() => removeFromCart(item.product)}>Remove</button>
            </div>
          ))}
          <p>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
          <p>Total Price: ${cart.reduce((total, item) => total + item.quantity * item.product.price, 0)}</p>
          <button onClick={finalizePurchase}>BUY ALL</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;

