import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [successMessage, setSuccessMessage] = useState(""); // To hold the success message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the password
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate success message and redirect to home page
    setSuccessMessage("Registered successfully! Redirecting to home...");

    setTimeout(() => {
      setSuccessMessage(""); // Clear the message
      navigate("/"); // Redirect to home
    }, 1500); // Redirect after 1.5 seconds
  };

  return (
    <SignUpContainer>
      <FormBox>
        {successMessage && <SuccessBanner>{successMessage}</SuccessBanner>} {/* Success message */}
        <h2>Create an Account</h2>
        <p>Enter your details to get started</p>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </FormBox>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
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
  width: 600px;
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
    gap: 1rem;

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

  .login-link {
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

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const SuccessBanner = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-weight: 600;
`;
