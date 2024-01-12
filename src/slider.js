// slider.js
import React from 'react';
import './App.css'

const Slider = ({ value, onChange, min, max }) => {
  return (
    <div>
      <input
        type="range"
        min={min}
        max={max}
        // step={10}
        value={value}
        onChange={onChange}
        className='slider'
      />
      <div>Value: ${value}</div>
    </div>
  );
};

export default Slider;
