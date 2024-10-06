import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Items.css';  

const Items = () => {
  const navigate = useNavigate();

  return (
    <div className="items-page">
      <div className="item" onClick={() => navigate('/lunch')}>
        <img src="/lunch.jpg" alt="Lunch Icon" />
        <h3>Lunch</h3>
      </div>
      <div className="item" onClick={() => navigate('/dinner')}>
        <img src="/dinner.jpg" alt="Dinner Icon" />
        <h3>Dinner</h3>
      </div>
    </div>
  );
};

export default Items;
