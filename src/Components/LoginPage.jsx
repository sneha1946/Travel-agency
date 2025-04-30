import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check: login success if both fields are filled
    if (email && password) {
      // Redirect to homepage
      navigate("/");
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <LoginContainer>
      <FormBox>
        <h2>Welcome Back</h2>
        <p>Enter your credentials to access your account</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="forgot-password">
            <Link to="/forget-password">Forgot password?</Link>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </FormBox>
    </LoginContainer>
  );
}


const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #48cae4, #0077b6);
`;

const FormBox = styled.div`
  background: #ffffff;
  padding: 3rem 4rem;
  border-radius: 1rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
    color: #023e8a;
  }

  p {
    margin-bottom: 2rem;
    color: #555;
    font-size: 0.9rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    
    input {
      padding: 0.8rem 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: 0.3s ease;
      
      &:focus {
        border-color: #0077b6;
        outline: none;
      }
    }

    .forgot-password {
      display: flex;
      justify-content: flex-end;
      margin-top: -0.8rem;
      margin-bottom: 1rem;

      a {
        font-size: 0.9rem;
        color: #0077b6;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem;
      background-color: #0077b6;
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #023e8a;
      }
    }
  }

  .signup-link {
    margin-top: 1.5rem;
    font-size: 0.9rem;

    a {
      color: #0077b6;
      font-weight: bold;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
