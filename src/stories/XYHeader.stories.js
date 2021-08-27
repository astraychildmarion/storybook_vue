import XYHeader from '@/components/XYHeader.vue';

export default {
  title: 'XY Component/Header',
  component: XYHeader,
  argTypes: {
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
    height: {
      control: 'text',
      description: 'Height of header. Default is 72px. ',
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
    logOut: {
      action: 'logOut',
      description: 'Emit function for logout',
    },
    clickTopLeftCorner: {
      action: 'clickTopLeftCorner',
      description: 'To control app list drawer.',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYHeader },
  template: `
    <XYHeader
      v-bind="$props"
      @logOut="logOut"
      @clickTopLeftCorner="clickTopLeftCorner"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  manageAuth: true,
  logoUrl: '/logo.svg',
  height: '72px',
  manageMenu: [
    { name: 'Role Manage (IAM)', url: '#', icon: 'team' },
    { name: 'XY IAM', url: '#', icon: 'user' },
  ],
  userMenu: [{ name: 'Member', url: '#', icon: 'user' }],
  userInfo: {
    name: 'User 1',
    avatar: 'SA',
  },
};
