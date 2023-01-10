import { IconBrightnessUp, IconSunOff } from '@tabler/icons';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ToggleStyle } from '../styles/toggleTheme.style';
import { GlobalStyle } from '../styles/global';
import { lightTheme, darkTheme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ToggleStyle onClick={toggleTheme}>
          {isDarkTheme ? <IconSunOff /> : <IconBrightnessUp />}
        </ToggleStyle>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
