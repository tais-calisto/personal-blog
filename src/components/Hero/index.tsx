import Image from 'next/image';
import React from 'react';
import carrot from '../../assets/carrot.svg';
import { Container } from './style';

const Hero = () => {
  return (
    <Container>
      <div className='space'></div>
      <div className='content'>
        <p>Conversas sobre</p>
        <h2>Veganismo & Saúde</h2>
      </div>
      <div className='image'>
        <Image src={carrot} alt='Ilustração de uma cenoura' />
      </div>
    </Container>
  );
};

export default Hero;
