import React, { useState } from "react";
import "./PackageTab.css";

function PackageTab({ setPackageData, packageData }) {
  const [contractPayment, setContractPayment] = useState(false);
  const [fixedPayment, setFixedPayment] = useState(false);
  const [numberOfContracts, setNumberOfContracts] = useState("");
  const [contractFees, setContractFees] = useState("");
  const [fixedFees, setFixedFees] = useState("");

  const handleProceed = () => {
    const newData = {
      contractPayment,
      fixedPayment,
      numberOfContracts,
      contractFees,
      fixedFees,
    };
    setPackageData(newData);
  };

  return (
    <div className="package-tab">
      <h2>Tariffs</h2>
      <div className="frames-container">
        <div className="frame">
          <div className="check">
            <input
              type="checkbox"
              checked={contractPayment}
              onChange={() => setContractPayment(!contractPayment)}
            />
            <h3>Contract based payment</h3>
          </div>
          <div className="input-fields">
            <label>Agency manager</label>
            <div className="input-field">
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
            </div>
            <div className="input-field">
              <input type="text" placeholder="New field" />
            </div>
          </div>
        <div className="input-fields">
          <label>Back Office</label>
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <input type="text" placeholder="New field" />
          </div>
        </div>
        <div className="input-fields">
          <label>Project Leader</label>
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <input type="text" placeholder="New field" />
          </div>
        </div>
        <div className="input-fields">
          <label>Sub Agency Manager</label>
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <input type="text" placeholder="New field" />
          </div>
        </div>
        <div className="input-fields">
          <label>Sales Partner</label>
          <div className="input-field">
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
          </div>
          <div className="input-field">
            <input type="text" placeholder="New field" />
          </div>
        </div>
        </div>

        <div className="frame">
          <div className="check">
            <input
              type="checkbox"
              checked={fixedPayment}
              onChange={() => setFixedPayment(!fixedPayment)}
            />
            <h3>Fixed Payment</h3>
          </div>
          <div className="input-fields">
            <label>Agency manager</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="Fixed fees"
                value={fixedFees}
                onChange={(e) => setFixedFees(e.target.value)}
              />
            </div>
          </div>
          <div className="input-fields">
            <label>Back Office</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="Fixed fees"
                value={fixedFees}
                onChange={(e) => setFixedFees(e.target.value)}
              />
            </div>
          </div>
          <div className="input-fields">
            <label>Project Leader</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="Fixed fees"
                value={fixedFees}
                onChange={(e) => setFixedFees(e.target.value)}
              />
            </div>
          </div>
          <div className="input-fields">
            <label>Sub Agency Manager</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="Fixed fees"
                value={fixedFees}
                onChange={(e) => setFixedFees(e.target.value)}
              />
            </div>
          </div>
          <div className="input-fields">
            <label>Sales Partner</label>
            <div className="input-field">
              <input
                type="text"
                placeholder="Fixed fees"
                value={fixedFees}
                onChange={(e) => setFixedFees(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={handleProceed}>
        Features
      </button>
    </div>
  );
}

export default PackageTab;
