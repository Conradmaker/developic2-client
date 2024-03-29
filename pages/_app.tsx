import { AppProps } from 'next/dist/next-server/lib/router/router';
import 'styles/globals.css';
import { Global, css } from '@emotion/react';
import ModeProvider from 'hooks/ThemeContext';
import wrapper from 'modules/store';

const globalStyle = css`
  * {
    box-sizing: border-box;
    list-style: none;
  }
  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ModeProvider>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ModeProvider>
  );
}

export default wrapper.withRedux(MyApp);
