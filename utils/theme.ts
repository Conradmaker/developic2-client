const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};

export interface ThemeType {
  dark: {
    background: {
      initial: string;
      modal: string;
    };
  };
  light: {
    background: {
      initial: string;
      modal: string;
    };
  };
  viewPortSize: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const theme: ThemeType = {
  dark: {
    background: {
      initial: '',
      modal: '',
    },
  },
  light: {
    background: {
      initial: '',
      modal: '',
    },
  },
  viewPortSize: {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
};

export default theme;
