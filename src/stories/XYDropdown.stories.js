import DropdownMenuComponent from '@/components/XYDropdownMenu.vue';

export default {
  title: 'XY Component/DropdownMenu',
  component: DropdownMenuComponent,
  argTypes: {
    title: { control: 'text' },
    dropdownIcon: { control: { type: 'select', options: ['down', 'down-circle', 'caret-down'] }}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DropdownMenuComponent },
  template: '<DropdownMenuComponent v-bind="$props" />',
});

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  title: "Hover me!",
  dropdownIcon: "down",
  menuData: [
    {
      url: 'https://antdv.com/components/dropdown-cn/',
      name: 'dropdown'
    },
    {
      url: 'https://storybook.js.org/docs/vue/essentials/actions',
      name: 'storybook'
    },
    {
      url: 'https://cli.vuejs.org/guide/css.html#pre-processors',
      name: 'vue precessor'
    }
  ],
};