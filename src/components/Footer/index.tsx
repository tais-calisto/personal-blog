import { Container } from './style';
import avocado from '../../assets/avocado.svg';
import Image from 'next/image';
import { socialLinks } from '../../utils/socialLinks';

const Footer = () => {
  return (
    <Container>
      <Image src={avocado} alt='' />
      <div className='content'>
        <div className='logo'>
          <p>E as proteínas?</p>
        </div>
        <h3>Acompanhe também pelas redes sociais: </h3>
        <ul>
          {socialLinks.map((sl, index) => (
            <li key={index}>
              <a href={sl.link}>{<sl.icon />}</a>
            </li>
          ))}
        </ul>
        <p>Copyrigth 2023 - Taís Calisto</p>
      </div>
      <div className='space'></div>
    </Container>
  );
};

export default Footer;
