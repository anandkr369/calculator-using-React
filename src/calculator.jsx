import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <input value={result} onChange={e => setResult(e.target.value)} />
      <button onClick={calculate}>=</button>
    </div>
  );
}

export default Calculator;
