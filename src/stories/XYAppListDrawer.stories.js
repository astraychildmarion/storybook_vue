import XYAppListDrawer from '@/components/XYAppListDrawer.vue';

export default {
  title: 'XY Component/AppListDrawer',
  component: XYAppListDrawer,
  argTypes: {
    appListDrawerShow: {
      control: 'boolean',
      description: 'Show or hide app list drawer.',
    },
    appListDrawerData: {
      control: 'array',
      description:
        'An array to render app list drawer. It needs 3 attributes in each object: name, path, icon. If you need to use icon file, please use iconPath.',
    },
    selectAppListDrawerKey: {
      control: 'array',
      description: "Current selected app list drawer item's key. It sould be simulated with route.",
    },
    VER: {
      control: 'array',
      description: 'To identify the version of current product.',
    },
    clickAppListDrawerMenu: {
      action: 'clickAppListDrawerMenu',
      description:
        "Triggered after user clicked app list drawer's item, it would return path of clicked item.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYAppListDrawer },
  template: `
  <div style="position: relative">
    <XYAppListDrawer
      v-bind="$props"
      @clickAppListDrawerMenu="clickAppListDrawerMenu"
    />
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  VER: '1.0.0',
  appListDrawerShow: false,
  selectAppListDrawerKey: ['2'],
  appListDrawerData: [
    {
      icon: 'control',
      name: 'control',
      path: 'control',
      key: '0',
    },
    {
      iconPath: './Icon_interface_RM_outline.svg',
      name: 'Request Manager',
      path: 'requestmanager',
      key: '1',
    },
    {
      iconPath: './Icon_interface_SI_outline.svg',
      name: 'Server Inventory',
      path: 'serverinventory',
      key: '2',
    },
    {
      iconPath: './Icon_interface_XYC_outline.svg',
      name: 'XY Compute',
      path: 'xycompute',
      key: '3',
    },
    {
      iconPath: './Icon_interface_IAM_outline.svg',
      name: 'XY IAM',
      path: 'xyiam',
      key: '4',
    },
  ],
};
