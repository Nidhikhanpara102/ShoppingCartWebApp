
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './ProductList.css';
import Footer from './Footer'; 

const ProductList = ({ addToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});

  //Logic to update the quantity

  const updateQuantity = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, newQuantity),
      
    }));
  };

  //Logic for add to cart
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

  //For product details
  
  const products = [
    { id: 1, name: 'Spring Dress', description:
    "Embrace the essence of spring in our enchanting Spring Has Sprung Chiffon Skater Dress, adorned with whimsical floral prints and a flattering skater", price: 10, image: 'summer_Dress.jpg' },
    { id: 2, name: 'Trench Coat', description: "Elevate your winter wardrobe with our Solid Double Breasted Belted Overcoat, featuring a thermal construction for cozy warmth style with beauty bang.", price: 20, image: 'TrenchCoat.jpg' },
    { id: 3, name: 'Maxi Black Dress', description: 'One Shoulder Hollow Formal Dresses for Women Evening Party Gown Wrap Elegant Sleeveless Slim Slit Ruched Maxi Dress For the night', price: 30, image: 'blackGown.jpg' },
    { id: 4, name: 'Black Leather Purse', description: 'Black Leather Purse Top Handles, Small Leather Clutch, Antique Formal Evening Black Purse Kisslock Gold Metal Frame, Art Deco Women Bag for your beautiful look and day enhancement with confidance.', price: 40, image: 'bag1.jpg'},
    { id: 5, name: 'Small White Shoulder Bags', description: "Step out in style with our chic Shoulder Bags for Women, boasting a small yet sophisticated white purse design featuring a trendy Y2K handbag silhouette and crocodile pattern bag.", price: 50, image: 'bag2.jpg' },
    { id: 6, name: 'Yellow Clutch Handbag', description: "Elevate your accessories with 'The Presley Handbag,' a timeless and versatile addition to your collection, exuding elegance and sophistication in every detail and beauty for your loved ones.", price: 60, image: 'bag3.jpg' },
    { id: 7, name: 'Midnight Lace Elegance Heels', description: 'Elevate your evening ensemble effortlessly with our Midnight Lace Elegance Heels, crafted with exquisite black lace material for a fency touch of unparalleled sophistication.', price: 50, image: 'Shoes.jpg' },
    { id: 8, name: 'Obsidian Sky Platform Heels', description: 'Step into the night with confidence in our Obsidian Sky Platform Heels, featuring a sleek black design and elevated platform for a striking silhouette and added comfortstyle.', price: 60, image: 'Shoes2.jpg' },
    { id: 9, name: 'Onyx Noir Pencil Point Heels', description: 'Make a statement with our Onyx Noir Pencil Point Heels, designed with golden accents and slender heels for a sophisticated look that elongates the legs beauty.', price: 50, image: 'Shoes3.jpg' },
    
  ];

  return (
    <div>
      <div className="product-list-heading">
        <h2 style={{ fontFamily: "Merriweather" }}>Product List</h2>
      
      {/* Display banner image for the product page */}
        <img src="bannerImage.png" alt="Banner" className="banner-image" />
      </div>
      {/* Product container to display Products */}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-details">
              <h5 className="product-name">{product.name}</h5>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <div className="quantity-controls">
                {/* Update quantity value according to the user's need */}
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
              <br/>
              {/* Handle add to cart action with Add to cart product button for perticular products */}
              <button onClick={() => handleAddToCart(product)} className="product-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2> </h2>
      <Footer /> 
    </div>
  );
};

export default ProductList;

