import Image from 'next/image';
import React from 'react';
import useGetImageTheme from '../hooks/useGetTheme';
import carrot from '../../assets/carrot.svg';
import carrotDark from '../../assets/carrot-dark.svg';
import { Container } from './style';

const Hero = () => {
  const img = useGetImageTheme(carrot, carrotDark);
  return (
    <Container>
      <div className='space'></div>
      <div className='content'>
        <p>Conversas sobre</p>
        <h2>Veganismo & Saúde</h2>
      </div>
      <div className='image'>
        <Image src={img} alt='Ilustração de uma cenoura' />
      </div>
    </Container>
  );
};

export default Hero;
