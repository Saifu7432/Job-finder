import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import './Login.css'; // Import the separate CSS file for styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!email || !password) {
      setShowError(true);
      return;
    }

    try {
      const response = await fetch(`https://finder-job.azurewebsites.net/login?Username=${encodeURIComponent(email)}&Password=${encodeURIComponent(password)}`);
      if (response.ok) {
        const data = await response.json();
        
        // Check the response data for player_id and user_type
        if (data.player_id && data.user_type) {
          // Successful login
          setIsLoggedIn(true); // Update login status
          console.log('Login successful');
          console.warn(this.this.props.hi)

        } else {
          // Invalid login response
          setShowError(true);
        }
      } else {
        // Invalid login
        setShowError(true);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

    // Reset form and error state
    setEmail('');
    setPassword('');
  };

  const handleLogout = () => {
    // Perform logout logic (e.g., clear session, redirect)
    setIsLoggedIn(false);
  };

  return (
    <Container>
      <h1>{isLoggedIn ? 'Log Out' : 'Login'}</h1>
      {!isLoggedIn ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {showError && <Alert variant="danger">Invalid email or password.</Alert>}
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      ) : (
        <div>
          <p>You are logged in</p>
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
          <p>
            <Link to="/">Return to homepage</Link>
          </p>
        </div>
      )}
    </Container>
  );
}

export default Login;
