import { Container } from './style';
import { IconMenu2 } from '@tabler/icons';
import { useState } from 'react';
import { Categories } from '../../utils/interfaces';
import Content from './content';
import Logo from '../Logo';

const Header = ({ data }: { data: Array<Categories> }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <div className='logo'>
        <Logo />
      </div>
      <div className='desktopContent'>
        <Content data={data} />
      </div>
      <div className='mobileContent'>
        <div onClick={handleShowMenu}>
          <IconMenu2 />
        </div>
        {showMenu ? (
          <div className='menuMobile'>
            <Content data={data} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Header;
