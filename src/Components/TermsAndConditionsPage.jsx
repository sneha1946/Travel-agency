import styled from "styled-components";

export default function TermsAndConditionsPage() {
  return (
    <Section>
      <div className="content">
        <h1>Terms and Conditions</h1>
        <p>Please read and accept our terms and conditions before proceeding.</p>
        
        <h2>Introduction</h2>
        <p>
          Welcome to Tourist. By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.
          If you do not agree to these terms, please do not use our website.
        </p>

        <h2>User Responsibilities</h2>
        <p>
          As a user, you agree to:
        </p>
        <ul>
          <li>Provide accurate, complete, and up-to-date information while using the website.</li>
          <li>Not use the website for any unlawful activities.</li>
          <li>Comply with all local laws and regulations related to your use of the website.</li>
        </ul>

        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal data. By agreeing to these Terms, you also agree to our Privacy Policy.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content provided on this website, including text, graphics, logos, and images, are the property of Tourist or its content providers. You are granted a limited, non-exclusive license to access and use the content for personal, non-commercial purposes only.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The content and services provided on this website are for informational purposes only. While we strive to provide accurate and up-to-date information, we make no warranties regarding the accuracy, completeness, or reliability of any content. Use of the website is at your own risk.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          In no event shall Tourist, its affiliates, or employees be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website or any content therein.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page with an updated date. Please review these Terms periodically.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of the country in which Tourist is registered. Any disputes will be subject to the exclusive jurisdiction of the courts in that country.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, please contact us at info@tourist.com.
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
  background: #caf0f8;

  .content {
    background: white;
    padding: 3rem 4rem;
    border-radius: 1rem;
    text-align: left;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 900px;
    width: 100%;
    margin-top: 2rem;

    h1 {
      margin-bottom: 1.5rem;
      color: #0077b6;
      font-size: 2.5rem;
      letter-spacing: 0.05rem;
    }

    h2 {
      margin-top: 2rem;
      font-size: 1.8rem;
      color: #0077b6;
    }

    p {
      font-size: 1.2rem;
      color: #555;
      line-height: 1.8rem;
      padding: 0 1rem;
    }

    ul {
      font-size: 1.1rem;
      color: #555;
      line-height: 1.8rem;
      padding-left: 2rem;
      list-style-type: disc;
    }
  }
`;
