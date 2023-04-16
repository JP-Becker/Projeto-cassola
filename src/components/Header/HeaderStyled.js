import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 767px) {
    padding: 8px;
  }
`;

export const Logo = styled.img`
  height: 48px;
  margin-right: 16px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  margin: 0 16px;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 8px;
  }
`;