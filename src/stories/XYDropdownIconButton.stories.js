import XYDropdownIconButton from '@/components/XYDropdownIconButton.vue';

export default {
  title: 'XY Component/DropdownIconButton',
  component: XYDropdownIconButton,
  argTypes: {
    buttonText: {
      description: 'Data array for rendering dropdown list.',
      type: 'string',
    },
    icon: {
      control: {
        type: 'select',
        options: ['cloud-download', 'filter', 'edit'],
      },
    },
    loading: {
      type: 'boolean',
      description: 'To set the icon status.',
    },
    clickDropdown: {
      action: 'clickDropdown',
      description:
        'A custom event triggered when user click dropdown list, which would return key value of the chosen dropdown item.',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYDropdownIconButton },
  template: `
    <div style="padding: 1rem">
      <XYDropdownIconButton @clickDropdown="clickDropdown" v-bind="$props" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'cloud-download',
  loading: false,
  buttonText: 'Export excel',
  dropdownData: [
    { title: 'All Servers', value: '1' },
    { title: 'Current Environment', value: '2' },
    { title: 'Filtered Result', value: '3' },
  ],
};
