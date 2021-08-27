import XYAppLayout from '@/components/Layout/XYAppLayout.vue';
import * as appListData from './XYAppListDrawer.stories';
import * as siderData from './XYSider.stories';

export default {
  title: 'XY Component/AppLayout',
  component: XYAppLayout,
  argTypes: {
    // Sider data
    siderData: {
      control: 'array',
      description:
        "Data to render the sider's structure. Allow second layer of data as child. 'Icon' is for a-icon, 'name' is display name, 'to' is the router url",
    },
    selectedKeys: {
      control: 'array',
      description: "Current selected menu item's key. It sould be synchronous with route.",
    },
    defaultOpenKeys: {
      control: 'array',
      description: "Select a sub menu item's key beforehand",
    },
    // App drawer list data
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
    // header data
    manageAuth: {
      control: 'boolean',
      description: 'Authority/Permission to show the Manage section.',
    },
    logoUrl: {
      control: 'text',
      description: 'A logo link',
    },
    logoLink: {
      control: 'text',
      description: 'A href for logo.',
    },
    manageMenu: {
      control: 'array',
      description: 'Menu items of manage menu, including item text and link',
    },
    userMenu: {
      control: 'array',
      description: 'User items of user menu, including item text, link and icon key',
    },
    userInfo: {
      control: 'object',
      description:
        'User information, including user name and avatar. Avatar is ant design avatar, please prepare content you want to show.',
    },
    // app drawer list action
    clickAppListDrawerMenu: {
      action: 'clickAppListDrawerMenu',
      description:
        "Triggered after user clicked app list drawer's item, it would return path of clicked item.",
    },
    // sider action
    clickMenu: {
      action: 'clickMenu',
      description:
        "Triggered after user clicked sider's item, it would return path of clicked item.",
    },
    clickSubmenu: {
      action: 'clickSubmenu',
      description: "Triggered after user clicked sider's, it would return path of clicked item.",
    },
    // header action
    logOut: {
      action: 'logOut',
      description: 'Emit function for logout',
    },
    content: {
      type: 'component',
      description: 'Slot reserve for app content.',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYAppLayout },
  template: `
    <XYAppLayout 
      v-bind="$props"
      @logOut="logOut"
      @clickAppListDrawerMenu="clickAppListDrawerMenu"
      @clickSubmenu="clickSubmenu" 
      @clickMenu="clickMenu"
    >
      <template #content>
        <div style="padding: 20px;height: 100vh">
          <h1>hello world</h1>
          <p>welcome to xy-cloud-ui-kit</p>
        </div>
      </template>
    </XYAppLayout>
  `,
});

export const Default = Template.bind({});
Default.args = {
  selectAppListDrawerKey: ['3'],
  selectedKeys: ['3'],
  logoUrl: '/logo.svg',
  manageMenu: [{ name: 'Role Manage (IAM)', url: '#' }],
  userInfo: {
    name: 'User 1',
    avatar: '/logo.png',
  },
  siderData: [...siderData.default.args.siderData],
  appListDrawerData: [...appListData.Default.args.appListDrawerData],
  VER: '2.0.0',
};
