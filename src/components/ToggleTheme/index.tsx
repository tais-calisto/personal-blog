import { IconBrightnessUp, IconSunOff } from '@tabler/icons';
import { Dispatch, SetStateAction } from 'react';
import { ToggleStyle } from '../../styles/toggleTheme.style';

interface ITheme {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ToggleTheme = ({ theme, setTheme }: ITheme) => {
  const handleClick = () => {
    setTheme(theme === 'light' ? 'light' : 'dark');
  };

  return (
    <ToggleStyle onClick={handleClick}>
      {theme === 'light' ? <IconBrightnessUp /> : <IconSunOff />}
    </ToggleStyle>
  );
};

export default ToggleTheme;
