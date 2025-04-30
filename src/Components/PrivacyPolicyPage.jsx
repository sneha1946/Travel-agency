import styled from "styled-components";

export default function PrivacyPolicyPage() {
  return (
    <Section>
      <div className="content">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. We ensure your data is protected securely. Please review this policy to understand how we handle your information.
        </p>

        <h2>Information Collection</h2>
        <p>
          We collect personal data such as name, email address, and payment information when you use our services. This data is used solely to provide the services you request.
        </p>

        <h2>Data Protection</h2>
        <p>
          We take necessary measures to protect your personal data, including encryption, access controls, and regular security audits to prevent unauthorized access.
        </p>

        <h2>Use of Information</h2>
        <p>
          The collected data is used to improve our services, provide customer support, and send updates about new features or promotions. We do not share your data with third parties without your consent.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website uses cookies to enhance user experience. By continuing to use our website, you agree to our use of cookies.
        </p>

        <h2>Changes to the Policy</h2>
        <p>
          We reserve the right to modify this privacy policy at any time. Any changes will be updated here with an updated date. Please review this policy periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us at support@tourist.com.
        </p>
      </div>
    </Section>
  );
}

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #eaf8ff;
  padding: 4rem 0;

  .content {
    background: white;
    padding: 3rem 5rem;
    border-radius: 1.5rem;
    text-align: left;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    width: 100%;
    line-height: 1.8;

    h1 {
      margin-bottom: 2rem;
      color: #005f73;
      font-size: 3rem;
      text-align: center;
      letter-spacing: 0.05rem;
    }

    h2 {
      margin-top: 2.5rem;
      font-size: 2rem;
      color: #0077b6;
      text-transform: uppercase;
      border-bottom: 2px solid #0077b6;
      padding-bottom: 0.5rem;
    }

    p {
      font-size: 1.3rem;
      color: #555;
      line-height: 1.8rem;
      padding: 0.5rem 0;
    }

    @media (max-width: 768px) {
      padding: 2rem;
      h1 {
        font-size: 2.5rem;
      }
      h2 {
        font-size: 1.8rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;
