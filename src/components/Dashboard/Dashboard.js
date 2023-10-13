import React from 'react';
import { useNavigate } from 'react-router';
import './Dashboard.css';
import Sidebar from '../SideBar/SideBar';

function Dashboard() {
  const navigate = useNavigate();

  const handleNewAgencyClick = () => {
    navigate('/new-account');
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="header">
          <h2>Dashboard</h2>
        </div>
        <div className="actions">
          <button className="btn btn-primary">Export</button>
          <input type="text" placeholder="Filter" />
          <button className="btn btn-success" onClick={handleNewAgencyClick}>New Agency</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>TraderEmail</th>
              <th>Location</th>
              <th>Contract</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td>Agency 1</td>
              <td>email@example.com</td>
              <td>Location 1</td>
              <td>Contract 1</td>
              <td>Plan 1</td>
              <td>Active</td>
              <td>
                <button className="btn btn-info">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <div className="pagination">
          <button className="btn btn-primary">Previous</button>
          <span>Page 1 of 5</span>
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
