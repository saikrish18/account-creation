import React from 'react';
import './PreviewTab.css'

function PreviewTab({ accountData, packageData, contractData }) {
 const agencyName= accountData?.agencyName || 'Default Value'
 const userName = accountData ? accountData.userName : 'N/A';

    return (
    <div className="preview-tab">
      <h3>About</h3>
      <div className="detail">
        <label>Agency Name:</label>
        <span>{agencyName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>{userName}</span>
      </div>
      
      <h3>Contacts</h3>
      <div className="detail">
        <label>Contact:</label>
        <span>+123456789</span>
      </div>
      <div className="detail">
        <label>Email:</label>
        <span>john@example.com</span>
      </div>
      
      
      <div className="detail">
      <h3>Team</h3>
        <label>Agency Manager:</label>
        <label>Project Leader:</label>
        <label>Sub Agency Admin:</label>
        <label>Sales Partner:</label>
        <label>Back Office:</label>
      </div>
      
      <div className="detail">
      <h3>Features</h3>
      <label>Address Management</label>
      <label>Academy</label>
   
      
      <h3>Subfeatures</h3>
      <label>Navigation</label>
      <label>Maps</label>
      </div>
      
      <div className='detail'>
      <h3>Contract</h3>
      <label>Contract Duration</label>
      <label>Number of workers</label>
      </div>

      <div className='detail'>
      <h3>Credentials</h3>
      <label>Email</label>
      <label>Password</label>
      </div>
      
      <div className="create-button">
        <button >Create Account</button>
      </div>
    </div>
  );
}

export default PreviewTab;
