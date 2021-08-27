import XYCustomizeDisplay from '@/components/XYCustomizeDisplay.vue';

export default {
  title: 'XY Component/CustomizeDisplay',
  component: XYCustomizeDisplay,
  argTypes: {
    clickCustomizeConfirm: {
      action: 'clickCustomizeConfirm',
      description:
        'A custom event triggered after click confirm. Pass selected checkboxes as argument. Please remember to close the modal by yourself.',
    },
    checkboxOption: {
      description:
        'data to render checkbox group. It is an Array includes objects. Each object has label and value 2 attributes.',
    },
    defaultSelected: {
      description:
        "Array to set default selected checkbox. It is an Array including checkboxOption's value attribute.<br> For example: `['bu', 'disk_partition]`",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYCustomizeDisplay },
  template: `
    <div style="padding: 1rem">
      <XYCustomizeDisplay v-bind="$props" @clickCustomizeConfirm="clickCustomizeConfirm" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  visible: false,
  checkboxOption: [
    {
      label: 'BU',
      value: 'bu',
    },
    {
      label: 'Zone',
      value: 'zone',
    },
    {
      label: 'Environment',
      value: 'env',
    },
    {
      label: 'Hostname',
      value: 'host',
    },
    {
      label: 'Type',
      value: 'type',
    },
    {
      label: 'Disk Partition',
      value: 'disk_partition',
    },
    {
      label: 'OS',
      value: 'os',
    },
    {
      label: 'Decom date',
      value: 'decom_date',
    },
  ],
  defaultSelected: ['bu', 'host', 'type'],
};
