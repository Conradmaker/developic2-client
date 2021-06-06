import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { useThemeState } from '../../hooks/ThemeContext';
import useUI from '../../modules/ui/hooks';
import theme from '../../utils/theme';
import Toast from '../Result/ToastPopUp';
import { LayoutContainer } from './';
import Footer from './Footer';
import Header from './Header';

type LayoutPropsType = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutPropsType): JSX.Element {
  const { toastPopUp } = useUI();
  const currentTheme = useThemeState();
  return (
    <ThemeProvider theme={currentTheme === 'light' ? theme.light : theme.dark}>
      <LayoutContainer>
        <Header />
        {children}
        <Footer />
        {toastPopUp.open && <Toast />}
      </LayoutContainer>
    </ThemeProvider>
  );
}
