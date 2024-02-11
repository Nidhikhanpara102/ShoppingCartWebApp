// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import AccountPage from './AccountPage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ shippingAddress: '' });

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: product.quantity } : item
        );
        return updatedCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { product, quantity: product.quantity }]);
    }

    // Display a toast notification for product added to cart
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== product.id));
  };

  const finalizePurchase = () => {
    // Logic for finalized the purchase
    console.log('Purchase finalized:', cart);
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Pass user and updateUser to ProductList */}
          <Route
            path="/product-list"
            element={<ProductList addToCart={addToCart} user={user} updateUser={updateUser} />}
          />
          <Route
            path="/shopping-cart" element={<ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                finalizePurchase={finalizePurchase}
              />
            }
          />
          <Route path="/account-page" element={<AccountPage 
                      user={user} 
                      updateUser={updateUser}
                    />
                  } 
                />
          <Route path="/" element={<ProductList 
                  addToCart={addToCart} 
                  user={user} 
                  updateUser={updateUser} 
                />
              } 
            />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;