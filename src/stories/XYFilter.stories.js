import FilterComponent from '@/components/XYFilter';

export default {
  title: 'XY Component/Filter',
  component: FilterComponent,
  argTypes: {
    title: { control: 'text' },
    inputChange: { action: 'inputChange'}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FilterComponent },
  template: '<FilterComponent v-bind="$props" @inputChange="inputChange" />',
});

export const Default = Template.bind({});
Default.args = {
  filterData: [
    {
      value: 0,
      text: 'Request id'
    },
    {
      value: 1,
      text: 'BU'
    },
    {
      value: 2,
      text: 'Date'
    }
  ],
  title: 'hello filter',
  isShowFilterModal: true
};
