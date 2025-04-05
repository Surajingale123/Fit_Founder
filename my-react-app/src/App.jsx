
// import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import AboutUs from './components/Aboutus.jsx';
import Gallery from './components/Gallery.jsx';
import BMICalculator from './components/BMICalculator.jsx';
import ContactUs from './components/ContactUs.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import './App.css'; // Importing CSS
import Membership from './components/Membership.jsx';
import UserDashboard from './components/UserDashboard.jsx';
// import GymMembership from './components/Membership.js';
import "bootstrap/dist/css/bootstrap.min.css";
import TrainerDashboard from './components/TrainerDashboard.jsx';
import AdminDashboard from './AdminDashboard';
function App() {
  return (
    <div>
<Router>
      <nav className="navbar">
        <div className="logo">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c4c872123266785.60eb23084b18f.png" alt="FitFounder" />    
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/bmi-calculator">BMI Calculator</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bmi-calculator" element={<BMICalculator />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/UserDasboard" element={<UserDashboard />} />
        <Route path="/TrainerDashboard" element={<TrainerDashboard />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
</Router>
    </div>
  );
}

export default App;
