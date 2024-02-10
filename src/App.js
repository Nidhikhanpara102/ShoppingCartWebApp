import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import AccountPage from './AccountPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ shippingAddress: '' });

  const addToCart = product => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedCart;
      });
    } else {
      setCart(prevCart => [
        ...prevCart,
        { product, quantity: 1 }
      ]);
    }
  };

  const removeFromCart = product => {
    setCart(prevCart =>
      prevCart.filter(item => item.product.id !== product.id)
    );
  };

  const finalizePurchase = () => {
    console.log('Purchase finalized:', cart);
  };

  const updateUser = updatedUser => {
    setUser(updatedUser);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/product-list" element={<ProductList addToCart={addToCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCart
              cart={cart}
              removeFromCart={removeFromCart}
              finalizePurchase={finalizePurchase}
            />} />
          <Route path="/account-page" element={<AccountPage user={user} updateUser={updateUser} />} />
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




