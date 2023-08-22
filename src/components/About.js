import React from 'react';
import './About.css'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <p className="about-paragraph">
      Welcome to URLZenith - Your Gateway to Organized Bookmarking...
      </p>
      <div className="about-section">
        <div className="about-subsection">
          <h2 className="subsection-heading">Who We Are</h2>
          <p className="subsection-paragraph">
          At URLZenith, we are a team of passionate individuals driven by the vision of making online bookmarking an elegant and efficient experience. Our dedication to crafting a seamless platform stems from our deep understanding of the digital landscape. We're here to simplify your browsing, helping you rediscover the joy of effortlessly accessing your favorite online destinations
          </p>
        </div>
        <div className="about-subsection">
          <h2 className="subsection-heading">Our Mission</h2>
          <p className="subsection-paragraph">
          At URLZenith, our mission is clear: revolutionize your online experience. We're committed to delivering a streamlined and innovative bookmarking solution that amplifies your digital productivity. Through user-centric design, efficient organization, and effortless access, we empower you to navigate the web with finesse. Join us as we simplify your digital journey and redefine bookmarking{' '}
            <a href="mailto:contact@example.com">For Additional Assistance, Contact Us</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
