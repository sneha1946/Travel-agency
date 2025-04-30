import styled from "styled-components";
import {
  FaGlobe,
  FaHotel,
  FaBookOpen,
  FaCalendarAlt,
  FaHiking,
  FaHeadset
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: "worldwide-tours",
      icon: <FaGlobe />,
      title: "WorldWide Tours",
      description:
        "Best flight deals and vacation packages. We partner with leading airlines to offer you competitive prices and flexible booking options for your global adventures."
    },
    {
      id: "hotel-reservation",
      icon: <FaHotel />,
      title: "Hotel Reservation",
      description:
        "Book from our curated selection of hotels. From luxury resorts to cozy boutique accommodations, we ensure your stay is comfortable and memorable."
    },
    {
      id: "travel-guides",
      icon: <FaBookOpen />,
      title: "Travel Guides",
      description:
        "Expert guides for your dream destination. Our knowledgeable local guides will show you hidden gems and provide cultural insights for an authentic experience."
    },
    {
      id: "event-management",
      icon: <FaCalendarAlt />,
      title: "Event Management",
      description:
        "Custom travel itineraries and events. Let us plan your perfect vacation with personalized schedules tailored to your interests and preferences."
    },
    {
      id: "adventure-expeditions",
      icon: <FaHiking />,
      title: "Adventure Expeditions",
      description:
        "Thrilling adventures for nature enthusiasts. Trek through mountains, explore jungles, or dive into the ocean with our specialized adventure packages."
    },
    {
      id: "24-7-customer-support",
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Round-the-clock assistance for travelers. Our dedicated support team is always available to help you with any issues or questions during your journey."
    }
  ];

  return (
    <ServicesContainer>
      <Header>
        <h1>Our Services</h1>
        <p>Comprehensive travel solutions tailored to your needs</p>
      </Header>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} id={service.id}>
            <Icon>{service.icon}</Icon>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CallToAction>
        <h2>Ready to Start Your Adventure?</h2>
        <p>Our team of travel experts is ready to help you plan your perfect trip</p>
        <Button>Contact Us Today</Button>
      </CallToAction>
    </ServicesContainer>
  );
};

// Styled Components
const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #0077b6;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: #023e8a;
    margin: 1.5rem 0 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #555;
    line-height: 1.6;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: #48cae4;
`;

const CallToAction = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
  padding: 3rem 2rem;
  border-radius: 10px;
  color: white;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const Button = styled.button`
  background: white;
  color: #0077b6;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e9f5ff;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default Services;
