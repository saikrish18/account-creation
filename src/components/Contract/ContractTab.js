import React, { useState } from "react";
import './ContractTab.css'
function ContractTab({ setContractData, contractData }) {
  const [contractDuration, setContractDuration] = useState("");
  const [numberOfWorkers, setNumberOfWorkers] = useState("");
  const [additionalInput, setAdditionalInput] = useState("");

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
      <div className="input-field">
        <input
          type="text"
          placeholder="Contract Duration"
          value={contractDuration}
          onChange={(e) => setContractDuration(e.target.value)}
        />
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
          placeholder="Add Field"
          value={additionalInput}
          onChange={(e) => setAdditionalInput(e.target.value)}
        />
      </div>
      <div className="action1">
        <button onClick={handleProceed}>
          Proceed
        </button>
        <button onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ContractTab;
