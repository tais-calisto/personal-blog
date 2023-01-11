import Image from 'next/image';
import { LogoStyle } from './style';
import broccoli from '../../assets/broccoli.svg';
import broccoliDark from '../../assets/broccoli-dark.svg';
import useGetImageTheme from '../hooks/useGetTheme';

const Logo = () => {
  const img = useGetImageTheme(broccoli, broccoliDark);
  return (
    <LogoStyle>
      <Image src={img} alt='Logo "E as Proteínas?"' />
      <p>E as proteínas?</p>
    </LogoStyle>
  );
};

export default Logo;
