import React, { useState } from 'react';
import './NewAccount.css'; 
import Sidebar from '../SideBar/SideBar';
import PackageTab from '../PackageTab/PackageTab';
import ContractTab from '../Contract/ContractTab';
import PreviewTab from '../Preview/PreviewTab';
import { useNavigate } from 'react-router-dom';


function NewAccount({ setAccountData, accountData }) {
  const [activeTab, setActiveTab] = useState('Account');
  const [agencyName, setAgencyName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [activeBranch, setActiveBranch] = useState('');
  const [newField, setNewField] = useState('');
  const [deactivateConfirmation, setDeactivateConfirmation] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const handleProceed = () => {
    const newData = {
      agencyName,
      userName,
      email,
      // ... (other fields)
    };
    setAccountData(newData);
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const handleDeactivate = () => {
    if (deactivateConfirmation) {
      // Handle the "Deactivate Account" action
      console.log("Account Deactivated");
    } else {
      alert("Please confirm account deactivation.");
    }
  };

  return (
    <div className="new-account-layout">
        <div className="sidebar">
        <Sidebar />
        </div>
    <div className="new-account-content">
      <div className="tab-navigation">
        <button onClick={() => handleTabChange('Account')}>Account</button>
        <button onClick={() => handleTabChange('Package')}>Package</button>
        <button onClick={() => handleTabChange('Contract')}>Contract</button>
        <button onClick={() => handleTabChange('Preview')}>Preview</button>
        <button onClick={() => handleTabChange('Deactivate')}>Deactivate</button>
      </div>
      {activeTab === 'Account' && (
        <><div className="account-card">
                      <h3>Account Details</h3>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Agency Name"
                              value={agencyName}
                              onChange={(e) => setAgencyName(e.target.value)} />
                      </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="User Name"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)} />
                      </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Phone Number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)} />
                      </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="State"
                              value={state}
                              onChange={(e) => setState(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Zip Code"
                              value={zipCode}
                              onChange={(e) => setZipCode(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Country"
                              value={country}
                              onChange={(e) => setCountry(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="Active Branch"
                              value={activeBranch}
                              onChange={(e) => setActiveBranch(e.target.value)} /> </div>
                      <div className="input-field">
                          <input
                              type="text"
                              placeholder="New Field"
                              value={newField}
                              onChange={(e) => setNewField(e.target.value)} />
                      </div>
                      <div className="actions">
                          <button className="btn btn-primary" onClick={handleProceed}>
                              Proceed
                          </button>
                          <button className="btn btn-danger" onClick={handleCancel}>
                              Cancel
                          </button>
                      </div>
                  </div><div className="deactivate-card">
                          <h3>Deactivate Account</h3>
                          <div className="confirmation">
                              <input
                                  type="checkbox"
                                  id="confirmCheckbox"
                                  checked={deactivateConfirmation}
                                  onChange={() => setDeactivateConfirmation(!deactivateConfirmation)} />
                              <label htmlFor="confirmCheckbox">I confirm account deactivation</label>
                          </div>
                          <button className="btn btn-danger" onClick={handleDeactivate}>
                              Deactivate Account
                          </button>
                      </div></>
        )}
      {activeTab === 'Package' && (
         <PackageTab />
      )}
      {activeTab === 'Contract' && (
        <ContractTab />
      )}
      {activeTab === 'Preview' && (
       <PreviewTab/>
      )}
      
      </div>
    </div>
  );
}

export default NewAccount;
