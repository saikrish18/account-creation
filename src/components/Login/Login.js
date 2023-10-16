import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., check credentials).

    // If authentication is successful, navigate to the dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="login-form">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h2>Teons</h2>
          <h3>Welcome to Teons!</h3>
          <p>Please sign in to your account and start the adventure</p>
          <input
            type="text"
            name="username"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="password-toggle" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </span>
        </div>
        <div className="remember">
          <label className='checkbox'>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
