import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  fonts: {
    heading: "'Noto Sans KR', sans-serif",
    body: "'Noto Sans KR', sans-serif",
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
    'gray.84': '#848484',
    navy: '#161C3A',
    error: '#C53030',
    success: '#0CBC72',
    alert: '#5296D5',
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'bold',
        color: 'basic',
      },
      sizes: {
        lg: {
          fontSize: 'lg',
          lineHeight: '1.5',
        },
        md: {
          fontSize: 'md',
          lineHeight: '1.5',
        },
        sm: {
          fontSize: 'sm',
          lineHeight: '1.5',
        },
        xs: {
          fontSize: 'xs',
          lineHeight: '1.5',
        },
      },
    },
    Text: {
      baseStyle: {
        fontWeight: 'regular',
        color: 'basic',
      },
      sizes: {
        lg: {
          fontSize: 'lg',
        },
        md: {
          fontSize: 'md',
        },
        sm: {
          fontSize: 'sm',
        },
        xs: {
          fontSize: 'xs',
        },
      },
      defaultProps: {
        size: 'sm',
      },
    },
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
        mini: {
          fontSize: 'xs',
          h: '21px',
          w: '72px',
        },
      },
      variants: {
        blue: {
          border: '1px solid',
          borderColor: 'blue.500',
          color: 'blue.500',
          _hover: {
            backgroundColor: 'blue.50',
          },
          _active: {
            backgroundColor: 'blue.100',
          },
        },
        gray: {
          border: '1px solid',
          borderColor: 'gray.200',
          color: 'gray.600',
          _hover: {
            backgroundColor: 'gray.200',
          },
          _active: {
            backgroundColor: 'gray.300',
          },
        },
        grayFull: {
          backgroundColor: 'gray.100',
          _hover: {
            backgroundColor: 'gray.200',
          },
          _active: {
            backgroundColor: 'gray.300',
          },
        },
        navy: {
          border: '1px solid',
          borderColor: 'blue.600',
          color: 'basic',
          _hover: {
            backgroundColor: 'blue.50',
          },
        },
        navyClicked: {
          backgroundColor: 'blue.600',
          color: 'white',
        },
      },
      defaultProps: {
        size: 'md',
      },
    },
    Alert: {
      defaultProps: {
        variant: 'solid',
        status: 'info',
      },
    },
    Modal: {
      baseStyle: {
        alignItems: 'center',
        margin: 0,
      },
    },
    Badge: {
      baseStyle: {
        fontWeight: 'bold',
        fontSize: 'xs',
      },
      variants: {
        gray: {
          backgroundColor: 'gray.100',
          color: 'gray.800',
        },
        teal: {
          backgroundColor: 'teal.100',
          color: 'teal.800',
        },
        blue: {
          backgroundColor: 'blue.100',
          color: 'blue.800',
        },
        green: {
          backgroundColor: 'green.100',
          color: 'green.800',
        },
        red: {
          backgroundColor: 'red.100',
          color: 'red.800',
        },
        purple: {
          backgroundColor: 'purple.100',
          color: 'purple.800',
        },
        orange: {
          backgroundColor: 'orange.100',
          color: 'orange.800',
        },
        disabled: {
          backgroundColor: 'blackAlpha.200',
          color: 'blackAlpha.600',
        },
      },
    },
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
