import React from "react";
import "./Styles/About.css";

function About() {
  return (
    <div className="containt">
    <div className="about-container">
      <h1 className="about-heading">About FitnessTracking</h1>
      <p className="about-paragraph">
        FitTracker is your ultimate fitness companion designed to help you live a healthier,
        more active lifestyle. Whether you're just starting out or an experienced athlete,
        our app offers tools and insights tailored to your unique fitness journey.
      </p>

      <h2 className="about-subheading">Our Mission</h2>
      <p className="about-paragraph">
        At FitTracker, our mission is to empower individuals worldwide to take control of
        their health and wellness by providing a simple, intuitive, and powerful platform.
        We believe everyone deserves the chance to achieve their fitness goals and celebrate
        every milestone along the way.
      </p>

      <h2 className="about-subheading">What We Offer</h2>
      <p className="about-paragraph">
        FitTracker combines smart tracking features with motivational tools to keep you
        engaged and focused. Our app helps you:
      </p>
      <ul className="about-list">
        <li>Log your daily workouts and monitor your progress</li>
        <li>Track nutrition and calorie intake to maintain a balanced diet</li>
        <li>Set and customize personal fitness goals, such as weight loss, muscle gain, or endurance improvement</li>
        <li>Analyze detailed statistics through interactive charts and reports</li>
        <li>Receive daily motivational quotes and reminders to stay consistent</li>
        <li>Export your data easily to CSV or PDF for your records or sharing with trainers</li>
      </ul>

      <h2 className="about-subheading">Why Choose Fitness-Tracking?</h2>
      <p className="about-paragraph">
        Unlike generic fitness apps, FitTracker is built with a user-centric design,
        focusing on simplicity and personalization. Whether you want to shed a few pounds,
        build muscle, or just stay active, our app adapts to your lifestyle.
      </p>

      <h2 className="about-subheading">Community & Support</h2>
      <p className="about-paragraph">
        Join a community of fitness enthusiasts who share their progress, tips, and motivation.
        Our support team is always ready to help you with any questions or feedback to improve your experience.
      </p>

      <h2 className="about-subheading">Get Started Today</h2>
      <p className="about-paragraph">
        Take the first step towards a healthier life. Download FitTracker, set your goals,
        and start your fitness journey with us. Remember, every step counts!
      </p>
    </div>
    </div>
  );
}

export default About;
