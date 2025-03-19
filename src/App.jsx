import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.png'; // Import the logo

const layerAnimation = keyframes`
  0% {
    background-position: 0% 50%;
    background-size: 100% 100%;
  }
  25% {
    background-position: 100% 50%;
    background-size: 200% 200%;
  }
  50% {
    background-position: 0% 50%;
    background-size: 300% 300%;
  }
  75% {
    background-position: 100% 50%;
    background-size: 200% 200%;
  }
  100% {
    background-position: 0% 50%;
    background-size: 100% 100%;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    #f3ec78,
    #af4261,
    #6f00ff, /* Vibrant purple */
    #00ffd5 /* Bright cyan */
  );
  background-size: 400% 400%;
  animation: ${layerAnimation} 20s ease infinite;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Logo = styled.img`
  max-width: 80%; /* Ensure logo doesn't overflow its container */
  height: auto;    /* Maintain aspect ratio */
  margin-bottom: 0.5em;
  /* Add a subtle animation */
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
  margin-bottom: 0.5em; /* Reduced margin */
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 20px;
  align-items: center; /* Center items horizontally */
`;

const ToolLink = styled.a`
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
  width: 80%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    border-color: rgba(255,255,255,0.5);
  }

    @media (max-width: 768px) {
        padding: 10px 20px; /* Smaller padding on mobile */
        font-size: 0.9em;
  }
`;

const BlogLink = styled.a`
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 2em; /* Added margin */
    transition: color 0.3s ease;

    &:hover{
        text-decoration: underline;
        color: white;
    }
`;

function App() {
  return (
    <Container>
      <Logo src={logo} alt="3DBay Logo" />
      <Subtitle>By Carmelo Sammarco</Subtitle>
      <BlogLink href="https://sammarcocarmelo.wordpress.com" target="_blank" rel="noopener noreferrer">
        Visit My Blog
      </BlogLink>
      <LinkContainer>
        <ToolLink href="https://carmelosammarco.github.io/3DBAY-3D-printing_services/" target="_blank" rel="noopener noreferrer">
          3D Print Price Calculator
        </ToolLink>
        <ToolLink href="https://3dtopogenerator.vercel.app" target="_blank" rel="noopener noreferrer">
          3D TOPO Generator
        </ToolLink>
      </LinkContainer>
    </Container>
  );
}

export default App;
