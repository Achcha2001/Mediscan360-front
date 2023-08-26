// InteractionChecker.js

import React, { useState } from 'react';
import './interactionChecker.css';

const InteractionChecker = () => {
  const [inputFields, setInputFields] = useState(['']); // Initial input field
  const [showResults, setShowResults] = useState(false); // State to control results display

  const handleAddField = () => {
    setInputFields([...inputFields, '']); // Add a new empty field
  };

  const handleChangeField = (index, value) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = value;
    setInputFields(newInputFields);
  };

  const handleCheck = () => {
    // Add logic to perform checks
    console.log('Checking:', inputFields);
    setShowResults(true); // Show results when "Check" is clicked
  };

  return (
    <div className="interaction-checker-container">
      <div className="left-square">
        <div className="form-container">
          {inputFields.map((field, index) => (
            <input
              key={index}
              type="text"
              value={field}
              onChange={(e) => handleChangeField(index, e.target.value)}
              placeholder={`Input ${index + 1}`}
            />
          ))}
          <button onClick={handleAddField}>+</button>
          <button className="check-button" onClick={handleCheck}>
            Check
          </button>
        </div>
      </div>
      <div className={`right-square ${showResults ? 'show' : ''}`}>
        {/* Display results here */}
        {showResults && <p>Results will be displayed here</p>}
      </div>
    </div>
  );
};

export default InteractionChecker;
