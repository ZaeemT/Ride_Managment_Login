import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div class="login-container">
    <div class="login-left">
      <button class="back-button">&larr; Back</button>
        <h2>Sign In</h2>
        <p className="subtitle">Enter your email and password to sign in!</p>
        <div className="or-divider">
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="mail@website.com" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Min. 6 characters" />
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Keep me logged in
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <p>Not registered yet? <a href="#">Create an Account</a></p>
      </div>
      <div className="login-right">
        <div className="brand-logo">
          <h1>Spark</h1>
        </div>
        <p>Learn more about Air Drive on Spark.pl</p>
      </div>
    </div>
  );
}

export default LoginPage;
