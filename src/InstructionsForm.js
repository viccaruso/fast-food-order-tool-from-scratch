import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  // Set form's state
  const [formInstruction, setFormInstruction] = useState('');

  // Handle submit event
  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, formInstruction]);
    setFormInstruction('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Special Instructions: 
          <input value={formInstruction} onChange={(e) => setFormInstruction(e.target.value)}/>
        </label>
        <button>Add instruction</button>
      </form>
    </div>
  );
}
