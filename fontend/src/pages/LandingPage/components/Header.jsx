import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10%; // Adjusted padding to match spacing
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2e6db4; // Matching the blue tone
  cursor: pointer;
  letter-spacing: 1px;
`;

const LogoIcon = styled.div`
    width: 35px;
    height: 35px;
    background-color: #4a8adb;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 3rem; // Wider gap as seen in image
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  position: relative;
  padding-bottom: 5px;

  &:hover {
    color: #2563eb;
  }
  
  &.active {
    color: #000;
    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        background: #2563eb;
        position: absolute;
        bottom: -18px; // Push underline down
        left: 0;
    }
  }
`;

const ContactButton = styled(Button)`
  background-color: #1890ff; // Antd blue, matches image bright blue
  color: white;
  border: none;
  border-radius: 4px;
  height: 40px;
  padding: 0 25px;
  font-weight: 500;
  font-size: 16px;
  
  &:hover {
    background-color: #40a9ff !important;
    color: white !important;
  }
`;

const Header = ({ onContactClick }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <HeaderContainer>
        <Logo>
          <LogoIcon>
            <i className="bi bi-star-fill" style={{ fontSize: '14px' }}></i>
          </LogoIcon>
          NASATECH
        </Logo>
        <NavMenu>
          <NavItem to="/" className={location.pathname === '/' || location.pathname === '/index' ? 'active' : ''}>Trang chủ</NavItem>
          <NavItem to="/tinh-nang" className={location.pathname === '/tinh-nang' ? 'active' : ''}>Tính năng</NavItem>
          <NavItem to="/giai-phap" className={location.pathname === '/giai-phap' ? 'active' : ''}>Giải pháp</NavItem>
          <NavItem to="/gioi-thieu" className={location.pathname === '/gioi-thieu' ? 'active' : ''}>Giới thiệu</NavItem>
          <NavItem to="/tuyen-dung" className={location.pathname === '/tuyen-dung' ? 'active' : ''}>Tuyển dụng</NavItem>
        </NavMenu>
        <ContactButton type="primary" onClick={onContactClick}>Liên hệ</ContactButton>
      </HeaderContainer>
    </Wrapper>
  );
};

export default Header;
