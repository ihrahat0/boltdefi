import React from 'react';
import { Link } from 'react-router-dom';
import shapeDot from '../../../images/shapes/shape_dot.png';
import shapeSignBoard from '../../../images/shapes/shape_sign_board_4.webp';
import shapeGround from '../../../images/shapes/shape_send_ground.webp';
import shapeDragonfly from '../../../images/shapes/shape_dragonfly.png';
import shapeTree from '../../../images/shapes/shape_tree_1.webp';
import shapeCloud from '../../../images/shapes/shape_cloud_2.png';

const Footer = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <footer className="pepecoin_site_footer">
      <div className="container position-relative z-2">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="pepecoin_heading_block">
              <div className="row align-items-center mb-1">
                <div className="col-lg-7">
                  <h2 className="heading_text text-uppercase mb-0">
                    Contact
                  </h2>
                </div>
                <div className="col-lg-5">
                  <ul className="social_block style_3 unordered_list">
                    <li>
                      <Link to="/" style={{ backgroundImage: `url(${shapeDot})` }}>
                        <i className="fa-brands fa-telegram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" style={{ backgroundImage: `url(${shapeDot})` }}>
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/" style={{ backgroundImage: `url(${shapeDot})` }}>
                        <i className="fa-brands fa-discord"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="heading_description mb-0">
                $BOLT – The Fastest Meme in Crypto. Powered by DeFi. Driven by community. Blink and you're already late.
              </p>
            </div>
            <div className="btns_group p-0 justify-content-center position-relative z-2">
              <Link className="pepecoin_btn text-white" to="/token" onClick={ClickHandler}>
                <span className="btn_label">Buy $BOLT</span>
                <span className="btn_bg">
                  <svg viewBox="0 0 180 62" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.08526 12.4119C-0.482482 6.10381 4.29004 0 10.79 0H169.211C175.711 0 180.484 6.10384 178.916 12.4119L175.495 26.1761C174.708 29.3439 174.708 32.6561 175.495 35.8239L178.916 49.5881C180.484 55.8962 175.711 62 169.211 62H10.79C4.29004 62 -0.48248 55.8962 1.08526 49.5881L4.50607 35.8238C5.29333 32.6561 5.29333 29.3439 4.50607 26.1762L1.08526 12.4119Z" fill="#0B902B"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shape_sign_board">
        <img src={shapeSignBoard} alt="Sign Board" />
      </div>
      <div className="shape_ground">
        <img src={shapeGround} alt="Ground Shape" />
      </div>
      <div className="shape_dragonfly">
        <img src={shapeDragonfly} alt="Dragonfly" />
      </div>
      <div className="shape_tree" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
        <img src={shapeTree} alt="Tree" />
      </div>
      <div className="shape_cloud">
        <img src={shapeCloud} alt="Cloud" />
      </div>
      <div className="footer_bottom text-center">
        <p className="copyright_text m-0 text-uppercase text-white">
          Copyright© 2025 $BOLT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
