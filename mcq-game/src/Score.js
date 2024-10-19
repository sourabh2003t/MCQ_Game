import React from 'react';
import './App.css';

const Score = ({ score, total }) => {
  return (
    <div className="score-container">
      <h2>Quiz Complete!</h2>
      <p>
        You scored {score} out of {total}.
      </p>
      <button onClick={() => window.location.reload()} className="retry-button">
        Try Again
      </button>
    </div>
  );
};

export default Score;
