const theme = {
  palette: {
    background: "#f9f9f9",
    text: {
      light: "#CFD8DC",
      main: "#f9f9f9",
      placeholder: "#333333",
    },
    button: {
      primary: "#BA68C8",
      secondary: "#9CCC65",
      success: "#CFD8DC",
    },
  },
  fontSize: {
    header: "4.2rem",
    subHeader: "3.2rem",
    title: "4.8rem",
    subTitle: "1.8rem",
    body: "1.8rem",
    navItem: "1.8rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  shadows: {
    light: "0 0.2rem 0.2rem rgba(0, 0, 0, 0.25)",
    med: "0 0.4rem 0.4rem rgba(0, 0, 0, 0.25)",
    dark: "0.6rem 0.6rem 0.6rem rgba(0, 0, 0, 0.25)",
  },
  margins: {
    gutter: 1,
  },
  widths: {
    content: 80,
  },
};

export type Theme = typeof theme;
export default theme;
