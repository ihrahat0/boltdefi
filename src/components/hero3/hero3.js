import React, { useState } from 'react';
import pepeCoinImg from '../../images/shapes/shape_pepecoin_1.webp';
import leafImg1 from '../../images/shapes/shape_leaf_1.webp';
import leafImg2 from '../../images/shapes/shape_leaf_2.webp';
import leafImg3 from '../../images/shapes/shape_leaf_3.webp';
import leafImg4 from '../../images/shapes/shape_leaf_4.webp';
import cloudImg from '../../images/shapes/shape_cloud_1.png';
import treeImg from '../../images/shapes/shape_tree_1.webp';
import LaunchModal from '../LaunchModal/LaunchModal';
import StakeModal from '../LaunchModal/StakeModal';

const Hero3 = () => {
  const [launchModalOpen, setLaunchModalOpen] = useState(false);
  const [stakeModalOpen, setStakeModalOpen] = useState(false);

  return (
    <section className="pepecoin_hero_section section_decoration bg-primary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero_title text-uppercase" data-aos="fade-up" data-aos-duration="800">
              Welcome to <mark>BoltDeFi</mark>
            </h1>
            <p className="hero_description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              BoltDeFi is a high-performance decentralized finance (DeFi) protocol designed for sustainable yield generation, liquidity efficiency, and transparent governance. Our mission is to deliver next-generation DeFi tools that combine speed, simplicity, and long-term value creation.
            </p>
            <ul className="btns_group unordered_list p-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <li>
                <button
                  type="button"
                  className="pepecoin_btn text-dark"
                  onClick={() => setStakeModalOpen(true)}
                  style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}
                >
                  <span className="btn_label">Stake & Earn</span>
                  <span className="btn_bg">
                    <svg viewBox="0 0 196 62" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.446196 12.6322C-1.28952 6.27057 3.49938 0 10.0936 0H185.906C192.5 0 197.289 6.27059 195.553 12.6322L191.978 25.7355C191.037 29.1822 191.037 32.8178 191.978 36.2645L195.553 49.3678C197.289 55.7294 192.5 62 185.906 62H10.0936C3.49938 62 -1.28952 55.7294 0.446193 49.3678L4.02134 36.2644C4.96171 32.8178 4.96172 29.1822 4.02134 25.7356L0.446196 12.6322Z" fill="#FFFFFF" />
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="pepecoin_hero_image position-relative">
              <div className="pepe_coin_image">
                <img src={pepeCoinImg} alt="Pepe Coin" />
              </div>
              <div className="hero_image_1">
                <img src={leafImg3} alt="Leaf" />
              </div>
              <div className="hero_image_2">
                <img src={leafImg2} alt="Leaf" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_leaf_top">
        <img src={leafImg1} alt="Leaf" />
      </div>
      <div className="decoration_item shape_leaf_bottom">
        <img src={leafImg4} alt="Leaf" />
      </div>
      <div className="decoration_item shape_cloud">
        <img src={cloudImg} alt="Cloud" />
      </div>
      <div className="decoration_item shape_tree">
        <img src={treeImg} alt="Tree" />
      </div>
      <LaunchModal isOpen={launchModalOpen} onClose={() => setLaunchModalOpen(false)} />
      <StakeModal isOpen={stakeModalOpen} onClose={() => setStakeModalOpen(false)} />
    </section>
  );
};

export default Hero3;
