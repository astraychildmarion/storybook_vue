import Sider from '@/components/XYSider.vue';

export default {
  title: 'XY Component/Sider',
  component: Sider,
  argTypes: {
    clickSubmenuTitle: {
      description: 'Action triggered by clicking sub menu items',
    },
    clickMenu: {
      description: 'Action triggered by clicking menu items',
    },
    defaultOpenKey: {
      description: 'Select a menu item beforehand',
    },
    defaultSelectedKey: {
      description: 'Select a sub menu item beforehand',
    },
    collapsed: {
      description: 'Open or collapse the sider'
    },
    siderData: {
      description: 'Data to render the sider\'s structure. Allow second layer of data as child.'
    },
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
      description: 'Provide 2 themes'
    }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Sider },
  template: '<Sider v-bind="$props"/>',
});

export const Default = Template.bind({});
Default.args = {
  siderData: [
    {
      icon: 'user',
      name: 'Member',
      to: '/Member',
    },
    {
      icon: 'pie-chart',
      name: 'Chart',
      to: '/Chart',
    },
    {
      icon: 'block',
      name: 'Product',
      child: [
        {
          icon: null,
          name: 'Product 1',
          to: '/Product1',
        },
        {
          icon: null,
          name: 'Product 2',
          to: '/Product2',
        },
      ],
    },
  ],
  defaultOpenKey: ['Product 1'],
  defaultSelectedKey: ['Member'],
  collapsed: true,
};
