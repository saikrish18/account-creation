import React from 'react';

function PreviewTab({ accountData, packageData, contractData }) {
  return (
    <div className="preview-tab">
      <h3>About</h3>
      <div className="detail">
        <label>Agency Name:</label>
        <span>{accountData.agencyName}</span>
      </div>
      <div className="detail">
        <label>User Name:</label>
        <span>John Doe</span>
      </div>
      {/* Add more details for Status, Role, Address, etc. */}
      
      <h3>Contacts</h3>
      <div className="detail">
        <label>Contact:</label>
        <span>+123456789</span>
      </div>
      <div className="detail">
        <label>Email:</label>
        <span>john@example.com</span>
      </div>
      {/* Add more contact details as needed */}
      
      <h3>Team</h3>
      <div className="detail">
        <label>Agency Manager:</label>
        <span>Manager Name</span>
      </div>
      {/* Add team member details for Project Leader, Subagency Admin, etc. */}
      
      <h3>Features</h3>
      {/* Add details for Features section */}
      
      <h3>Subfeatures</h3>
      {/* Add details for Subfeatures section */}
      
      <h3>Contract</h3>
      {/* Add details for Contract section */}
      
      <h3>Credentials</h3>
      {/* Add details for Credentials section */}
      
      <div className="create-button">
        <button className="btn btn-primary">Create</button>
      </div>
    </div>
  );
}

export default PreviewTab;
