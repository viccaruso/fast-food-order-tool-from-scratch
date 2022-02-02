import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ instructions }) {
  return (
    <div className='instructions-list'>
      {instructions.map((instruction, i) => <Instruction key={instruction + i} instruction={instruction} />)}
    </div>
  );
}
