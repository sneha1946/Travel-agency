import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "#recommend", label: "Places" },
    { path: "/services", label: "Services" },
    { path: "#testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact Us" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Sign Up" },
    { path: "/booking", label: "Booking" },

 
     // 🆕 Added this line
   
     
  ];

  return (
    <>
      <NavBar>
        <BrandWrapper>
          <LogoLink to="/">
            <Logo src={logo} alt="Travelo logo" />
            <BrandName>Travelo</BrandName>
          </LogoLink>

          <MobileMenuToggle onClick={toggleMenu}>
            {isMenuOpen ? <VscChromeClose /> : <GiHamburgerMenu />}
          </MobileMenuToggle>
        </BrandWrapper>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavItem key={index} onClick={closeMenu}>
              {item.path.startsWith("#") ? (
                <a href={item.path}>{item.label}</a>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </NavItem>
          ))}
          <ConnectButton>Connect</ConnectButton>
        </NavLinks>
      </NavBar>

      <MobileMenu isOpen={isMenuOpen}>
        {navItems.map((item, index) => (
          <MobileNavItem key={index} onClick={closeMenu}>
            {item.path.startsWith("#") ? (
              <a href={item.path}>{item.label}</a>
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </MobileNavItem>
        ))}
      </MobileMenu>
    </>
  );
}

// Styled Components
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 1081px) {
    width: auto;
    justify-content: flex-start;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
`;

const BrandName = styled.span`
  font-weight: 900;
  font-size: 1.5rem;
  color: #0077b6;
  text-transform: uppercase;
`;

const MobileMenuToggle = styled.div`
  font-size: 1.8rem;
  color: #0077b6;
  cursor: pointer;

  @media (min-width: 1081px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: none;
  list-style: none;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 1081px) {
    display: flex;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #0077b6;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s ease;
    padding: 0.5rem;

    &:hover {
      color: #023e8a;
      font-weight: 700;
    }
  }
`;

const ConnectButton = styled.button`
  background-color: #48cae4;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
  margin-left: 0.5rem;

  &:hover {
    background-color: #023e8a;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "70px" : "-400px")};
  left: 0;
  width: 100%;
  background-color: #ffffff;
  transition: top 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  @media (min-width: 1081px) {
    display: none;
  }
`;

const MobileNavItem = styled.div`
  padding: 1rem 2rem;

  a {
    display: block;
    text-decoration: none;
    color: #0077b6;
    font-size: 1.2rem;
    transition: 0.3s ease;
    padding: 0.5rem 0;

    &:hover {
      color: #023e8a;
      font-weight: bold;
    }
  }
`;
