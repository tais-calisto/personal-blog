import Image from 'next/image';
import { LogoStyle } from './style';
import broccoli from '../../assets/broccoli.svg';

const Logo = () => (
  <LogoStyle>
    <Image src={broccoli} alt='Logo "E as Proteínas?"' />
    <p>E as proteínas?</p>
  </LogoStyle>
);

export default Logo;
