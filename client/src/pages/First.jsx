import React, { useState } from 'react';
import './First.css'; 

export default function First() {
    const [qrId, setQrId] = useState('');
    const [qrPrice, setQrPrice] = useState('');
    const [qrImage, setQrImage] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (isNaN(qrPrice) || qrPrice.trim() === '') {
        alert('Please enter a valid price');
        return;
      }
      const data = { id: qrId,  price: parseFloat(qrPrice)  };
  
      try {
        const response = await fetch('http://localhost:3000/generate-qr', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data }),
        });
        if (!response.ok) {
          throw new Error('Failed to generate QR code');
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setQrImage(imageUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };
  
    return (
      <div className="App">
        <h1>QR Code Generator</h1>
        <form id="qr-form" onSubmit={handleSubmit}>
          <div className="content">
            <label htmlFor="qr-id" className="margin">ID:</label>
            <input
              type="text"
              id="qr-id"
              className="qr-input"
              placeholder="Enter ID"
              value={qrId}
              onChange={(e) => setQrId(e.target.value)}
            />
          </div>
          <div className="content">
            <label htmlFor="qr-price">Price:</label>
            <input
              type="text"
              id="qr-price"
              className="qr-input"
              placeholder="Enter Price"
              value={qrPrice}
              onChange={(e) => setQrPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="content">Generate QR Code</button>
        </form>
        {qrImage && (
          <div id="qr-result">
            <img src={qrImage} alt="Generated QR Code" />
          </div>
        )}
      </div>
    );
  }
  
