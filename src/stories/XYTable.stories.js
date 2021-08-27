import XYTable from '@/components/Table/XYTable.vue';
import fakedata from '@/assets/fakedata/tickets.json';
import fakelog from '@/assets/fakedata/changelog.json';
import { Divider, Popover, Icon, Checkbox, Button } from 'ant-design-vue';

import moment from 'moment';

export default {
  title: 'XY Component/Table',
  component: XYTable,
  argTypes: {
    columns: {
      description: 'Columns of table config',
      control: { type: 'array' },
    },
    dataSource: {
      description: 'Data record array to be displayed',
      control: { type: 'array' },
    },
    loading: {
      description: 'Loading status of table',
      control: { type: 'boolean' },
    },
    change: {
      action: 'change',
      description: 'Callback executed when pagination, filters or sorter is changed',
    },
    clickCheckbox: {
      action: 'clickCheckbox',
      description:
        'If columns has "checkbox", then checkboxes would be displayed. Click the checkbox would trigger event, which give back data of current row and $event.',
    },
    openTableDetail: {
      action: 'openTableDetail',
      description:
        'If attribute `showDetail: true` is avalible in columns, then this event can emit `record, index, $event`.',
    },
    openTableUpdate: {
      action: 'openTableUpdate',
      description:
        'If attribute `showUpdate: true` is avalible in columns, then this event can emit `record, index, $event`.',
    },
  },
};

const templateString = `
<div style="padding: 1rem">
  <XYTable v-bind="$props" 
    @clickCheckbox="clickCheckbox" 
    @openTableDetail="openTableDetail" 
    @openTableUpdate="openTableUpdate"
  >
    <template #checkbox="{record, index}">
      <Checkbox
      :disabled="record.decommission_date !== ''"
      @change="clickCheckbox(record, index)"
    />
    </template>
    <template #actions="{record, index}">
      <Button v-if="record?.showDetail" type="link" @click="openTableDetail(record, index)">Detail</Button>
      <Divider type="vertical" v-if="(record?.showDetail && record?.showUpdate)" />
      <Button v-if="record?.showUpdate" type="link" @click="openTableUpdate(record, index)">Update</Button>
    </template>
  </XYTable>
</div>
`;

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYTable, Divider, Popover, Icon, Checkbox, Button },
  template: templateString,
});

export const Default = Template.bind({});

const columnDefault = {
  sortDirections: ['descend', 'ascend'],
};

const getSorter = (key) => {
  const isUpdateTimeKey = key === 'updateTime';
  const generalComparer = (a, b) => a[key].length - b[key].length;
  const dateTimeComparer = (a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime();
  return isUpdateTimeKey ? dateTimeComparer : generalComparer;
};

Default.args = {
  columns: [
    {
      dataIndex: 'checkbox',
      title: '',
      scopedSlots: { customRender: 'checkbox' },
      ...columnDefault,
      sortDirections: [],
    },
    { dataIndex: 'hostname', title: 'Hostname', ...columnDefault },
    { dataIndex: 'serviceLanIp', title: 'ServiceLAN IP', ...columnDefault },
    { dataIndex: 'cpu', title: 'CPU', ...columnDefault },
    { dataIndex: 'ram_gb', title: 'RAM(GB)', ...columnDefault },
    { dataIndex: 'disk', title: 'Disk', ...columnDefault, sortDirections: [] },
    { dataIndex: 'buApplicationName', title: 'BU Application Name', ...columnDefault },
    {
      dataIndex: 'actions',
      title: 'Actions',
      scopedSlots: { customRender: 'actions' },
      ...columnDefault,
      sortDirections: [],
    },
  ].map((col) => ({ ...col, sorter: getSorter(col.dataIndex) })),
  dataSource: Array.from({ length: 10 }, () => ({
    hostname: 'PCH BO (Payment Clearing House Back Order)',
    serviceLanIp: '172.20.0.123',
    cpu: '8 core',
    ram_gb: '60',
    disk: '60',
    buApplicationName: 'INFRA-SYS',
    decommission_date: '',
    showDetail: true,
    showUpdate: true,
  })),
};

const MockDataTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYTable, Divider, Popover, Icon, Checkbox, Button },
  template: templateString,
});

export const MockData = MockDataTemplate.bind({});

MockData.args = {
  columns: [
    {
      dataIndex: 'checkbox',
      title: '',
      scopedSlots: { customRender: 'checkbox' },
      ...columnDefault,
      sortDirections: [],
    },
    { dataIndex: 'requestId', title: 'Request ID', ...columnDefault },
    { dataIndex: 'bu', title: 'BU', ...columnDefault },
    { dataIndex: 'env', title: 'ENV', ...columnDefault },
    { dataIndex: 'requestor', title: 'Requestor', ...columnDefault },
    { dataIndex: 'updateTime', title: 'Update Time', ...columnDefault },
    { dataIndex: 'ticketStatus', title: 'Ticket Status', ...columnDefault },
    { dataIndex: 'projectName', title: 'Project Name', ...columnDefault },
    {
      dataIndex: 'actions',
      title: 'Actions',
      scopedSlots: { customRender: 'actions' },
      ...columnDefault,
      sortDirections: [],
    },
  ].map((col) => ({ ...col, sorter: getSorter(col.dataIndex) })),
  dataSource: fakedata.data.map((x) => ({
    requestId: x.ticket.ticket_id + (x.ticket.ref_ticket_id ? ` [${x.ticket.ref_ticket_id}]` : ''),
    bu: x.ticket.gen_val.bu,
    env: x.ticket.gen_val.env,
    requestor: 'Juno Goh',
    updateTime: x.ticket.update_time,
    ticketStatus: 'To do',
    projectName: x.ticket.gen_val.project_name,
    decommission_date: '',
    showDetail: true,
    showUpdate: true,
  })),
};

const collapsedDataTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYTable, Divider, Popover, Icon, Checkbox, Button },
  template: templateString,
});

export const collapseData = collapsedDataTemplate.bind({});

collapseData.args = {
  columns: [
    { dataIndex: 'operator', title: 'Operator', ...columnDefault },
    { dataIndex: 'event', title: 'Event', ...columnDefault },
    { dataIndex: 'create_at', title: 'Date', ...columnDefault },
    { dataIndex: 'service_lan_ip', title: 'ServiceLAN IP', ...columnDefault },
    { dataIndex: 'env', title: 'Environment', ...columnDefault },
    { dataIndex: 'bu', title: 'BU', ...columnDefault },
    {
      dataIndex: 'actions',
      title: 'Actions',
      scopedSlots: { customRender: 'actions' },
      ...columnDefault,
      sortDirections: [],
    },
  ],
  dataSource: fakelog.data.map((x) => ({
    ...x,
    service_lan_ip:
      x.service_lan_ip.length > 1
        ? `${x.service_lan_ip[0]}(${x.service_lan_ip.length})`
        : x.service_lan_ip[0],
    create_at: x.create_at ? moment(new Date(x.create_at)).format('MMM/DD/YYYY HH:mm:ss') : '',
    showDetail: true,
  })),
};
