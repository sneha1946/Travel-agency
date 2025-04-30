import styled from "styled-components";

export default function FaqPage() {
  return (
    <Section>
      <div className="content">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common travel inquiries</p>

        <div className="faq-item">
          <h3>How do I book a trip with Tourist?</h3>
          <p>You can easily book a trip through our website by choosing your destination, dates, and travel package.</p>
        </div>
        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept major credit/debit cards, PayPal, and bank transfers.</p>
        </div>
        <div className="faq-item">
          <h3>Can I customize my travel package?</h3>
          <p>Yes, you can customize your travel package by selecting different activities, hotels, and more.</p>
        </div>
        <div className="faq-item">
          <h3>What is your cancellation policy?</h3>
          <p>We offer a flexible cancellation policy depending on your booking. Please check our terms and conditions for more details.</p>
        </div>
        <div className="faq-item">
          <h3>Do I need travel insurance?</h3>
          <p>Travel insurance is recommended but not mandatory. We offer travel insurance packages for your convenience.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer group discounts?</h3>
          <p>Yes, we offer discounts for group bookings. Please contact us for more details.</p>
        </div>
        <div className="faq-item">
          <h3>How far in advance should I book my trip?</h3>
          <p>We recommend booking at least 4-6 weeks in advance to secure the best deals.</p>
        </div>
        <div className="faq-item">
          <h3>What destinations do you offer?</h3>
          <p>We offer a variety of destinations around the world. Check our destinations page for more details.</p>
        </div>

        <h2>Still have questions?</h2>
        <p>If you couldn't find the answer to your question, please don't hesitate to contact us.</p>
      </div>
    </Section>
  );
}

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column; /* Ensure content and footer stack vertically */
  align-items: center;
  justify-content: flex-start; /* Ensure content starts from top */
  background: #caf0f8;

  .content {
    background: white;
    padding: 3rem 4rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin-bottom: 3rem; /* Space between content and footer */

    h1 {
      margin-bottom: 1.5rem;
      color: #0077b6;
      font-size: 2.5rem;
    }

    p {
      font-size: 1.2rem;
      color: #555;
      line-height: 1.8rem;
    }

    .faq-item {
      margin-bottom: 1.5rem;
      text-align: left;

      h3 {
        color: #2a9d8f;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1rem;
        color: #555;
      }
    }
  }
`;

