// AboutUs.js
import React from 'react';
import "./styles.css"; // Import CSS for styling

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-header">
        <h1>About FitFounder Gym</h1>
        <p>Your Journey to Fitness Begins Here</p>
      </div>
      <section className="about-section">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At FitFounder Gym, our mission is to empower individuals to achieve
            their health and fitness goals through expert coaching, cutting-edge
            facilities, and a supportive community. We believe that fitness is
            not just about the body but also the mind, and we are here to guide
            you every step of the way.
          </p>
        </div>
        <div className="about-vision">
          <h2>Our Vision</h2>
          <p>
            To be the leading fitness destination that inspires and transforms
            lives globally. FitFounder Gym envisions a world where everyone has
            access to the tools, resources, and motivation needed to lead a
            healthier, happier life.
          </p>
        </div>
        <div className="about-team">
          <h2>Meet the Team</h2>
          <p>
            Our team of certified trainers, nutritionists, and wellness experts
            is dedicated to providing personalized support tailored to your
            unique needs. Together, we strive to create an environment that is
            welcoming, inclusive, and driven by results.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

