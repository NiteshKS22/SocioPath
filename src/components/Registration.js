import React, { useState } from 'react';
import './regist.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./theme/logo2.png" alt="Logo" />
      </div>
    </nav>
  );
};

const Registration = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating an asynchronous registration process
    try {
      // Perform registration API call or validation here
      await simulateRegistrationAPI();
      console.log('Registration submitted');
      console.log('Email:', email);
      console.log('Username:', username);
      console.log('Password:', password);
    } catch (error) {
      setRegistrationError('Registration failed. Please try again.');
    }

    setIsSubmitting(false);
  };

  const simulateRegistrationAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful registration after 2 seconds
        resolve();
        // Simulate registration failure after 2 seconds
        // reject(new Error('Registration failed'));
      }, 2000);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Registration</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="button" disabled={isSubmitting}>
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          {registrationError && <p>{registrationError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Registration;
