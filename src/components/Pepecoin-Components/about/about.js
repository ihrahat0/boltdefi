import React from 'react';
import dotShape from '../../../images/shapes/shape_dot.png';
import signBoard from '../../../images/shapes/shape_sign_board.webp';
import dragonfly from '../../../images/shapes/shape_dragonfly.png';
import wood1 from '../../../images/shapes/shape_cartoon_9.webp';
import wood2 from '../../../images/shapes/shape_cartoon_10.webp';
import tree from '../../../images/shapes/shape_tree_1.webp';
import cloud from '../../../images/shapes/shape_cloud_2.png';

const AboutPepe = () => {
  return (
    <section id="id_pepecoin_about_section" className="pepecoin_about_section section_space pb-0 section_decoration mt-lg-5">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-9">
            <div className="pepecoin_about_content position-relative text-center">
              <div className="pepecoin_heading_block">
                <h2 className="heading_text text-uppercase" data-aos="fade-up" data-aos-duration="800">
                  <span className="shape_dot">
                    <img src={dotShape} alt="Dot" />
                  </span>
                  What is $BOLT?
                  <span className="shape_dot">
                    <img src={dotShape} alt="Dot" />
                  </span>
                </h2>
                <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  <p className="heading_description mb-4">
                    $BOLT is the native utility and governance token of the BoltDeFi Protocol. It powers all core functions of the ecosystem — including staking, liquidity rewards, and community governance.
                  </p>
                </div>
              </div>
              <div className="shape_board_image">
                <img src={signBoard} alt="Board" />
              </div>
              <div className="shape_dragonfly" data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
                <img src={dragonfly} alt="Dragonfly" />
              </div>
              <div className="shape_wood_1">
                <img src={wood1} alt="Tree Wood" />
              </div>
              <div className="shape_wood_2">
                <img src={wood2} alt="Tree Wood" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_tree">
        <img src={tree} alt="Tree" />
      </div>
      <div className="decoration_item shape_cloud">
        <img src={cloud} alt="Cloud" />
      </div>
    </section >
  );
};

export default AboutPepe;
