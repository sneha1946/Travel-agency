import styled from "styled-components";
import { FaGlobeAmericas, FaUserFriends, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpeg";
import aboutHero from "../assets/image2.jpg";


const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <h1>About Tourist</h1>
          <p>Your trusted travel partner for unforgettable vacation experiences worldwide.</p>
        </HeroContent>
      </HeroSection>

      <Section>
        <h2>Our Story</h2>
        <p>
          Founded in 2010, Tourist began with a simple mission: to make travel accessible, 
          enjoyable, and memorable for everyone. What started as a small local agency has 
          grown into a global travel company serving thousands of happy travelers each year.
        </p>
        <p>
          Our founders, passionate travelers themselves, recognized the need for a service 
          that offered personalized travel experiences with the convenience of modern technology. 
          Over the years, we've curated relationships with the best hotels, airlines, and local 
          tour guides worldwide.
        </p>
        <p>
          Today, we're proud to be one of the most trusted names in travel, helping our clients 
          create memories that last a lifetime through carefully crafted travel experiences.
        </p>
      </Section>

      <ImageSection>
        <img src={aboutHero} alt="Tourist team on a beach" />
      </ImageSection>

      <StatsSection>
        <StatItem>
          <h3>10+</h3>
          <p>Years of Experience</p>
        </StatItem>
        <StatItem>
          <h3>50k+</h3>
          <p>Happy Travelers</p>
        </StatItem>
        <StatItem>
          <h3>100+</h3>
          <p>Destinations</p>
        </StatItem>
        <StatItem>
          <h3>24/7</h3>
          <p>Customer Support</p>
        </StatItem>
      </StatsSection>

      <Section>
        <h2>Meet Our Team</h2>
        <TeamGrid>
          <TeamMember>
            <TeamImage src={team1} alt="Sarah Johnson" />
            <h4>Sarah Johnson</h4>
            <p>Founder & CEO</p>
          </TeamMember>
          <TeamMember>
            <TeamImage src={team2} alt="Michael Chen" />
            <h4>Michael Chen</h4>
            <p>Head of Operations</p>
          </TeamMember>
          <TeamMember>
            <TeamImage src={team3} alt="Emma Rodriguez" />
            <h4>Emma Rodriguez</h4>
            <p>Travel Specialist</p>
          </TeamMember>
          <TeamMember>
            <TeamImage src={team4} alt="David Kim" />
            <h4>David Kim</h4>
            <p>Customer Relations</p>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section>
        <h2>Why Choose Tourist</h2>
        <FeaturesGrid>
          <Feature>
            <FeatureIcon>
              <FaGlobeAmericas />
            </FeatureIcon>
            <h4>Quality Service</h4>
            <p>Our dedication to excellence ensures you receive the highest quality service from start to finish.</p>
          </Feature>
          <Feature>
            <FeatureIcon>
              <FaUserFriends />
            </FeatureIcon>
            <h4>Expert Local Guides</h4>
            <p>Our network of knowledgeable local guides provides authentic experiences in every destination.</p>
          </Feature>
          <Feature>
            <FeatureIcon>
              <FaMapMarkerAlt />
            </FeatureIcon>
            <h4>Personalized Trips</h4>
            <p>We create customized itineraries tailored to your preferences, needs, and travel style.</p>
          </Feature>
          <Feature>
            <FeatureIcon>
              <FaHeadset />
            </FeatureIcon>
            <h4>24/7 Support</h4>
            <p>Our dedicated team is available around the clock to assist you before, during, and after your trip.</p>
          </Feature>
        </FeaturesGrid>
      </Section>
    </AboutContainer>
  );
};

// Styled Components
const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${aboutHero});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 50px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  margin: 60px 0;
  
  h2 {
    color: #0077b6;
    font-size: 2rem;
    margin-bottom: 30px;
    text-align: center;
  }

  p {
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const ImageSection = styled.div`
  margin: 40px 0;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 60px 0;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  padding: 30px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

  h3 {
    color: #0077b6;
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #333;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;

  h4 {
    margin-top: 20px;
    color: #0077b6;
  }

  p {
    color: #666;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  max-width: 200px;
  border: 5px solid #0077b6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  text-align: center;
  padding: 30px 20px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h4 {
    margin: 20px 0 15px;
    color: #0077b6;
  }

  p {
    color: #666;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #0077b6;
`;

export default About;