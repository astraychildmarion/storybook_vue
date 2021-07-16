import AlertComponent from '@/components/XYAlert.vue';

export default {
  title: 'XY Component/Alert',
  component: AlertComponent,
  argTypes: {
    type: { control: { type: 'select', options: ['success', 'info', 'warning', 'error'] } },
    message: { control: 'text' },
    description: { control: 'text'}
  },
  // example story parameter
  // parameters: {
  //   backgrounds: {
  //     values: [
  //       { name: 'red', value: '#f00' },
  //       { name: 'green', value: '#0f0' },
  //       { name: 'blue', value: '#00f' },
  //     ],
  //   },
  // }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AlertComponent },
  template: '<AlertComponent v-bind="$props" />',
});

export const Success = Template.bind({});
Success.args = {
  message: "Success Text",
  description: "This is a Success Text.",
  type: "success",
};
// example component parameter
// Success.parameters = {
//   backgrounds: {
//     values: [
//       { name: 'red', value: '#f00' },
//       { name: 'red', value: '#0f0' },
//       { name: 'red', value: '#00f' },
//     ],
//   }
// }
export const Info = Template.bind({});
Info.args = {
  message: "Success Text",
  description: "This is a Success Text.",
  type: "info",
};
export const Warning = Template.bind({});
Warning.args = {
  message: "Success Text",
  description: "This is a Success Text.",
  type: "warning",
};
export const Error = Template.bind({});
Error.args = {
  message: "Success Text",
  description: "This is a Success Text.",
  type: "error",
};