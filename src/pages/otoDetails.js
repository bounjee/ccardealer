import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ReactComponent as KibrisarabamLogo } from '../assets/kibrislogo.svg';
import { ReactComponent as PhoneLogo } from '../assets/phone.svg'; // Telefon ikonu
import { ReactComponent as WhatsappLogo } from '../assets/whatsapp.svg'; // WhatsApp ikonu
import { ReactComponent as bigRect } from '../assets/bigRect.svg';
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import '@splidejs/react-splide/css';
import './otoDetails.css'









function otoDetails() {
  return (
    <div className='main-clSass'>
      {/* --------HEADER SECTION-------- */}
      <div className='header'>
        <div className='header_logo'>
        <KibrisarabamLogo /> 
        </div>
        <div className='header_menu'>
          <ul className='header_menu-item'>Anasayfa</ul>
          <ul className='header_menu-item'>Araçlarımız</ul>
          <ul className='header_menu-item'>İletişim</ul>
        </div>
        <div className='header_buttons'>
          <div className='header_menu-button-phone'>
          <PhoneLogo /> 
          </div>
          <div className='header_menu-button-whatsapp'>
          <WhatsappLogo /> 
          </div>
        </div>
      </div>

     {/* --------MAIN SECTION-------- */}
     <Splide aria-label="My Favorite Images">
  <SplideSlide>
  <bigRect /> 
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>


      {/* --------FOOTER SECTION-------- */}
      <footer className='footer'>
        <div className='footer_menu'>
          <ul className='footer_menu-item'>Yerimiz</ul>
          <ul className='footer_menu-item'>Araçlarımız</ul>
          <ul className='footer_menu-item'>İletişim</ul>
        </div>
        <div className='footer_icons'>
          <ul className='footer_menu-instagram'>
          <InstagramLogo/>
          </ul>
        </div> 
        <div className='footer_company-text'>Kibrisarabam @ 2024 All rights reserved.</div>
      </footer>
    </div>
  );
}

export default otoDetails;
