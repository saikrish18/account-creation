import React, { useState } from 'react';
import './PackageTab.css'

function PackageTab({ setPackageData, packageData }) {
  const [contractPayment, setContractPayment] = useState(false);
  const [fixedPayment, setFixedPayment] = useState(false);
  const [numberOfContracts, setNumberOfContracts] = useState('');
  const [contractFees, setContractFees] = useState('');
  const [fixedFees, setFixedFees] = useState('');

  const handleProceed = () => {
    const newData = {
      contractPayment,
      fixedPayment,
      numberOfContracts,
      contractFees,
      fixedFees,
    };
    setPackageData(newData);
  }
  
  return (
    <div className="package-tab">
      <div className="frame">
        <h3>Contract based payment</h3>
        <input
          type="checkbox"
          checked={contractPayment}
          onChange={() => setContractPayment(!contractPayment)}
        />
        <p>Agency manager</p>
          <div className="input-fields">
            <input
              type="number"
              placeholder="Number of contracts"
              value={numberOfContracts}
              onChange={(e) => setNumberOfContracts(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contract fees"
              value={contractFees}
              onChange={(e) => setContractFees(e.target.value)}
            />
            <input
              type="text"
              placeholder="New field"
            />
          </div>
      </div>
      <div className="frame">
        <h3>Fixed Payment</h3>
        <input
          type="checkbox"
          checked={fixedPayment}
          onChange={() => setFixedPayment(!fixedPayment)}
        />
        <p>Agency manager</p>
          <div className="input-fields">
            <input
              type="text"
              placeholder="Fixed fees"
              value={fixedFees}
              onChange={(e) => setFixedFees(e.target.value)}
            />
          </div>
      </div>
    </div>
  );
}

export default PackageTab;
