import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from 'react';

const resolveTheme = (): string => {
  let theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
  if (!theme) {
    const { matches } = window.matchMedia('(prefers-color-scheme:dark');
    theme = matches ? 'dark' : 'light';
  }
  return theme;
};

const ThemeStateContext = createContext<string | null>(null);
const ThemeToggleContext = createContext<(() => void) | null>(null);

type ModeProviderPropsType = {
  children: React.ReactNode;
};

export default function ModeProvider({ children }: ModeProviderPropsType): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const toggleTheme = useCallback(() => {
    currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark');
  }, [currentTheme]);

  useEffect(() => {
    setCurrentTheme(resolveTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  return (
    <ThemeStateContext.Provider value={currentTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeStateContext.Provider>
  );
}

export function useThemeState(): string | null {
  const state = useContext(ThemeStateContext);
  return state;
}
export function useToggleTheme(): () => void {
  const toggleTheme = useContext(ThemeToggleContext);
  if (!toggleTheme) throw new Error('Cannot find themeToggle');
  return toggleTheme;
}
