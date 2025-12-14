import React, { useState } from 'react';
import LaunchModal from '../../LaunchModal/LaunchModal';
import { Link } from 'react-router-dom';
import featureBg from '../../../images/shapes/pepecoin_feature_bg_image_1.webp';
import cloudImg from '../../../images/shapes/shape_cloud_1.png';
import shape1 from '../../../images/shapes/shape_tree_1.webp';
import shape2 from '../../../images/shapes/shape_stone_1.webp';
import shape3 from '../../../images/shapes/shape_dragonfly.png';
import shape4 from '../../../images/shapes/shape_cartoon_11.webp';


const steps = [
  {
    number: '01',
    title: 'Install MetaMask',
    description:
      'Install MetaMask or your favorite wallet from the app store or as a browser extension.',
  },
  {
    number: '02',
    title: 'Select Your Network',
    description:
      'Select your network (ETH / BSC / SOL — your choice). Ensure you have some native tokens for gas fees.',
  },
  {
    number: '03',
    title: 'Swap for $BOLT',
    description:
      'Swap for $BOLT on the DEX listed. Join the speed freaks.',
  },
  {
    number: '04',
    title: 'Stake & Earn',
    description:
      'Stake to start earning ShockRewards instantly. The faster you stake, the more you make.',
  },
];

const FeaturesSection = () => {
  const [launchModalOpen, setLaunchModalOpen] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="pepecoin_feature_section section_space pb-0 z-2 section_decoration" id='id_pepecoin_feature_section'>
      <div className="container">
        <div className="pepecoin_heading_block text-center" data-aos="fade-up" data-aos-duration="800">
          <h2 className="heading_text text-uppercase mb-0">How To Buy</h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div
              className="col-lg-6"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div
                className="pepecoin_feature_block"
                style={{ backgroundImage: `url(${featureBg})` }}
              >
                <div
                  className="feature_serial_number"
                  style={{ backgroundImage: `url(${cloudImg})` }}
                >
                  {step.number}
                </div>
                <div className="feature_info">
                  <h3 className="feature_title text-uppercase">{step.title}</h3>
                  <p className="mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="btns_group pb-0 mt-4 justify-content-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
          <div className="pepecoin_btn text-white" onClick={() => setLaunchModalOpen(true)} style={{ cursor: 'pointer' }}>
            <span className="btn_label">Buy Now</span>
            <span className="btn_bg">
              <svg viewBox="0 0 180 62" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.08526 12.4119C-0.482482 6.10381 4.29004 0 10.79 0H169.211C175.711 0 180.484 6.10384 178.916 12.4119L175.495 26.1761C174.708 29.3439 174.708 32.6561 175.495 35.8239L178.916 49.5881C180.484 55.8962 175.711 62 169.211 62H10.79C4.29004 62 -0.48248 55.8962 1.08526 49.5881L4.50607 35.8238C5.29333 32.6561 5.29333 29.3439 4.50607 26.1762L1.08526 12.4119Z" fill="#0B902B"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="shape_tree text-end" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
        <img src={shape1} alt="Tree" />
      </div>
      <div className="decoration_item shape_stone">
        <img src={shape2} alt="Stone" />
      </div>
      <div className="decoration_item shape_dragonfly">
        <img src={shape3} alt="Dragonfly" />
      </div>
      <div className="decoration_item shape_frog" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
        <img src={shape4} alt="Frog" />
      </div>
      <LaunchModal isOpen={launchModalOpen} onClose={() => setLaunchModalOpen(false)} />
    </section>
  );
};

export default FeaturesSection;