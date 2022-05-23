module.exports = {
  content: [],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760',
      },
      backgroundImage: theme => ({
        'spotfy-theme': "url('/assets/img/bursts.svg')",
        'spotfy-theme-mobile': "url('/assets/img/bursts-mobile.svg')"
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
}
