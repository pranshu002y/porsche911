import React from "react";
import "./Projects.css"
import tate from "./portfolio/video-bg.mp4";
import { useNavigate } from "react-router-dom";
import google from "./portfolio/google-icon.svg"
import apple from "./portfolio/apple.svg"
import { auth } from "./fb";
import "firebase/compat/auth";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const Login = () => {

  const navigate = useNavigate();
  const handleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/intro");
    } catch (error) {
      console.log("Error signing in with Google:", error);
    }
  };
  
  const handleSignIn = () => {
    
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log("Data stored in local storage:", email, password);
    navigate("/intro");
  };
  return (
    <>
      <div className="SignIn1">
        <div className="RightSide"></div>
        <div className="LeftSide"></div>
        <div className="Board">IntroCom</div>
        <div className="LoginForm">
          <div className="SignIn2">
            <span className="span-1">Sign In</span>
            <span className="span-2">Sign in to your account</span>
          </div>

          <div className="google">
            <button onClick={handleSignin}>
              <img src={google} alt="Google Logo" />
              <span>Sign in with Google</span>
            </button>
            <button>
              <img src={apple} alt="Apple Logo" />
              <span>Sign in with Apple</span>
            </button>
          </div>

          <div className="card-1">
            <div className="email">
              <span>Email Address</span>
            </div>
            <div className="input-margin">
              <input
                type="email"
                className="input-email"
                id="emailInput"
                placeholder="Enter your email"
              />
            </div>

            <div className="email">
              <span>Password</span>
            </div>
            <div className="input-margin">
              <input
                type="password"
                className="input-email"
                id="passwordInput"
                placeholder="Enter your password"
              />
            </div>

            <div className="email">
              <span className="forget">Forget Password?</span>
            </div>

            <div className="email">
              <button onClick={handleSignIn} >Sign In</button>
            </div>
          </div>


          <div className="dont">
            <span>Don’t have an account? </span>
            <span className="span-dont" >Register here</span>
          </div>
          <div className="video-container">
  <video className="background-video" src={tate} autoPlay loop muted />
</div>
        </div>
      </div>
    </>
  );
};

export default Login;