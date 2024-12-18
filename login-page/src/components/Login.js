import React, { useState } from 'react';
import './Login.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleRegister = () => setIsActive(true);
  const toggleLogin = () => setIsActive(false);

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <br />
          <span>Sign-up using google account</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <button>Register</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site's features</p>
            <button className="hidden" onClick={toggleLogin}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Greetings!</h1>
            <p>Register with your personal details to use all of the site's features</p>
            <button className="hidden" onClick={toggleRegister}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
