import styled from "styled-components";

export default function ForgetPasswordPage() {
  return (
    <Section>
      <div className="content">
        <h1>Forgot Password</h1>
        <form>
          <input type="email" placeholder="Enter your registered email" />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </Section>
  );
}

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #caf0f8;
  
  .content {
    background: white;
    padding: 2rem 3rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    
    h1 {
      margin-bottom: 1.5rem;
      color: #0077b6;
      font-size: 2rem;
    }
    
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      
      input {
        padding: 0.8rem 1rem;
        border: 1px solid #0077b6;
        border-radius: 0.5rem;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: #023e8a;
        }
      }
      
      button {
        padding: 1rem;
        background-color: #0077b6;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1.1rem;
        transition: 0.3s ease-in-out;
        
        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }
`;
