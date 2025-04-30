import React from 'react';
import styled from 'styled-components';
import avatarImage from '../assets/avatarImage.jpg';  // Use an appropriate avatar image path

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            "I always dreamed of visiting Europe, and [Agency Name] made it possible! From flight bookings to hotel reservations and tours, everything was so smooth. The team was always available to assist us with any concerns, and the travel itinerary was perfectly planned. It truly felt like a personalized experience. Highly recommend their services for anyone looking to travel hassle-free!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Priya S.</h4>
              <span>Chennai</span>
            </div>
          </div>
        </div>
        
        <div className="testimonial">
          <p>
            "We wanted a honeymoon that was stress-free and memorable, and [Agency Name] did not disappoint! The team helped us choose the perfect destination, and everything was organized perfectly, from our romantic dinner to our sightseeing excursions. We couldn't have asked for a better experience."
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Arun & Nisha</h4>
              <span>Bangalore</span>
            </div>
          </div>
        </div>
        
        <div className="testimonial">
          <p>
            "I’ve been on many vacations, but [Agency Name] truly gave me the best value for my money. The package was affordable, yet the quality of service exceeded my expectations. The hotel was gorgeous, the tours were well-organized, and every moment of our trip felt like a luxury experience. Definitely booking my next trip with them!"
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Manish K.</h4>
              <span>Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }

  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      width: 300px;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
        color: #333;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
            color: #777;
          }
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
