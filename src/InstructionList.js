import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (
    <div>
      {instructions.map((instruction, i) => <Instruction key={instruction + i} instruction={instruction} />)}
    </div>
  );
}
