import XYSider from '@/components/XYSider.vue';

export default {
  title: 'XY Component/Sider',
  component: XYSider,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
      description: 'Provide 2 themes, light one for default console page, dark for product pages.',
    },
    siderData: {
      control: 'array',
      description:
        "Data to render the sider's structure. Allow second layer of data as child. 'Icon' is for a-icon, 'name' is display name, 'to' is the router url",
    },
    collapsed: {
      description: 'A props to open or fold the sider.',
    },
    collapseWidth: {
      control: 'text',
      description: 'The width when sider collapsed. Default is 72px.',
    },
    selectedKeys: {
      control: 'array',
      description: "Current selected menu item's key. It sould be synchronous with route.",
    },
    defaultOpenKeys: {
      control: 'array',
      description: "Select a sub menu item's key beforehand",
    },
    clickSubmenu: {
      action: 'clickSubmenu',
      description: 'Action triggered by clicking sub menu items',
    },
    clickMenu: {
      action: 'clickMenu',
      description:
        'Action triggered by clicking menu items. You can update `selectKey` by this function',
    },
    siderCollapse: {
      action: 'siderCollapse',
      description: 'An emit function to send out collapsed boolean.',
    },
  },
  args: {
    selectedKeys: ['1'],
    collapseWidth: '72px',
    stopToggle: false,
    isCollapsed: true,
    siderData: [
      {
        icon: 'control',
        name: 'Console',
        path: '/',
        key: '0',
      },
      {
        icon: 'control',
        name: 'Console',
        path: '/console',
        key: '1',
      },
      {
        icon: 'database',
        name: 'XY Compute',
        path: '/compute',
        key: '2',
      },
      {
        icon: 'profile',
        name: 'Request Manager',
        path: '/Chart',
        key: '3',
      },
      {
        icon: 'control',
        name: 'Console',
        path: '/',
        key: '4',
      },
      // KEEP: to demo long sider
      // {
      //   icon: 'database',
      //   name: 'XY Compute',
      //   path: '/compute',
      //   key: '5'
      // },
      // {
      //   icon: 'profile',
      //   name: 'Request Manager',
      //   path: '/Chart',
      //   key: '6'
      // },
      // {
      //   icon: 'control',
      //   name: 'Console',
      //   path: '/',
      //   key: '7'
      // },
      // {
      //   icon: 'database',
      //   name: 'XY Compute',
      //   path: '/compute',
      //   key: '8'
      // },
      // {
      //   icon: 'profile',
      //   name: 'Request Manager',
      //   path: '/Chart',
      //   key: '9'
      // },
      // {
      //   icon: 'control',
      //   name: 'Console',
      //   path: '/',
      //   key: '10'
      // },
      // {
      //   icon: 'database',
      //   name: 'XY Compute',
      //   path: '/compute',
      //   key: '12'
      // },
      // {
      //   icon: 'profile',
      //   name: 'Request Manager',
      //   path: '/Chart',
      //   key: '13'
      // }
    ],
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYSider },
  template: `
  <XYSider 
    v-bind="$props"
    :collapsed="isCollapsed"
    @clickSubmenu="clickSubmenu" 
    @clickMenu="clickMenu"
    @siderCollapse="isCollapsed = !isCollapsed" 
  />`,
});

export const Light = Template.bind({});
Light.args = {
  theme: 'light',
  selectedKeys: ['1'],
};
export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
  selectedKeys: ['2'],
};
