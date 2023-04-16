import React from 'react';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  
  @media only screen and (min-width: 768px) {
    padding: 32px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #333;
  
  @media only screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 24px;
  
  @media only screen and (min-width: 768px) {
    height: 400px;
    margin-top: 32px;
  }
`;

export const MainText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  max-width: 600px;
  text-align: center;
  margin-bottom: 24px;
  
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;
