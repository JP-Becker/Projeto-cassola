import styled from 'styled-components';

export const WhatsAppIcon = styled.a`
  position: fixed;
  bottom: 24px;
  right: 18px;
  width: 8vw;
height: 15vh;
  border-radius: 50%;
//   background-color: green;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  
  
  
  img {
    border-radius: 50%;
    width: 8vw;
    height: 15vh;

    &:hover {
        transform: scale(1.1);
        transition: 1s;
      }
  }
`;