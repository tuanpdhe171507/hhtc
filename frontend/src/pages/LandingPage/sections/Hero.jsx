import React from 'react';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';

const HeroContainer = styled.main`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 80px 5% 50px;
    text-align: center;
  }
`;


const ContentWrapper = styled.div`
  max-width: 800px;
  z-index: 10;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;


const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  color: #2563eb;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 24px; 
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);

  i {
    margin-right: 8px;
  }
`;


const MainTitle = styled.h1`
  font-size: 3.3rem;
  line-height: 1.2;
  font-weight: 800;
  color: #1e3a8a; 
  margin-bottom: 2rem;
  
  span {
    display: block;
    color: #2563eb; 
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(5px);

  max-width: 1000px; 
  width: 100%;

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
    max-width: 100%;
  }
`;



const DecorativeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%);
  z-index: 1;
`;

const AbstractBg = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background-image: url('https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148879890.jpg');
  background-size: cover;
  background-position: center left;
  opacity: 0.15;
  mask-image: linear-gradient(to right, transparent, black 40%);
  -webkit-mask-image: linear-gradient(to right, transparent, black 40%);
  z-index: 1;
  pointer-events: none;
`;

const EnterpriseBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background: white;
  padding: 5px 15px;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-left: 20px;
  vertical-align: middle;
  font-weight: bold;
  color: #0f172a;

  @media (max-width: 500px) {
      margin-left: 0;
      margin-top: 10px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Snowfall
        color="#3b82f6"
        snowflakeCount={40}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5
        }}
        radius={[0.5, 2.0]}
        speed={[0.2, 1.0]}
        opacity={[0.3, 0.6]}
      />
      <DecorativeCircle style={{ width: '500px', height: '500px', top: '-10%', left: '-10%' }} />
      <DecorativeCircle style={{ width: '300px', height: '300px', bottom: '10%', right: '40%' }} />

      <AbstractBg />

      <ContentWrapper data-aos="fade-right">
        <MainTitle>
          Sức mạnh của sự khám phá Travel Group
        </MainTitle>
        <Description data-aos="fade-up" data-aos-delay="400">
          Travel group là công ty lữ hành uy tín nhất hiện nay tại Việt Nam, luôn sẵn sàng phục vụ du khách mọi lúc, mọi nơi, đảm bảo tính chuyên nghiệp và chất lượng dịch vụ tốt nhất thị trường.
        </Description>

        <div style={{ marginBottom: 30 }} data-aos="fade-up" data-aos-delay="200">
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b82f6', display: 'inline-flex', alignItems: 'center' }}>
            <i className="bi bi-people-fill" style={{ fontSize: '2rem', marginRight: 10 }}></i>
            Hợp tác cùng
          </span>
          <EnterpriseBadge>
            +8 Doanh nghiệp
          </EnterpriseBadge>
        </div>


      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
