import React from 'react';
import styled from 'styled-components';
import Snowfall from 'react-snowfall';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, #1e3a8a, #0f172a), url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?q=80&w=2000&auto=format&fit=crop');
  background-size: cover;
  background-blend-mode: overlay;
  background-position: center;
  color: white;
  padding: 65px 5% 2rem;
  position: relative;
  overflow: visible; 
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CTABox = styled.div`
  background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
  border-radius: 20px;
  padding: 25px 40px;
  text-align: center;
  margin: -130px auto 40px;
  max-width: 1000px;
  width: 90%;
  position: relative;
  z-index: 10;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h2 {
    color: white;
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.95rem;
    max-width: 750px;
    margin: 0 auto 1.5rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-top: -240px;
    h2 { font-size: 1.6rem; }
  }
`;

const EmailForm = styled.div`
  display: flex;
  background: white;
  padding: 8px;
  border-radius: 16px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    border: none;
    padding: 0 20px;
    font-size: 1rem;
    outline: none;
    color: #1e3a8a;
    background: transparent;
    &::placeholder { color: #94a3b8; }
  }

  button {
    background: #1e3a8a;
    color: white;
    border: none;
    padding: 12px 35px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: #0f172a;
      transform: scale(1.02);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    background: transparent;
    box-shadow: none;
    padding: 0;
    
    input {
      background: white;
      padding: 15px 20px;
      border-radius: 12px;
      margin-bottom: 5px;
    }
    
    button { 
      width: 100%; 
      padding: 15px;
    }
  }
`;

const BrandSection = styled.div``;

const BrandLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  i { margin-right: 10px; font-size: 1.8rem; }
`;

const CompanyName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const CompanyDesc = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
  max-width: 400px;
`;

const LinkSection = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 0.8rem;
    
    a {
      color: white;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.3s;
      
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ContactInfo = styled.div`
  p {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.95rem;
    
    i {
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  opacity: 0.8;
  position: relative;
  z-index: 2;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Snowfall
        color="white"
        snowflakeCount={50}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
        radius={[0.5, 2.5]} // Make snowflakes varied sizes
        speed={[0.5, 2.0]} // Gentle falling speed
        wind={[-0.5, 0.5]} // Gentle sway
      />
      <CTABox data-aos="zoom-in">
        <h2>Trở thành đối tác của chúng tôi</h2>
        <p>
          Nếu bạn muốn trở thành đối tác với chúng tôi, hãy gửi email đến chúng tôi sẽ liên hệ với bạn sớm nhất có thể. Chúng tôi rất mong được hợp tác và cùng phát triển!
        </p>
        <EmailForm>
          <input type="email" placeholder="example@gmail.com" />
          <button>Gửi Email</button>
        </EmailForm>
      </CTABox>

      <FooterContent>
        <BrandSection>
          <BrandLogo>
            <i className="bi bi-stars"></i>
            TRAVELGROUP
          </BrandLogo>
          <CompanyName>Công ty Cổ phần Tập đoàn Du lịch Việt Nam - TravelGroup</CompanyName>
          <CompanyDesc>
            TravelGroup là công ty lữ hành uy tín hàng đầu tại Việt Nam, chuyên cung cấp các tour du lịch đa dạng, trải nghiệm độc đáo và dịch vụ chuyên nghiệp nhất thị trường.
          </CompanyDesc>
        </BrandSection>

        <LinkSection>
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/phap-ly">Pháp lý</Link></li>
            <li><Link to="/san-pham">Sản phẩm</Link></li>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/tuyen-dung">Tuyển dụng</Link></li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h4>Liên hệ</h4>
          <ContactInfo>
            <p><i className="bi bi-telephone-fill"></i> 024 6685 1289</p>
            <p><i className="bi bi-envelope-fill"></i> dulich999.vn@gmail.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> Số 199 Phạm Văn Đồng, Phường Xuân Đỉnh, TP. Hà Nội</p>
            <p><i className="bi bi-globe"></i> <a href="https://www.travelgroup.pro.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>www.travelgroup.pro.vn</a></p>
          </ContactInfo>
        </LinkSection>
      </FooterContent>

      <Copyright>
        <span>Copyright © 2025</span>
        <div>
          <span style={{ marginRight: 20 }}>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

