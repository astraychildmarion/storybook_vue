const componentList = require.context('@/components/', true, /\.vue$/);

function install(Vue) {
  componentList.keys().forEach((fileName) => {
    const componentConfig = componentList(fileName);
    const newName = fileName.replace(/.*\//, '').replace(/\.\w+$/, '');
    Vue.component(`${newName}`, componentConfig.default || componentConfig);
  });
}

export default {
  install,
};
