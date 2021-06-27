import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { useThemeState } from 'hooks/ThemeContext';
import { useUI } from 'hooks';
import theme from 'utils/theme';
import Toast from '../Result/ToastPopUp';
import { LayoutContainer } from './';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutPropsType): JSX.Element {
  const { toastPopUp } = useUI();
  const currentTheme = useThemeState();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <Head>
        <meta
          name="theme-color"
          content={currentTheme === 'light' ? '#8C30F5' : '#2B2B2B'}
        />
      </Head>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
        {toastPopUp.open && <Toast />}
      </LayoutContainer>
    </ThemeProvider>
  );
}
