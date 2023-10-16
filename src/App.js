import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import NewAccount from './components/NewAccount/NewAccount'; 
import PackageTab from './components/PackageTab/PackageTab';
import ContractTab from './components/Contract/ContractTab';
import PreviewTab from './components/Preview/PreviewTab';

function App() {
  const [accountData, setAccountData] = useState({});
  const [packageData, setPackageData] = useState({});
  const [contractData, setContractData] = useState({});

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
          path="/new-account"
          element={
            <NewAccount
              setAccountData={setAccountData}
              accountData={accountData}
            />
          }
        />
          <Route path="/package"
          element={
            <PackageTab
              setPackageData={setPackageData}
              packageData={packageData}
            />
          }
        />
        <Route
          path="/contract"
            element={
            <ContractTab
              setContractData={setContractData}
              contractData={contractData}
            />
          }
        />
        <Route
          path="/preview"
          render={(props) => (
            <PreviewTab
              {...props}
              accountData={accountData}
              packageData={packageData}
              contractData={contractData}
            />
          )}
        />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
