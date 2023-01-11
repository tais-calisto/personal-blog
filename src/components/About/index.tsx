import Image from 'next/image';
import supabase from '../../pages/api/supabase';
import { Container } from './style';
import image from '../../assets/profile.png';

const About = () => {
  //   const getImage = () => {
  //     const { data } = supabase.storage.from('profile').getPublicUrl('me');
  //     return data.publicUrl;
  //   };

  //   const image = getImage();

  return (
    <Container>
      <h2>Sobre mim</h2>
      <div className='content'>
        <Image src={image} alt='' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus
          et netus et malesuada fames. Laoreet non curabitur gravida arcu. Velit
          scelerisque in dictum non consectetur a.
        </p>
      </div>
    </Container>
  );
};

export default About;
