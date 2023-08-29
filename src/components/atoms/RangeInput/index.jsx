import React from 'react';

const RangeInput = ({ value, onChange }) => (
  <input type="range" min={1} max={3} value={value} onChange={onChange} />
);

export default RangeInput;
