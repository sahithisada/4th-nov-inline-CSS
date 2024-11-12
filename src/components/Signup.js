import React from 'react';
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div style={{
      backgroundColor: "#f8f8f8", 
      padding: "10px", 
      height: "100%", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"
    }}>

      <div style={{
        backgroundColor: "#ffffff", 
        border: "1px solid #ccc", 
        borderRadius: "10px", 
        padding: "20px", 
        width: "100%", 
        maxWidth: "400px",
        display: "inline-block"
      }}>

        <h1 style={{
          color: "#3f729b",
          fontSize: "2rem",
          textAlign: "center", 
          fontFamily: "'Roboto', sans-serif"
        }}>Sign Up Page</h1>

        <form style={{
          display: "inline-block",
          width: "100%",
          fontFamily: "'Roboto', sans-serif",
          textAlign: "left"
        }}>

          <h2 style={{
            color: "#333",
            fontSize: "1.4rem",
            marginBottom: "15px",
            textAlign: "center"
          }}>Create a new Account</h2>

          <hr style={{ borderTop: "1px solid #e0e0e0", marginBottom: "20px" }} />

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "150px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"
            }}>Email</label>
            <input style={{
              width: "calc(100% - 160px)",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fafafa"
            }} />
          </div>

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "150px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"
            }}>Password</label>
            <input style={{
              width: "calc(100% - 160px)",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fafafa"
            }} />
          </div>

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "150px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"
            }}>First Name</label>

            <input style={{
              width: "calc(100% - 160px)",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fafafa"
            }} />
          </div>

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "150px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"

            }}>Last Name</label>
            <input style={{
              width: "calc(100% - 160px)",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fafafa"
            }} />
          </div>

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "210px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"
            }}>Date of birth</label>

            <input type="date" style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              backgroundColor: "#fafafa"
            }} />
          </div>

          <div style={{ margin: "20px" }}>
            <label style={{
              display: "inline-block",
              width: "125px",
              fontSize: "1.2rem",
              textAlign: "left",
              color: "#333"
            }}>Gender</label>

            <input type='radio' className='inputRadio' name='gender' />
            <label className='inputLabel' style={{ color: "#333" }}>Male</label>
            <input type="radio" className='inputRadio' name="gender" />
            <label className='inputLabel' style={{ color: "#333" }}>Female</label>
            <input type="radio" className='inputRadio' name='gender' />
            <label className='inputLabel' style={{ color: "#333" }}>Others</label>
          </div>

          

          <div style={{ margin: "20px" }}>
            <button type="button"
              style={{
                backgroundColor: "#4c7fef",
                color: "white",
                fontSize: "1.1rem",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                width: "100%",
                cursor: "pointer"
              }}>Sign Up</button>
          </div>

          <p style={{ color: "#4c7fef", fontSize: "1rem", textAlign: "center" }}>
            Already have an account? <Link to="/" style={{ color: "#4c7fef", textDecoration: "none" }}>Login</Link>
          </p>
        </form>

      </div>

    </div>
  )
}

export default Signup;