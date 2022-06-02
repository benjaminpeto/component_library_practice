module.exports = {
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
