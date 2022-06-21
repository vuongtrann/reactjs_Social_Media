import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webnam">
          <h1>ABC Media</h1>
          <h6>Thế giới mộng mơ của goodboy !</h6>
        </div>
      </div>
      <Login />
    </div>
  );
};


function Login() {
    return (
      <div className="a-right">
        <form action="" className="infoForm authForm">
          <h3>Log In</h3>
        
            
            
          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="Username"
              name="username"
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="password"
              placeholder="Password"
              name="password"
            />
           
          </div>
          <div>
              <span style={{fontSize:"12px"}}>Don't have an account. Signup!</span>
              <button className="button infoButton" type="submit">Login</button>
          </div>
          
        </form>
      </div>
    );
  }


function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            placeholder="First Name"
            name="firstname"
          />
          <input
            className="infoInput"
            type="text"
            placeholder="Last Name"
            name="lastname"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            placeholder="Username"
            name="username"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            className="infoInput"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <div>
            <span style={{fontSize:"12px"}}>Already have an account. Login!</span>
        </div>
        <button className="button infoButton" type="submit">Signup</button>
      </form>
    </div>
  );
}
export default Auth;
