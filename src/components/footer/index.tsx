import  { useState } from 'react';
import './index.css'
import LogoContainer from '../../Images/napalogo.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    if (email) {
      console.log(`Subscribed with email: ${email}`);
      // Handle the newsletter subscription here
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <><div className="footer">
          <div className="container">
              <div>
                  <img src={LogoContainer} alt="NAPA Logo" />
              </div>
              <div className='footer-list-container'>
                  <h3 className='footer-list-container-heading'>We Are Here</h3>
                  <p className='footer-list-container-heading'>Email: info@napausa.org</p>
                  <p className='footer-list-container-heading'>Tel: +1(703)599 0008</p>
              </div>
              <div className='footer-list-container'>
                  <h3 className='footer-list-container-heading'>Useful Links</h3>
                  <p className='footer-list-container-heading'>Our Programs</p>
                  <p className='footer-list-container-heading'>Our Gallery</p>
                  <p className='footer-list-container-heading'>Our Events</p>
                  <p className='footer-list-container-heading'>About Us</p>
              </div>
              <div className='footer-list-container'>
                  <h3>Get all the latest news & updates.</h3>
                  <form onSubmit={handleSubscribe}>
                      <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required />
                      <button type="submit">Subscribe</button>
                  </form>
              </div>
          </div>


      </div><div className="footer-copyright">
              <p>&copy; 2024 North America Padmashali Association. All Rights Reserved.</p>
          </div></>
  );
};

export default Footer;
