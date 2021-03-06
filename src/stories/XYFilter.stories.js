import XYFilter from '@/components/XYFilter.vue';

export default {
  title: 'XY Component/Filter',
  component: XYFilter,
  argTypes: {
    filterOption: {
      description: 'The data source for selectors.',
      control: 'array',
    },
    filterDefaultValue: {
      control: 'array',
      description: 'To set default filter condition. You can use it in `change log` page.',
    },
    filterChange: {
      description:
        'The function would be trigger when all displayed inputs are filled, and emit a object of value.',
      action: 'filterChange',
    },
    filterSelectorChange: {
      description:
        'The function would be trigger when selector changes, and emit current selected dataIndex.',
      action: 'filterSelectorChange',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYFilter },
  template: `
  <div style="padding: 1rem">
    <XYFilter v-bind="$props" @filterChange="filterChange" @filterSelectorChange="filterSelectorChange" />
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  filterOption: [
    {
      title: 'BU',
      dataIndex: 'business_unit',
      type: 'dropdown',
      typeOption: [
        { title: 'YT-CWD', dataIndex: 'YT-CWD' },
        { title: 'XJ', dataIndex: 'XJ' },
        { title: 'SBK', dataIndex: 'SBK' },
      ],
    },
    {
      title: 'Group Admin',
      dataIndex: 'group_admin',
      type: 'dropdown',
      typeOption: [
        { title: 'Derek Chong (SBK))', dataIndex: 'Derek Chong (SBK)' },
        { title: 'Jin Chen (YT-CWD)', dataIndex: 'Jin Chen (YT-CWD)' },
        { title: 'CK Chang (YT-CWD)', dataIndex: 'CK Chang (YT-CWD)' },
        { title: 'Henry Chien (YT-CWD)', dataIndex: 'Henry Chien (YT-CWD)' },
      ],
    },
    {
      title: 'ServiceLAN IP',
      dataIndex: 'service_lan_ip',
    },
    {
      title: 'Hostname',
      dataIndex: 'hostname',
    },
    {
      title: 'BU Application Name',
      dataIndex: 'bu_application',
    },
    {
      title: 'Type',
      dataIndex: 'server_type',
      type: 'dropdown',
      typeOption: [
        {
          title: 'VM',
          dataIndex: 'vm',
        },
        {
          title: 'VPY',
          dataIndex: 'vpy',
        },
      ],
    },
    {
      title: 'CPU (GB)',
      dataIndex: 'cpu',
    },
    {
      title: 'RAM (GB)',
      dataIndex: 'ram',
    },
    {
      title: 'Disk',
      dataIndex: 'disk',
    },
    {
      title: 'OS',
      dataIndex: 'os',
    },
    {
      title: 'Provision date',
      dataIndex: 'provison_date',
      type: 'date',
    },
    {
      title: 'Decom date',
      dataIndex: 'decom_date',
      type: 'date',
    },
  ],
  filterDefaultValue: [
    {
      dataIndex: 'hostname',
      sort: 'is',
      value: 'host',
    },
    {
      dataIndex: 'server_type',
      sort: 'is',
      value: 'vpy',
    },
    {
      dataIndex: 'provison_date',
      sort: 'is',
      value: '2021-08-01 18:01:44',
    },
  ],
};
