import React from 'react';
import icon_facebook from '../../../assets/icon/icon_facebook.png'
import icon_instagram from '../../../assets/icon/icon_instagram.png'
import icon_mail from '../../../assets/icon/icon_mail.png'
import icon_twitch from '../../../assets/icon/icon_twitch.png'
import icon_twitter from '../../../assets/icon/icon_twitter.png'
import logo from '../../../assets/icon/logo.png'
import './footer.css'
import {NavLink} from 'react-router-dom'

export default function FooterCoy() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="address">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
              <ul className='contact p-0'>
                <li> <a href="mailto:binarcarrental@gmail.com">binarcarrental@gmail.com</a></li>
                <li> <a href="tel:081233334808">081-233-334-808</a></li>
              </ul>
          </div>

{/* FEATURES SECTION */}
          <div className="col-md-3">
            <div className='features'>
              <ul>
                <li><NavLink to={""}>Our Service</NavLink></li>
                <li><NavLink to={""}>Why Us</NavLink></li>
                <li><NavLink to={""}>Testimonial</NavLink></li>
                <li><NavLink to={""}>Our Service</NavLink></li>
              </ul>
            </div>
          </div>

{/* ICON SECTION */}
          <div className="col-md-3">
            <div className='icon-link'>
            <h5>
              Connect With us
            </h5>
            <ul>
              <li> <NavLink to={"#"}><img src={icon_facebook} alt='icon_facebook' /></NavLink></li>
              <li> <NavLink to={"#"}><img src={icon_instagram} alt='icon_instagram' /></NavLink></li>
              <li> <NavLink to={"#"}><img src={icon_mail} alt='icon_mail' /></NavLink></li>
              <li> <NavLink to={"#"}><img src={icon_twitch} alt='icon_twitch' /></NavLink></li>
              <li><NavLink to={"#"}><img src={icon_twitter} alt='icon_twitter' /></NavLink></li>
            </ul>
            </div>
          </div>

{/* COPYRIGHT SECTION */}
            <div className="col-md-3">
              <div className='copyright'>
                <h5>Copyright Binar 2022</h5>
                <img src={logo} alt='logo' />
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
