import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes *before* they are used
const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:
    /* Subtle diagonal lines */
    linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent),
    /* Base gradient */
    linear-gradient(to bottom, #a8c1ff, #74d1ff); /* Lighter gradient */
  background-size: 20px 20px, 100% 100%;
  color: white;
  text-align: center;
  padding: 20px;
  /*animation: ${backgroundAnimation} 15s ease infinite;  Removed animation */
`;

const Logo = styled.img`
  max-width: 80%;
  height: auto;
  margin-bottom: 0.5em;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const buttonHoverAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
     transform: translateY(0);
  }
`;

const ToolLink = styled.a`
  background-color: #ff6b6b;
  color: #fff;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 4px 4px 0px #333;
  transition: all 0.2s ease;
  border: 2px solid #333;
  width: 80%;
  box-sizing: border-box;
  position: relative;
  font-family: 'Courier New', Courier, monospace;

  &:hover {
    animation: ${buttonHoverAnimation} 0.3s ease;
    background-color: #ff8c8c;
    box-shadow: 2px 2px 0px #333;
    transform: translate(2px, 2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9em;
  }
`;

const BlogLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 2em;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

function App() {
  return (
    <Container>
      <Logo src="https://i.imgur.com/CXYcKLy.png" alt="3DBay Logo" />
      <LinkContainer>
      
        <ToolLink
          href="https://carmelosammarco.github.io/3DBAY-3D-printing_services/"
          target="_blank"
          rel="noopener noreferrer"
        >
          3D-Print Calculator
        </ToolLink>
        
      </LinkContainer>
    </Container>
  );
}

export default App;
