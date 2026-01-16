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
  padding: 4rem 5% 2rem;
  position: relative;
  overflow: hidden; 
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
      <FooterContent>
        <BrandSection>
          <BrandLogo>
            <i className="bi bi-stars"></i>
            NASATECH
          </BrandLogo>
          <CompanyName>Công ty Cổ phần Công nghệ Vệ tinh Quốc gia</CompanyName>
          <CompanyDesc>
            Công ty phát triển nền tảng mạng xã hội, cung cấp không gian giao lưu, chia sẻ thông tin và kết nối cộng đồng để cập nhật những xu hướng công nghệ mới nhất.
          </CompanyDesc>
        </BrandSection>

        <LinkSection>
          <h4>Company</h4>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/tinh-nang">Tính năng</Link></li>
            <li><Link to="/giai-phap">Giải pháp</Link></li>
            <li><Link to="/gioi-thieu">Giới thiệu</Link></li>
            <li><Link to="/tuyen-dung">Tuyển dụng</Link></li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h4>Liên hệ</h4>
          <ContactInfo>
            <p><i className="bi bi-telephone-fill"></i> +84 562 622 999</p>
            <p><i className="bi bi-envelope-fill"></i> vetinhquocgia.vn@gmail.com</p>
            <p><i className="bi bi-geo-alt-fill"></i> 199-201 Phạm Văn Đồng, Phường Xuân Đỉnh, TP. Hà Nội</p>
            <p><i className="bi bi-globe"></i> <a href="https://www.enasatech.vn" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>www.enasatech.vn</a></p>
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

