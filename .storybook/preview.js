export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'default', value: '#fff' },
      { name: 'light', value: '#eee' },
      { name: 'dark', value: '#000' },
      { name: 'blue', value: '#98EEFF' },
    ],
  },
}

export const decorators = [(story) => ({
  components: { story },
  template: '<div style="margin: 1em;"><story /></div>'
})]
