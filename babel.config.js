module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
  ],
};
