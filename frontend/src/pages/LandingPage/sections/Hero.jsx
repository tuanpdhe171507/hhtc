import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.main`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), 
    url('https://www.marketveep.com/hubfs/Blog%20Images%20WEBP%20Format/Cove.webp');
  background-size: cover;
  background-position: center;
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
  max-width: 1000px;
  z-index: 10;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;



const MainTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff; 
  margin-bottom: 2rem;
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
  
  span {
    display: block;
    color: #3b82f6; 
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
  font-size: 1.4rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  padding: 20px;
  border-radius: 12px;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);

  max-width: 1200px; 
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
      <ContentWrapper data-aos="fade-right">
        <MainTitle>
          Sức mạnh của sự khám phá <br />Travel Group
        </MainTitle>
        <Description data-aos="fade-up" data-aos-delay="400">
          Travel group là công ty lữ hành uy tín nhất hiện nay tại Việt Nam, luôn sẵn sàng phục vụ du khách mọi lúc, mọi nơi, đảm bảo tính chuyên nghiệp và chất lượng dịch vụ tốt nhất thị trường.
        </Description>

        <div style={{ marginBottom: 30 }} data-aos="fade-up" data-aos-delay="200">
          <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#3b82f6', display: 'inline-flex', alignItems: 'center' }}>
            <i className="bi bi-people-fill" style={{ fontSize: '2.2rem', marginRight: 10 }}></i>
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
