import React, { useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Loginpage() {
  let navigate = useNavigate();
  let emailInputRef = useRef();
  let PasswordInputRef = useRef();
  
  return (
    <div style={{ 
        backgroundColor: "#fafafa",
         padding: "10px", 
         height: "100vh",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"
        }}>
      <form style={{ 
        backgroundColor: "#ffffff",
         border: "1px solid #dbdbdb", 
         borderRadius: "10px", 
         boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", 
         padding: "40px", 
         width: "300px" }}>

        <h1 style={{ 
            color: "#262626",
             fontSize: "2rem", 
             textAlign: "center", 
             marginBottom: "20px" 
             }}>Login</h1>
        
        <div style={{
             marginBottom: "20px" 
             }}>

          <label style={{
             display: "block", 
             marginBottom: "5px", 
             color: "#262626" 
             }}>Email</label>
          <input ref={emailInputRef} style={{ 
            width: "100%", 
            padding: "8px", 
            border: "1px solid #dbdbdb", 
            borderRadius: "5px" 
            }} />
        </div>
        
        <div style={{ 
            marginBottom: "20px" 
            }}>

          <label style={{
             display: "block", 
             marginBottom: "5px", 
             color: "#262626" }}
            >Password</label>
          <input ref={PasswordInputRef} type="password" style={{ 
            width: "100%", 
            padding: "8px", 
            border: "1px solid #dbdbdb", 
            borderRadius: "5px" }} />
        </div>
        
        <button
          onClick={() => {
            let typedEmail = emailInputRef.current.value;
            let typedPassword = PasswordInputRef.current.value;
            if (typedEmail === "sadasivuni@gmail.com" && typedPassword === "Sahithi@123") {
              navigate("/menu", { state: { msg: "Welcome.." } });
            } else {
              alert("Incorrect Email/Password.");
            }
          }}
          style={{ 
            width: "100%", 
            backgroundColor: "#0095f6", 
            color: "white", 
            padding: "10px", 
            border: "none", 
            borderRadius: "5px", 
            fontSize: "1rem" }}
        >
          Log in
        </button>
        
        <p style={{ 
            color: "#0095f6", 
            textAlign: "center",
             marginTop: "15px" }}>
          Forgotten Password? <Link to="/signup" style={{ color: "#0095f6" }}>Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Loginpage;
