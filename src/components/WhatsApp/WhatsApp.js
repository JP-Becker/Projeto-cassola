import React from 'react';
import { WhatsAppIcon } from './WhatsStyled';
import img from  '../../assets/wppImg.png';

export const WhatsApp = () => {
  const whatsappUrl = 'https://wa.me/+554988425055';
  
  return (
    <>
      <WhatsAppIcon href={whatsappUrl} target="_blank" rel="noopener">
        <img src={img} alt="WhatsApp Icon" />
      </WhatsAppIcon>
    </>
  );
};