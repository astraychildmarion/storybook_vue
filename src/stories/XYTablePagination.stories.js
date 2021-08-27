import XYTablePagination from '@/components/Table/XYTablePagination.vue';

export default {
  title: `XY Component/TablePagination`,
  component: XYTablePagination,
  argTypes: {
    total: {
      type: 'number',
      description: 'Qualtity of data',
    },
    defaultCurrent: {
      type: 'number',
      description: 'Default initial page number',
    },
    defaultPageSize: {
      type: 'number',
      description: 'Default number of data displayed per page',
    },
    changePage: {
      action: 'changePage',
      description:
        'A callback function, executed when the pages changed, and it takes the resulting page number and pageSize as its arguments',
    },
    showSizeChange: {
      action: 'showSizeChange',
      description:
        'A callback function, executed when the quantity of displayed data per page is changed, and it takes the resulting page number and pageSize as its arguments',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYTablePagination },
  template: `
  <div style="padding: 1rem">
    <XYTablePagination v-bind="$props" @changePage="changePage" @showSizeChange="showSizeChange" />
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  total: 1000,
  defaultCurrent: 2,
  defaultPageSize: 30,
};
