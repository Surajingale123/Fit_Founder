// Home.js
// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <h1>Welcome to FitFounder Gym</h1>
        <p className="lead">Your journey to a healthier lifestyle starts here.</p>
        <a href="#services" className="btn btn-primary btn-lg mt-3">Explore More</a>
      </header>

      {/* About Section */}
      <section className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/56/f3/ea/sheraton-miramar-hotel.jpg?w=1200&h=-1&s=1"
              alt="Gym workout"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>
              At FitFounder Gym, we are dedicated to providing you with state-of-the-art facilities,
              professional trainers, and an environment that motivates you to achieve your fitness goals.
            </p>
            <ul>
              <li>Modern Equipment</li>
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/012/999/177/small_2x/handsome-adult-caucasian-men-swing-battler-ropes-to-do-crossfit-exercise-inside-of-fitness-gym-to-workout-for-body-strength-and-firm-arms-muscle-and-good-physical-body-health-photo.jpg"
                alt="Weight Training"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Weight Training</h5>
              <p>Build strength and muscle with our top-of-the-line equipment.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://studyfinds.org/wp-content/uploads/2019/02/AdobeStock_174210108-1024x683.jpeg"
                alt="Cardio Fitness"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Cardio Fitness</h5>
              <p>Improve your endurance with our variety of cardio machines.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://img.freepik.com/premium-photo/woman-hands-hold-hands-together-is-symbol-prayer-gratitude_650851-3140.jpg"
                alt="Yoga Classes"
                className="img-fluid mb-3 rounded-circle"
              />
              <h5>Yoga Classes</h5>
              <p>Relax and rejuvenate with our expert-led yoga sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mt-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/PT-Member-Leg-Press.jpg?fit=1125%2C750&ssl=1"
              alt="Gallery 1"
              className="img-fluid rounded mb-4"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/PT-Member-Medball-Pass.jpg?fit=1125%2C750&ssl=1"
              alt="Gallery 2"
              className="img-fluid rounded mb-4"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://i0.wp.com/goldsgym.in/wp-content/uploads/2023/12/PT-Area.jpg?fit=1125%2C750&ssl=1"
              alt="Gallery 3"
              className="img-fluid rounded mb-4"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-0">Contact Us: info@FitFounder.com | Phone: (012) 456-7890</p>
        <p>&copy; 2024 FitFounder Gym. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
