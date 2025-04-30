import styled from "styled-components";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",    // 👉 EmailJS dashboard: Service ID
        "your_template_id",   // 👉 Template ID
        form.current,
        "your_public_key"     // 👉 Public Key / User ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // clear form
        },
        (error) => {
          alert("Message failed to send. Please try again.");
        }
      );
  };

  return (
    <Container>
      <TwoColumnLayout>
        <LeftColumn>
          <SectionTitle>Send us a message</SectionTitle>
          <Description>
            Have questions or need assistance with your travel plans? Fill out the form below and our travel experts will be in touch shortly.
          </Description>

          <form ref={form} onSubmit={sendEmail}>
            <FormGroup>
              <Label>Full Name</Label>
              <Input type="text" name="name" placeholder="John Doe" required />
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" name="email" placeholder="john@example.com" required />
            </FormGroup>

            <FormGroup>
              <Label>Subject</Label>
              <Input type="text" name="subject" placeholder="How can we help you?" required />
            </FormGroup>

            <FormGroup>
              <Label>Your Message</Label>
              <Textarea name="message" placeholder="Tell us more about your travel plans or questions..." required />
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </LeftColumn>

        <RightColumn>
          <SectionTitle>Contact Information</SectionTitle>
          <Description>
            We're here to help! Contact us through any of these channels and we'll respond as quickly as possible.
          </Description>

          <ContactInfo>
            <InfoGroup>
              <InfoTitle>Our Location</InfoTitle>
              <InfoText>123 Dholakapur, Pechalwanpur City, VC 12345</InfoText>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>Phone Number</InfoTitle>
              <InfoText>+91 6381761735</InfoText>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>Email Address</InfoTitle>
              <InfoText>info@tourist.com</InfoText>
            </InfoGroup>

            <InfoGroup>
              <InfoTitle>Business Hours</InfoTitle>
              <InfoText>Monday - Friday: 9am to 5pm</InfoText>
              <InfoText>Saturday: 10am to 2pm</InfoText>
              <InfoText>Sunday: Closed</InfoText>
            </InfoGroup>
          </ContactInfo>
        </RightColumn>
      </TwoColumnLayout>
    </Container>
  );
}

// --- Styled Components (unchanged or slightly updated)
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const RightColumn = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #444;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #4ca5af;
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.9rem;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4ca5af;
  }
`;

const SubmitButton = styled.button`
  background-color: #4ca5af;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background-color: #3d8b94;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  color: #444;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  color: #666;
  margin: 0.2rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
`;
