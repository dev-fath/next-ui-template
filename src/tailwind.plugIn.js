const plugin = require('tailwindcss/plugin');

const tailwindCustomPlugIn = plugin(function ({ addUtilities, addComponents }) {
  const scrollbarHide = {
    /* IE and Edge */
    '-ms-overflow-style': 'none',

    /* Firefox */
    'scrollbar-width': 'none',

    /* Safari and Chrome */
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
  const scrollbarDefault = {
    '.scrollbar-default': {
      '.scrollbar-hide': {
        /* IE and Edge */
        '-ms-overflow-style': 'auto',

        /* Firefox */
        'scrollbar-width': 'auto',

        /* Safari and Chrome */
        '&::-webkit-scrollbar': {
          display: 'block',
        },
      },
    },
  };

  const spinner = {
    '@keyframes spin': {
      to: {
        transform: 'rotate(360deg)',
      },
    },
    '.spinner': {
      border: '4px solid #f3f3f3',
      borderTopColor: '#3498db',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    },
  };

  addUtilities([scrollbarHide, scrollbarDefault]);

  addComponents([spinner]);
});

module.exports = tailwindCustomPlugIn;
