import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  margin-top: 28px;
  background: grey;
  padding: 20px;
  border-radius: 5%;

  img {
    border-radius: 100%;
    border: 4px solid grey;
  }
`;

export const Name = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 2.5em;
    font-style: italic;
`

export const MainText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    max-width: 60vw;
    text-align: center;
`