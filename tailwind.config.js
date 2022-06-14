module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#284139',
        'main-color': '#284139',
        'white-color': '#fff'
      }
    }
  },
  plugins: []
}
