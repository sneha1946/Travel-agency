import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Recommend from "./Components/Recommend";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ForgetPasswordPage from "./Components/ForgetPasswordPage";
import PrivacyPolicyPage from "./Components/PrivacyPolicyPage";
import TermsAndConditionsPage from "./Components/TermsAndConditionsPage";
import ContactUs from './Components/ContactUsPage';
import About from "./Components/About";
import Faq from "./Components/Faq";  // Ensure correct case for import
import BookingTracker from "./Components/BookingTracker";



import scrollreveal from "scrollreveal";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer`,
      {
        opacity: 0.8,
        interval: 300,
      }
    );
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Hero />
              <Services />
              <Recommend />
              <Testimonials />
            </Main>
          }
        />
        
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} /> {/* ✅ FAQ Page Added */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<BookingTracker />} />

      </Routes>
      <Footer />
    </Router>
  );
}

const Main = styled.main``;
