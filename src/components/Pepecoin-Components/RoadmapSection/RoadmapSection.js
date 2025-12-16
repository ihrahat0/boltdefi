import React from 'react';
import './RoadmapSection.css';
import roadmapBg from '../../../images/shapes/roadmap-bg.webp';
import pepeCoinImg from '../../../images/shapes/shape_pepecoin_1.webp';
import treeImage from '../../../images/shapes/shape_tree_1.webp';
import stoneImage from '../../../images/shapes/shape_stone_2.webp';
import cartoonImage from '../../../images/shapes/shape_cartoon_13.webp';

const roadmapPhases = [
    {
        phase: "Phase 1",
        title: "Foundation",
        icon: "⚡",
        goals: [
            "Launch of BoltDeFi Protocol on mainnet",
            "Deploy staking v1 smart contracts",
            "Establish initial liquidity pools",
            "Launch $BOLT token on supported DEXs",
            "Begin community growth and documentation"
        ],
        focus: "Secure base infrastructure and ensure stable staking yield distribution."
    },
    {
        phase: "Phase 2",
        title: "Expansion",
        icon: "⚙️",
        goals: [
            "Introduce Liquidity Pool Optimization",
            "Integrate advanced reward engine",
            "Release analytics dashboard for stakers",
            "Add cross-chain staking (BSC / ETH / SOL)",
            "Form key DeFi partnerships"
        ],
        focus: "Strengthen ecosystem liquidity and expand user accessibility."
    },
    {
        phase: "Phase 3",
        title: "Scaling",
        icon: "💹",
        goals: [
            "Launch Staking v2 with dynamic APR logic",
            "Introduce BoltSwap DEX for native swaps",
            "Implement Treasury yield strategies",
            "Initiate NFT-based reward boosters",
            "Begin DAO testing on testnet"
        ],
        focus: "Build user-driven, yield-optimized systems across multiple networks."
    },
    {
        phase: "Phase 4",
        title: "Governance & DAO",
        icon: "🧠",
        goals: [
            "Launch BoltDAO",
            "Enable on-chain governance and voting",
            "Community control over treasury and pool parameters",
            "Add proposal submission and execution system",
            "Introduce cross-chain governance"
        ],
        focus: "Full decentralization of BoltDeFi operations and treasury management."
    },
    {
        phase: "Phase 5",
        title: "Ecosystem",
        icon: "🌍",
        goals: [
            "Multi-chain liquidity aggregation",
            "Cross-protocol yield partnerships",
            "Real-world asset (RWA) integrations",
            "Launch of BoltDeFi Grants Program",
            "Layer-2 support for gas efficiency"
        ],
        focus: "Expand BoltDeFi beyond a single network into a global DeFi utility layer."
    }
];

const RoadmapSection = () => {
    return (
        <section className="pepecoin_roadmap_section section_space section_decoration" id='id_pepecoin_roadmap_section'>
            <div className="container roadmap_container">
                <div className="row">

                    {/* Left Side - Vision (Sticky) */}
                    <div className="col-lg-5">
                        <div className="roadmap_vision_wrapper">
                            <h2 className="roadmap_vision_title" data-aos="fade-right" data-aos-duration="800">
                                ROADMAP
                            </h2>

                        </div>
                    </div>

                    {/* Right Side - Timeline */}
                    <div className="col-lg-7">
                        <div className="roadmap_timeline_wrapper">
                            {roadmapPhases.map((item, index) => (
                                <div key={index} className="roadmap_phase_item" data-aos="fade-left" data-aos-duration="800" data-aos-delay={index * 100}>

                                    {/* Timeline Marker */}
                                    <div className="roadmap_phase_marker">
                                        <span></span>
                                    </div>

                                    {/* Card */}
                                    <div className="roadmap_card" style={{ backgroundImage: `url(${roadmapBg})` }}>
                                        <div className="roadmap_card_overlay">

                                            <div className="roadmap_phase_header">
                                                <h3 className="roadmap_phase_title">
                                                    <span className="text-primary me-2">{item.phase}</span> — {item.title}
                                                </h3>

                                            </div>

                                            <ul className="roadmap_goals_list">
                                                {item.goals.map((goal, i) => (
                                                    <li key={i}>{goal}</li>
                                                ))}
                                            </ul>


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Decorations */}
            <div className="shape_bg_glow"></div>

            <div className="decoration_item shape_tree" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200" style={{ bottom: '10%' }}>
                <img src={treeImage} alt="Tree" />
            </div>
            <div className="decoration_item shape_stone">
                <img src={stoneImage} alt="Stone" />
            </div>
            <div className="decoration_item shape_cartoon_1" data-aos="fade-right" data-aos-duration="800" style={{ top: '7%' }}>
                <img src={cartoonImage} alt="Stone" />
            </div>

        </section>
    );
};

export default RoadmapSection;
