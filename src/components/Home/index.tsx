import Navbar from "../Navbar";
import BannerImg1 from "../../Images/Banner1.jpg";
import BannerImg2 from "../../Images/Banner2.jpg";

import BannerImg3 from "../../Images/Banner3.jpg";

import BannerImg4 from "../../Images/Banner4.jpeg";
import MaterimonyLogo from '../../Images/materimony_logo.png';
import DonationLogo from '../../Images/Donation_logo.png';
import Project1 from '../../Images/project1.jpg';
import Project2 from '../../Images/project2.jpg';
import Project3 from '../../Images/project3.jpg';
import Project4 from '../../Images/project4.jpg';

import Event1 from '../../Images/Event1.jpeg'
import Event2 from '../../Images/Event2.jpg'
import Event3 from '../../Images/Event3.jpg'

import MainLogo from "../../Images/napalogo.png";
import presidentLogo from '../../Images/presidentlogo.jpg'

import "./index.css";


import 'aos/dist/aos.css';
import AOS from 'aos'
import { useEffect } from "react";
import Footer from "../footer";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div>
      <Navbar />
      <div>
        {/* carousel start */}
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src={BannerImg1}
                className="carousel-banner-img d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={BannerImg2}
                className="carousel-banner-img d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={BannerImg3}
                className="carousel-banner-img d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={BannerImg4}
                className="carousel-banner-img d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* carousel end */}
      </div>


      <div className="container home-services-main-container">
        <h2 className="services-heading">Services</h2>
        <p className="services-description">The North America Padmashali Association (NAPA) connects the Telugu-speaking Padmashali community through Matrimony services and charitable donations, fostering relationships and promoting community development in the U.S. and Canada.</p>
      
      <div className="services-main-container">
        
            <div className="service-card" >
            
              <img src={MaterimonyLogo} alt="Service 1" width={150} height={150} />
              <h3 className="services-card-heading">Matrimony Services</h3>
              <p className="services-card-description">NAPA provides Matrimony services to help the Telugu-speaking Padmashali community form meaningful connections.</p>
              <button className="services-card-button">Learn More</button>
            </div>
            <div className="service-card">
              <img src={DonationLogo} alt="Service 1" width={150} height={150} />
              <h3 className="services-card-heading">Charitable Donations</h3>
              <p className="services-card-description">NAPA supports charitable initiatives, encouraging members to contribute and positively impact the community.</p>
              <button className="services-card-button">Learn More</button>
          </div>
         
          
      </div>
      </div>

      <div className="container">
        <div className="projects-home">
        <h3 className="projects-home-heading">Our Recent Projects</h3>
        <button className="projects-home-heading-button">View More</button>
        </div>
        <div className="project-cards"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <div className="project-card">
            <img src={Project1} className="project-card-img" alt="Project 1" />
            <h4 className="projects-card-home-heading">Global Padmashali Sumit</h4>
           
          </div>
          <div className="project-card">
            <img src={Project2} className="project-card-img" alt="Project 2" />
            <h4 className="projects-card-home-heading">Prathibha</h4>
            
          </div>
          <div className="project-card">
            <img src={Project3} className="project-card-img" alt="Project 3" />
            <h4 className="projects-card-home-heading">Student Education Support</h4>
            
          </div>
          <div className="project-card">
            <img src={Project4} className="project-card-img" alt="Project 3" />
            <h4 className="projects-card-home-heading">POPA Nalgonda Old age Home</h4>
            
          </div>
          
        </div>
      </div>

      <div className="container">
        <div className="events-home">
        <h3 className="events-home-heading">Our Events</h3>
        
        </div>
        <div className="events-cards"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
          <div className="events-card">
            <img src={Event1} className="events-card-img" alt="Project 1" />
            <h4 className="events-card-home-heading">NAPA 11th Annual Convention</h4>
           
          </div>
          <div className="events-card">
            <img src={Event2} className="events-card-img" alt="Project 2" />
            <h4 className="events-card-home-heading">NAPA Carolinas Chapter Launch</h4>
            
          </div>
          <div className="events-card">
            <img src={Event3} className="events-card-img" alt="Project 3" />
            <h4 className="events-card-home-heading">NAPA Seattle Vanabhojanalu</h4>
            
          </div>

          
        </div>
      </div>

      <div className="container home-aboutus-container">
          <div className="col-6 home-aboutus-img-container" data-aos="fade-right">
            <img src={MainLogo} className="home-aboutus-img" alt="home-aboutus-img"/>
          </div>
          <div className="home-aboutus-text-container" data-aos="fade-left"> 
            <h3 className="home-aboutus-text-heading">About Us</h3>
            <p className="home-aboutus-text-description">Padmashalis are a Telugu speaking community with roots tracing back to Markandeya Maharishi. We are the third largest community and form 12% of the population of Andhra Pradesh and Telangana. Our community also has a large presence across India, including Maharashtra and Gujarat. Padmashalis are traditionally a weaving and artisan community but over time, many members from our community have successfully moved into modern professions. As a result, our community spread all over the world, including the United States of America and Canada </p>
          </div>
      </div>

      <div className="container home-aboutus-container">
          
          <div className="home-aboutus-text-container" data-aos="fade-right"> 
            <h3 className="home-aboutus-text-heading">President Message</h3>
            <h5 className="home-president-name">Srinivas Sayini</h5>
            <p className="home-aboutus-text-description">Dear NAPA Family,
            </p>

            <p className="home-aboutus-text-description">I am deeply honored to serve as the President of NAPA, and I sincerely thank the NAPA Advisory Council, the Executive team, and the entire NAPA family for their unanimous support.
            </p>

            <button className="home-president-button">Learn More</button>
          </div>
          <div className="col-6 home-aboutus-img-container" data-aos="fade-left">
            <img src={presidentLogo} className="home-president-img" alt="home-aboutus-img"/>
          </div>
      </div>


      <Footer/>
    </div>
  );
};

export default Home;
