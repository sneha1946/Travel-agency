import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <FooterContainer>
      <MainContent>
        <BrandSection>
          <BrandTitle>Tourist</BrandTitle>
          <BrandTagline>
            Your trusted travel partner for unforgettable vacation experiences worldwide.
          </BrandTagline>
          <SocialLinks>
            <SocialLink href="#">Facebook</SocialLink>
            <SocialLink href="#">Instagram</SocialLink>
            <SocialLink href="#">Twitter</SocialLink>
          </SocialLinks>
        </BrandSection>

        <LinksSection>
          <LinksColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact-us">Contact</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Services</ColumnTitle>
            <FooterHashLink smooth to="/services#tours">Tours</FooterHashLink>
            <FooterHashLink smooth to="/services#hotel-booking">Hotel Booking</FooterHashLink>
            <FooterHashLink smooth to="/services#flight-booking">Flight Booking</FooterHashLink>
            <FooterHashLink smooth to="/services#travel-guides">Travel Guides</FooterHashLink>
            <FooterHashLink smooth to="/services#event-planning">Event Planning</FooterHashLink>
          </LinksColumn>

          <LinksColumn>
            <ColumnTitle>Contact</ColumnTitle>
            <ContactInfo>123 Dholakapur, pechalwanpur City</ContactInfo>
            <ContactInfo>Phone: +91 6381761735</ContactInfo>
            <ContactInfo>Email: mhdashiisneha@gmail.com</ContactInfo>
            <ContactInfo>Hours: Mon-Fri 9am-5pm</ContactInfo>
          </LinksColumn>
        </LinksSection>
      </MainContent>

      <Copyright>
        © 2025 Tourist. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background-color: #2d3436;
  color: #fff;
  padding: 3rem 2rem 1rem;
  font-family: 'Arial', sans-serif;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const BrandSection = styled.div`
  flex: 1;
  min-width: 250px;
`;

const BrandTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #00b894;
`;

const BrandTagline = styled.p`
  color: #b2bec3;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: #dfe6e9;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00b894;
  }
`;

const LinksSection = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const LinksColumn = styled.div`
  flex: 1;
  min-width: 150px;
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #00b894;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #b2bec3;
  margin-bottom: 0.8rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00b894;
  }
`;

const FooterHashLink = styled(HashLink)`
  display: block;
  color: #b2bec3;
  margin-bottom: 0.8rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00b894;
  }
`;

const ContactInfo = styled.p`
  color: #b2bec3;
  margin-bottom: 0.8rem;
  line-height: 1.5;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  color: #b2bec3;
  font-size: 0.9rem;
`;

export default Footer;
