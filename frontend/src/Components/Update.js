import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Update() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 40, textAlign: 'center' }}>
      <h3>You will be redirected to the Product List. Please select a product from the product list first!</h3>
      <button
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          marginTop: '20px',
        }}
        onClick={() => {
          navigate('/');
        }}
      >
        Click here
      </button>
    </div>
  );
}
