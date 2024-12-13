const color = {
  white: "hsl(0, 0%, 100%)",
  black: "#1A202C",

  red100: "hsl(4, 57%, 79%)",
  red200: "hsl(4, 71%, 61%)",

  pink400: "hsl(2, 78%, 78%)",
  pink500: "hsl(2, 78%, 72%)",
  pink600: "hsl(2, 78%, 62%)",

  gray100: "hsl(210, 40%, 96%)",
  gray200: "hsl(210, 33%, 93%)",
  gray300: "hsl(214, 28%, 89%)",
  gray400: "hsl(214, 28%, 80%)",
  gray500: "hsl(214, 20%, 69%)",
  gray600: "hsl(214, 15%, 52%)",
  gray700: "hsl(216, 17%, 35%)",
  gray800: "hsl(218, 23%, 23%)",
  gray900: "hsl(220, 26%, 14%)",

  green100: "hsl(187, 50%, 93%)",
  green200: "hsl(174, 35%, 83%)",
  green300: "hsl(174, 39%, 75%)",
  green400: "hsl(174, 35%, 66%)",
  green500: "hsl(174, 38%, 49%)",
  green600: "hsl(174, 41%, 43%)",
  green700: "hsl(174, 46%, 34%)",
  green800: "hsl(178, 50%, 25%)",
  green900: "hsl(174, 48%, 19%)",

  teal100: "hsl(168 ,100%, 95%)",
  teal200: "hsl(170 ,77%, 83%)",
  teal300: "hsl(172 ,67%, 70%)",
  teal400: "hsl(174 ,59%, 56%)",
  teal500: "hsl(177 ,52%, 46%)",
  teal600: "hsl(179 ,51%, 39%)",
  teal700: "hsl(178 ,50%, 30%)",
  teal800: "hsl(183 ,42%, 27%)",
  teal900: "hsl(185 ,40%, 23%)",

  semanticTeal: "#00b5ad",
  semanticRed: "#db2828",

  blue100: "hsl(205, 54%, 91%)",
  blue200: "hsl(205, 64%, 82%)",
  blue300: "hsl(205, 54%, 67%)",
  blue400: "hsl(205, 49%, 54%)",
  blue500: "hsl(205, 49%, 45%)",
  blue600: "hsl(205, 49%, 45%)",
  blue700: "hsl(205, 49%, 45%)",
  blue800: "hsl(205, 49%, 45%)",
  blue900: "hsl(205, 49%, 45%)",

  lifewayGray: "hsl(270, 2%, 25%)",
  lifewayYellow: "hsl(40, 98%, 57%)",
};

const type = {
  family: "'Inter', sans-serif",
  weight: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  scale: {
    _12: "12px",
    _14: "14px",
    _16: "16px",
    _18: "18px",
    _20: "20px",
    _24: "24px",
    _30: "30px",
    _36: "36px",
    _48: "48px",
    _60: "60px",
    _72: "72px",
  },
};

const space = {
  _4: "4px",
  _8: "8px",
  _12: "12px",
  _16: "16px",
  _24: "24px",
  _32: "32px",
  _48: "48px",
  _64: "64px",
  _96: "96px",
  _128: "128px",
  _192: "192px",
  _256: "256px",
  _384: "384px",
  _512: "512px",
  _640: "640px",
  _768: "768px",
};

const shadow = {
  medium: "0 4px 8px rgba(0,0,0,0.25)",
  button: "0 5px 10px rgba(50,50,93,.11), 0 2.5px 5px rgba(0,0,0,.08)",
  buttonHover:
    "0 7.5px 15px rgba(50, 50, 93, 0.1), 0 5px 10px rgba(0, 0, 0, 0.08)",
};

const border = {
  radius: "4px",
  color: color.gray400,
};

export { color, type, space, shadow, border };
