import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import HeroSection from './HeroSection';
import Info from './Info';
import LoginSection from './LoginSection';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
      return (
            <div className='px-12'>
                  <Banner></Banner>
                  <Info></Info>
                  <Services></Services>
                  <HeroSection></HeroSection>
                  <MakeAppointment></MakeAppointment>
                  <Testimonials></Testimonials>
                  <LoginSection></LoginSection>
                  <Footer></Footer>
            </div>
      );
};

export default Home;