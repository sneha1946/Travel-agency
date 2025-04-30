import React, { useState } from "react";
import styled from "styled-components";
import homeImage from "../assets/hotel8.jpg";

export default function Hero() {
  // State to store the location input
  const [location, setLocation] = useState("");

  // Function to generate Google Maps link based on the location input
  const generateMapLink = () => {
    if (location) {
      return `https://www.google.com/maps/search/?q=${encodeURIComponent(location)}`;
    }
    return "";
  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Travel Background" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Discover new places, experience new adventures, and make unforgettable memories.
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="location">Where do you want to go?</label>
            <input
              type="text"
              id="location"
              placeholder="Search your location"
              value={location} // Binding state to input value
              onChange={(e) => setLocation(e.target.value)} // Update state on input change
            />
          </div>
          <div className="container">
            <label htmlFor="check-in">Check-in</label>
            <input type="date" id="check-in" />
          </div>
          <div className="container">
            <label htmlFor="check-out">Check-out</label>
            <input type="date" id="check-out" />
          </div>
          {/* Use a link to open the generated map in a new tab */}
          <a
            href={generateMapLink()} // The generated Google Maps link
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Explore Now</button>
          </a>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }
  }

  .content {
    position: relative;
    z-index: 2;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .title {
      color: white;

      h1 {
        font-size: 3rem;
        letter-spacing: 0.2rem;
        margin-bottom: 1rem;
      }

      p {
        text-align: center;
        padding: 0 15vw;
        font-size: 1.2rem;
      }
    }

    .search {
      display: flex;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1.5rem;
      border-radius: 0.75rem;
      gap: 1.5rem;
      flex-wrap: wrap;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        label {
          font-size: 1.1rem;
          color: #03045e;
          margin-bottom: 0.5rem;
        }

        input {
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          width: 16rem;
          font-size: 1rem;
          color: #333;

          &[type="date"] {
            padding-left: 1rem;
          }

          &::placeholder {
            color: #666;
          }

          &:focus {
            outline: none;
            border-color: #4361ee;
          }
        }
      }

      button {
        padding: 1rem 2rem;
        background-color: #4361ee;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-size: 1.1rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #023e8a;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    height: auto;
    padding-bottom: 2rem;

    .content {
      .title {
        h1 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
          padding: 0 1rem;
        }
      }

      .search {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;

        .container {
          width: 100%;
          input {
            width: 100%;
          }
        }

        button {
          width: 100%;
        }
      }
    }
  }
`;
