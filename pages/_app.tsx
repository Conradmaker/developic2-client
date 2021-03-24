import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import { Global, css, ThemeProvider } from '@emotion/react';
import { useThemeState } from '../hooks/ThemeContext';
import theme from '../utils/theme';

const globalStyle = css`
  body {
    background: #000;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const currentTheme = useThemeState();
  console.log(currentTheme);
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
