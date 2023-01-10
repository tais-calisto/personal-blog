import 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';

type LightThemeType = typeof lightTheme;
type DarkThemeType = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends DarkThemeType, LightThemeType {}
}
