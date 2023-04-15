import React from 'react';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f8f8f8;
`;

export const Logo = styled.img`
  height: 32px;
`;

export const NavLink = styled.a`
  margin: 0 8px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`