import React from 'react';
import lightBlue from '../../../images/shapes/shape_tokenomics_light_blue.png';
import lightGreen from '../../../images/shapes/shape_tokenomics_light_green.png';
import lightPink from '../../../images/shapes/shape_tokenomics_light_pink.png';
import lightYellow from '../../../images/shapes/shape_tokenomics_light_yellow.png';
import zigzag from '../../../images/shapes/shape_circle_zigzag.svg';
import featureBg from '../../../images/shapes/pepecoin_feature_bg_image_1.webp';
import netShape from '../../../images/shapes/shape_net_2.svg';

const CoreFeatures = () => {
    const features = [
        {
            title: "Staking Module",
            description: "Stake $BOLT to earn protocol-generated rewards. Real-time reward calculation and dynamic APY.",
            icon: "⚡",
            delay: "100",
            glow: lightYellow
        },
        {
            title: "Liquidity Pools",
            description: "Provide liquidity to earn trading fees + incentive rewards. Low slippage & optimized pool ratios.",
            icon: "💧",
            delay: "200",
            glow: lightBlue
        },
        {
            title: "Reward Engine",
            description: "Automatically redistributes protocol fees to stakers and liquidity providers. Self-sustaining ecosystem.",
            icon: "🔄",
            delay: "300",
            glow: lightGreen
        },
        {
            title: "Governance System",
            description: "Holders propose and vote on protocol parameters, new pools, and treasury allocation.",
            icon: "🧠",
            delay: "400",
            glow: lightPink
        }
    ];

    return (
        <section className="core_features_section section_space section_decoration">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section_title text-center mb-5">
                            <h2 className="heading_text text-uppercase" data-aos="fade-up">
                                Core Components
                            </h2>
                            <p className="heading_description mb-0" data-aos="fade-up" data-aos-delay="100">
                                The BoltDeFi Ecosystem combines staking, liquidity, and governance modules into a unified decentralized platform
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {features.map((feature, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                            <div
                                className="feature_card text-center"
                                data-aos="fade-up"
                                data-aos-delay={feature.delay}
                            >
                                <div className="card_glow_bg">
                                    <img src={feature.glow} alt="" />
                                </div>
                                <div className="card_net_bg">
                                    <img src={netShape} alt="" />
                                </div>
                                <div className="feature_content_wrapper">
                                    <div className="feature_icon mb-5">
                                        <span className="icon_emoji">{feature.icon}</span>
                                    </div>
                                    <h3 className="feature_title text-uppercase mb-3">{feature.title}</h3>
                                    <p className="feature_description mb-0">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="decoration_item shape_zigzag">
                <img src={zigzag} alt="Zigzag" />
            </div>
            <div className="decoration_item shape_feature_bg">
                <img src={featureBg} alt="Feature Background" />
            </div>
        </section>
    );
};

export default CoreFeatures;
