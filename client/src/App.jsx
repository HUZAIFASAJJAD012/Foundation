import './App.css';
import Navbar from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Loginpage';  // Assuming LoginPage is a separate file
import Footer from './components/Footer';
import ContactForm from './pages/ContactForm';
import DonationForm from './pages/DonationForm';
import DonationRegister from './pages/DonationRegister';
import Causes from './pages/Causes';
import RegistrationForm from './pages/RegistrationForm ';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/donationform" element={<DonationForm />} />
        <Route path="/donationregister" element={<DonationRegister />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/registrationform" element={<RegistrationForm />} />
        <Route path="/aboutus" element={<AboutUs/>} />

      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
