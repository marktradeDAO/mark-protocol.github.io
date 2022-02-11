import { createTheme } from "@mui/material/styles";

// Create a MUI theme here.
const MarkTradeWebTheme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#000080',
        contrastText: '#FFFFFF',
        light: '#173a5e',
        dark: '#173a5e',
      },
      divider: '#265d97',
      background: {
        default: '#ffffff',
        paper: '#ffffff',
      },
      text: {
        primary: 'navy',
        secondary: 'navy',
        disabled: '#344c64',
        hint: '#199c50',
      }
    }, 
    components: {
      Container: {
        styleOverrides: {
          root: {
            justifyContent: 'center'
          }
        }
      },
      AppBar: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            boxShadow: 'none'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: '#132f4c',
              boxShadow: 'none'
            },
            textTransform: 'none',
            boxShadow: 'none'
          }
        },
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: '#ffffff',
            boxShadow: 'none'
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            boxShadow: 'none'
          }
        }
      },
      MuiTypography: {
        defaultProps: {
          variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
          },
        },
      },
    },
    typography: {
      h1: {
        color: '#000080'
      },
      fontFamily: [
        'Roboto'
      ]
    }
  });

  MarkTradeWebTheme.typography.h1 = {
      fontSize: '2.2rem'
  }


export default MarkTradeWebTheme;