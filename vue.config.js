const path = require('path');
const antVariables = require('./src/styles/antd-variables');

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: '/',
  productionSourceMap: false, // false 不產生 map 文件,
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias.set('@', resolve('src/'));
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      scss: {
        // 傳入共用的全域變數scss
        additionalData: `
        @import "@/assets/scss/base/_color.scss";
        `,
      },
      // ant-design customize theme
      less: {
        // 改 ant design 主題色
        lessOptions: {
          modifyVars: {
            ...antVariables,
            'primary-color': '#0488C5',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};
