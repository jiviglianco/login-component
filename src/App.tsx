
import React, { useState } from 'react';

const App: React.FC = () => {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State for error messages
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  // State for success/error messages
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    } else {
      setEmailError('');
    }

    // Validate password length
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    } else {
      setPasswordError('');
    }

    // If validation passes, show success message
    setMessage('Login successful!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className={`mt-1 form-input block w-full border ${emailError ? 'border-red-500' : 'border-gray-300'}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input
              type="password"
              id="password"
              className={`mt-1 form-input block w-full border ${passwordError ? 'border-red-500' : 'border-gray-300'}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </form>
        {message && <p className="text-green-500 text-sm mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default App;
