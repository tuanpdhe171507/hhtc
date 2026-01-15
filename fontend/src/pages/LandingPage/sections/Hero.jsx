import React from 'react';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';

const HeroContainer = styled.main`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
  z-index: 10;
  position: relative;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #ffffff;
  color: #2563eb;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
  
  i {
    margin-right: 8px;
  }
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 800;
  color: #1e3a8a; 
  margin-bottom: 2rem;
  
  span {
    display: block;
    color: #2563eb; 
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(5px);
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
                <Badge>
                    <i className="bi bi-check-circle-fill"></i> Mạng xã hội
                </Badge>

                <MainTitle>
                    Công nghệ <br />
                    Bảo mật <br />
                    <span>Chất lượng</span>
                </MainTitle>

                <div style={{ marginBottom: 30 }} data-aos="fade-up" data-aos-delay="200">
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#3b82f6', display: 'inline-flex', alignItems: 'center' }}>
                        <i className="bi bi-people-fill" style={{ fontSize: '2rem', marginRight: 10 }}></i>
                        Hợp tác cùng
                    </span>
                    <EnterpriseBadge>
                        +8 Doanh nghiệp
                    </EnterpriseBadge>
                </div>

                <Description data-aos="fade-up" data-aos-delay="400">
                    NASATECH là công ty phát triển nền tảng mạng xã hội, mang đến không gian kết nối sáng tạo,
                    nơi người dùng có thể giao lưu, chia sẻ thông tin và cập nhật những xu hướng công nghệ mới nhất.
                    Với sứ mệnh xây dựng cộng đồng số năng động.
                </Description>
            </ContentWrapper>
        </HeroContainer>
    );
};

export default Hero;
