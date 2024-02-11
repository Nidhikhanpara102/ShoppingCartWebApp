import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Custom style 
import './AccountPage.css'; 
//Import the library for icons
import { FaAlignCenter } from 'react-icons/fa';

const AccountPage = ({ user, updateUser }) => {
  const [activeTab, setActiveTab] = useState('updateAddress');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [displayedData, setDisplayedData] = useState(null);

  // Logic to show the toast notification using "react-toastify" library
  const handleUpdateAddress = () => {
    if (!address.trim()) {
      toast.error('Please enter a valid shipping address.', {
        position: 'top-right',
        autoClose: 2000,
      });
      return;
    }

    updateUser({ ...user, shippingAddress: address });
    setDisplayedData({ name: user.name, address: address, contactNumber: user.contactNumber });
    toast.success('Shipping address updated successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleCreateAccount = () => {
    if (!name.trim() || !address.trim() || !contactNumber.trim()) {
      toast.error('Please fill out all fields.', {
        position: 'top-right',
        autoClose: 2000,
      });

      return;
    }
    
    // Logic for creating a new account
    setDisplayedData({ name, address, contactNumber });
    toast.success('Account created successfully!', {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  // Create a form to update the shipping address
  const renderUpdateAddress = () => (
    <div className="form-container">
      <h3 style={{ textAlign: 'center' }}>Update Shipping Address</h3>
      <label>Shipping Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleUpdateAddress}>Update Address</button>
    </div>
  );

  // Create a new account
  const renderCreateAccount = () => (
    <div className="form-container">
      <h2>Create Account</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /><br/><br/>
      <label>Contact Number:</label>
      <input
        type="text"
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
      /><br/><br/>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );

  // Logic to display the data (Shipping Address)
  const renderDisplayData = () => (
    <div className="display-container">
      <h4>Shipping Address Info:</h4>
      <p>Address: {displayedData.address}</p>
    </div>
  );

  // This will handle the tabs of update shipping address and create account
  return (
    <div className="account-page">
      <div className="tab-container">
        <button className={activeTab === 'updateAddress' ? 'active' : ''} onClick={() => setActiveTab('updateAddress')}>Update Shipping Address</button>
        <button className={activeTab === 'createAccount' ? 'active' : ''} onClick={() => setActiveTab('createAccount')}>Create Account</button>
      </div>
      <div className="content-container">
        {activeTab === 'updateAddress' ? renderUpdateAddress() : null}
        {activeTab === 'createAccount' ? renderCreateAccount() : null}
        {displayedData ? renderDisplayData() : null}
      </div>
    </div>
  );
};

export default AccountPage;
