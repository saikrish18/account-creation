import React, { useState } from 'react';


function ContractTab({ setContractData, contractData }) {
  const [contractDuration, setContractDuration] = useState('');
  const [numberOfWorkers, setNumberOfWorkers] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');

  
    const handleProceed = () => {
        const newContractData = {
          contractDuration,
          numberOfWorkers,
          // ... (other fields)
        };
        setContractData(newContractData);
      };

  const handleCancel = () => {
    // Handle the "Cancel" action (e.g., go back to the dashboard)
  };

  return (
    <div className="contract-tab">
      <h3>Contract Details</h3>
      <div className="input-field">
        <input
          type="text"
          placeholder="Contract Duration"
          value={contractDuration}
          onChange={(e) => setContractDuration(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Number of Workers"
          value={numberOfWorkers}
          onChange={(e) => setNumberOfWorkers(e.target.value)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Additional Input"
          value={additionalInput}
          onChange={(e) => setAdditionalInput(e.target.value)}
        />
      </div>
      <div className="actions">
        <button className="btn btn-primary" onClick={handleProceed}>
          Proceed
        </button>
        <button className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}


export default ContractTab;
