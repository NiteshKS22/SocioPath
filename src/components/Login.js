import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../theme/logo2.png';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating login process
    setTimeout(() => {
      console.log('Login clicked');
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Remember Me:', rememberMe);
      setIsSubmitting(false);
    }, 2000);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <div className="background-shapes">
        {/* Unique background shapes or animations */}
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h3 className="slogan">CREATE.LEARN.ENGAGE</h3>
      </div>
      <div className="login-content">
        <h2 className="title">Login</h2>
        <form onSubmit={handleLogin} className="form">
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="password-field">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
              <span
                className={`password-toggle ${showPassword ? 'show' : ''}`}
                onClick={toggleShowPassword}
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </span>
            </div>
          </div>
          <div className="form-group">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={toggleRememberMe}
                className="remember-me-checkbox"
              />
              <label htmlFor="rememberMe" className="remember-me-label">
                Remember Me
              </label>
            </div>
          </div>
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </button>
        </form>
        <div className="forgot-password">
          <Link to="/forgot-password" className="link">
            Forgot your password?
          </Link>
        </div>
        <div className="registration-link">
          Don't have an account?{' '}
          <Link to="/registration" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
