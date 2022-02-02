import React from 'react';

export default function Dropdown({ options, setId }) {
  return (
    <div>
      <select onChange={(e) => setId(e.target.value)}>
        {options.map((item, i) => <option key={item + i} value={`${i + 1}`}>{item}</option>)}
      </select>
    </div>
  );
}
