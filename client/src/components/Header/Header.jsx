import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaUser } from 'react-icons/fa';

// --- Styled Components ---
const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  z-index: 1000;
`;

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1600px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  direction: rtl; /* RTL for Persian */
`;

const RightSideContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px; /* Space between logo and nav */
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #00bcd4;
    transform: scale(1.05);
  }
  
  &::before {
    content: "⦿";
    color: #00bcd4;
    margin-left: 8px;
    font-size: 24px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
  color: #555;
  text-decoration: none;
  font-size: 18px;
  padding: 8px 0;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: #2c3e50;
  }

  &.active {
    color: #00bcd4;
    font-weight: bold;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: #00bcd4;
      border-radius: 3px;
    }
  }
`;

const LeftSideButtons = styled.div`
  display: flex;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: transparent;
`;

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  
  &:first-child {
    z-index: 2; /* Higher z-index for register button */
  }
  
  &:last-child {
    margin-right: -25px; /* Pull login button to the left to overlap */
    z-index: 3; /* Highest z-index to ensure it's on top */
    
  }
`;

const ActionButton = styled.button`
  background: ${props => 
    props.position === 'first' ? '#000' : '#fff'};
  color: ${props => 
    props.position === 'first' ? '#fff' : '#000'};
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-weight: 600;
  position: relative;
  
  /* Rounded corners for outer edges only */
  border-radius: ${props => 
    props.position === 'first' 
      ? '10px 0 0 10px' 
      : '0 25px 25px 0'};
  
  /* Add shadow to create depth */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  svg {
    margin-right: 8px;
    font-size: 18px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #fff;
    `}
`;

const ActiveButtonIndicator = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: calc(50% - 5px);
  height: calc(100% - 10px);
  border-radius: 25px;
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 0;
  
  background: ${({ activeIndex }) => 
    activeIndex === 1 
      ? 'linear-gradient(135deg, #ff9800, #f57c00)' // Orange gradient for login
      : 'linear-gradient(135deg, #00bcd4, #0097a7)' // Teal gradient for register
  };
  
  box-shadow: ${({ activeIndex }) => 
    activeIndex === 1 
      ? '0 2px 10px rgba(255, 152, 0, 0.3)' // Orange shadow for login
      : '0 2px 10px rgba(0, 150, 200, 0.3)' // Teal shadow for register
  };
  
  ${({ activeIndex }) =>
    activeIndex === 1 &&
    css`
      transform: translateX(-100%);
    `}
`;

// --- Header Component ---
function Header() {
    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === '/register') {
            setActiveButton('register');
        } else if (location.pathname === '/login') {
            setActiveButton('login');
        } else {
            setActiveButton('');
        }
    }, [location.pathname]);

    const handleButtonClick = (buttonName, path) => {
        setActiveButton(buttonName);
        navigate(path);
    };

    return (
        <HeaderWrapper>
            <HeaderContainer>
                <RightSideContent>
                    <Logo onClick={() => navigate('/')}>فمتسک</Logo>
                    <NavLinks>
                        <StyledNavLink to="/features">امکانات</StyledNavLink>
                        <StyledNavLink to="/about">درباره ما</StyledNavLink>
                    </NavLinks>
                </RightSideContent>

                <LeftSideButtons>
                    {(activeButton === 'register' || activeButton === 'login') && (
                        <ActiveButtonIndicator activeIndex={activeButton === 'login' ? 1 : 0} />
                    )}
                    <ButtonWrapper>
                        <ActionButton
                            position="first"
                            isActive={activeButton === 'register'}
                            onClick={() => handleButtonClick('register', '/register')}
                        >
                            ثبت نام
                        </ActionButton>
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <ActionButton
                            position="second"
                            isActive={activeButton === 'login'}
                            onClick={() => handleButtonClick('login', '/login')}
                        >
                            <FaUser />
                            ورود
                        </ActionButton>
                    </ButtonWrapper>
                </LeftSideButtons>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;