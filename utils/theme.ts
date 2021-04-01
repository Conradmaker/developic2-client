const size = {
  mobile: '770px',
  tablet: '1024px',
  desktop: '1700px',
};
const calcRem = (size: number) => `${size / 16}rem`;

export type colorTheme = {
  primary: {
    1: string;
    2: string;
    pLight: string;
    pDark: string;
  };
  background: {
    initial: string;
    modal: string;
  };
  textColor: {
    initial: string;
    lighten: string;
    reverse: string;
  };
  layerColor: {
    imageLayer: string;
    modalLayer: string;
  };
  grayScale: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
  fontSize: {
    small: string;
    base: string;
    basel: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
    titleSize: string;
  };
  viewPortSize: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};
export interface ThemeType {
  dark: colorTheme;
  light: colorTheme;
}

const theme: ThemeType = {
  dark: {
    primary: {
      1: '#8C30F5',
      2: '#f1e4ff',
      pLight: '#c364ff',
      pDark: '#5300c1',
    },
    background: {
      initial: '#2B2B2B',
      modal: '#2B2B2B',
    },
    textColor: {
      initial: '#fff',
      lighten: '#E1DFDC',
      reverse: '#2B2B2B',
    },
    layerColor: {
      imageLayer: 'rgba(0,0,0,.3)',
      modalLayer: 'rgba(115,115,115,.4)',
    },
    grayScale: {
      1: '#484848',
      2: '#C4C4C4',
      3: '#E1DFDC',
      4: '#EFEFEF',
    },
    fontSize: {
      small: calcRem(12),
      base: calcRem(14),
      basel: calcRem(16),
      lg: calcRem(18),
      xl: calcRem(20),
      xxl: calcRem(22),
      xxxl: calcRem(30),
      titleSize: calcRem(48),
    },
    viewPortSize: {
      mobile: `(max-width: ${size.mobile})`,
      tablet: `(max-width: ${size.tablet})`,
      desktop: `(max-width: ${size.desktop})`,
    },
  },
  light: {
    primary: {
      1: '#8C30F5',
      2: '#f1e4ff',
      pLight: '#c364ff',
      pDark: '#5300c1',
    },
    background: {
      initial: '#FCFCFC',
      modal: '#FFFFFF',
    },
    textColor: {
      initial: '#474A57',
      lighten: '#474a57',
      reverse: '#FCFCFC',
    },
    layerColor: {
      imageLayer: 'rgba(0,0,0,.3)',
      modalLayer: 'rgba(115,115,115,.4)',
    },
    grayScale: {
      1: '#484848',
      2: '#C4C4C4',
      3: '#E1DFDC',
      4: '#EFEFEF',
    },
    fontSize: {
      small: calcRem(12),
      base: calcRem(14),
      basel: calcRem(16),
      lg: calcRem(18),
      xl: calcRem(20),
      xxl: calcRem(22),
      xxxl: calcRem(30),
      titleSize: calcRem(48),
    },
    viewPortSize: {
      mobile: `(max-width: ${size.mobile})`,
      tablet: `(max-width: ${size.tablet})`,
      desktop: `(max-width: ${size.desktop})`,
    },
  },
};

export default theme;
