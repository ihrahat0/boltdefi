import React from 'react';
import './TokenomicsSection.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const TokenomicsSection = () => {
  const data = {
    labels: ['Staking & Rewards', 'Liquidity', 'Growth & Treasury', 'Team'],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: [
        'rgba(139, 92, 246, 0.9)',
        'rgba(6, 182, 212, 0.9)',
        'rgba(245, 158, 11, 0.9)',
        'rgba(236, 72, 153, 0.9)'
      ],
      borderWidth: 0,
      spacing: 3,
      hoverOffset: 4
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    cutout: '68%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(15, 15, 35, 0.95)',
        titleColor: '#fff',
        bodyColor: 'rgba(255, 255, 255, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        padding: 16,
        displayColors: true,
        boxWidth: 14,
        boxHeight: 14,
        boxPadding: 8,
        cornerRadius: 10,
        titleFont: {
          size: 15,
          weight: '600',
          family: 'Inter'
        },
        bodyFont: {
          size: 14,
          family: 'Inter'
        },
        callbacks: {
          label: function (context) {
            return context.label + ': ' + context.parsed + '%';
          }
        }
      }
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  };

  const cardData = [
    {
      id: 1,
      percent: 40,
      label: "Staking & Rewards",
      amount: "400 MILLION",
      desc: "Distributed via staking smart contracts over time."
    },
    {
      id: 2,
      percent: 30,
      label: "Liquidity",
      amount: "300 MILLION",
      desc: "Locked or protocol-owned for deep market depth."
    },
    {
      id: 3,
      percent: 20,
      label: "Growth & Treasury",
      amount: "200 MILLION",
      desc: "Used for marketing, partnerships, and CEX listings."
    },
    {
      id: 4,
      percent: 10,
      label: "Team",
      amount: "100 MILLION",
      desc: "12 months linear vesting after TGE."
    }
  ];

  return (
    <section id="id_pepecoin_tokenomics_section" className="pepecoin_tokenomics_section section_space section_decoration">
      <div className="tokenomics_inner_container">
        <div className="pepecoin_heading_block text-center mt-lg-5 mb-5" data-aos="fade-up" data-aos-duration="800">
          <h2 style={{ color: "#fff" }} className="heading_text text-uppercase">Tokenomics</h2>
        </div>

        <div className="dashboard" data-aos="fade-up">
          <div className="content-wrapper">
            <div className="chart-section">
              <div className="chart-container">
                <div className="chart-glow"></div>
                <Doughnut data={data} options={options} />
                <div className="center-label">
                  <div className="center-label-title">Total supply</div>
                  <div className="center-label-value">1 Billion</div>
                </div>
              </div>
            </div>

            <div className="details-section">
              {cardData.map((item) => (
                <div key={item.id} className="detail-card">
                  <div className="card-glow"></div>
                  <div className="inner-glow"></div>
                  <div className="sparkle"></div>
                  <div className="detail-header">
                    <div className="detail-left">
                      <div className="detail-title">
                        <span className="percentage">{item.percent}%</span>
                        <span>{item.label}</span>
                      </div>
                    </div>
                    <div className="detail-right">
                      <div className="amount-label">Amount</div>
                      <div className="amount-value">{item.amount}</div>
                    </div>
                  </div>
                  <div className="detail-description">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;