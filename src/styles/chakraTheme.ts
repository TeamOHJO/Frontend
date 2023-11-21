import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  fonts: {
    heading: '\'Noto Sans KR\', sans-serif',
    body: '\'Noto Sans KR\', sans-serif',
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  colors: {
    basic: '#111111',
    navy: '#161C3A',
    error: '#C53030',
    success: '#0CBC72',
    alert: '#5296D5',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
      sizes: {
        lg: {
          fontSize: 'sm',
          w: '70%',
          h: '40px',
        },
        md: {
          fontSize: 'sm',
          w: '50%',
        },
        sm: {
          fontSize: 'xs',
          h: '40px',
        },
        xs: {
          fontSize: 'xs',
          h: '30px',
          w: '60px',
        },
      },
      colorScheme: {
        blue: {
          _hover: {
            backgroundColor: 'blue.50',
          },
          _active: {
            backgroundColor: 'blue.100',
          },
        },
        gray: {
          color: 'gray.600',
          _hover: {
            backgroundColor: 'gray.200',
          },
          _active: {
            backgroundColor: 'blue.300',
          },
        },
      },
      defaultProps: {
        size: 'md',
        variant: 'outline',
        colorScheme: 'blue',
      },
    },
    Alert: {},
  },
  styles: {
    global: {
      body: {
        color: 'basic',
        fontSize: 'sm',
        lineHeight: 'base',
      },
      a: {
        cursor: 'pointer',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
});
