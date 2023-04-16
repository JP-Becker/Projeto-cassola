import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #f7f7f7;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #333;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 8px;
  }`;

export const CopyrightText = styled.p`
  margin: 0;
  font-weight: 700;
  color: #333;
`

