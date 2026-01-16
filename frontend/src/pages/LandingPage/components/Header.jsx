import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

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
  padding: 10px 10%;
  background-color: #ffffff;
  
  @media (max-width: 1024px) {
    padding: 10px 5%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2e6db4;
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
  gap: 3rem;
  
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
        bottom: -18px;
        left: 0;
    }
  }
`;

const ContactButton = styled(Button)`
  background-color: #1890ff;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #1e3a8a;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const MobileNavItem = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 5px;

  &:hover {
    color: #2563eb;
  }

  &.active {
    color: #2563eb;
    border-bottom: 2px solid #2563eb;
    width: fit-content;
  }
`;

const Header = ({ onContactClick }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Trang chủ' },
    { to: '/tinh-nang', label: 'Tính năng' },
    { to: '/giai-phap', label: 'Giải pháp' },
    { to: '/gioi-thieu', label: 'Giới thiệu' },
    { to: '/tuyen-dung', label: 'Tuyển dụng' },
  ];

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

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
          {navLinks.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              className={location.pathname === link.to || (link.to === '/' && location.pathname === '/index') ? 'active' : ''}
            >
              {link.label}
            </NavItem>
          ))}
        </NavMenu>

        <ContactButton type="primary" onClick={onContactClick}>Liên hệ</ContactButton>

        <MobileMenuButton onClick={toggleMobileMenu}>
          <MenuOutlined />
        </MobileMenuButton>
      </HeaderContainer>

      <Drawer
        title="NASATECH"
        placement="right"
        onClose={toggleMobileMenu}
        open={isMobileMenuOpen}
        width={280}
      >
        <MobileNavMenu>
          {navLinks.map((link) => (
            <MobileNavItem
              key={link.to}
              to={link.to}
              className={location.pathname === link.to || (link.to === '/' && location.pathname === '/index') ? 'active' : ''}
              onClick={handleNavItemClick}
            >
              {link.label}
            </MobileNavItem>
          ))}
          <Button
            type="primary"
            block
            size="large"
            onClick={() => {
              onContactClick();
              handleNavItemClick();
            }}
            style={{ marginTop: '10px' }}
          >
            Liên hệ
          </Button>
        </MobileNavMenu>
      </Drawer>
    </Wrapper>
  );
};

export default Header;

