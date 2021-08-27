// import XYCountdownAlert from '@/components/XYCountdownAlert.vue';

// export default {
//   title: 'XY Component/Countdown Alert',
//   component: XYCountdownAlert,
//   argTypes: {
//     visible: { description: 'Display alert or hide it.', control: 'boolean' },
//     type: {
//       description: "Choose alert's type.",
//       control: { type: 'select', options: ['success', 'error'] },
//     },
//     message: { description: 'Message display in alert.', control: 'text' },
//     width: { description: 'Default width is 350px.', control: 'text' },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { XYCountdownAlert },
//   template: '<div><h4>Disappear after 4 seconds</h4><XYCountdownAlert v-bind="$props" /></div>',
// });

// export const Success = Template.bind({});
// Success.args = {
//   visible: true,
//   message: 'Servers have been deleted.',
//   type: 'success',
//   width: '250px',
// };
// export const Error = Template.bind({});
// Error.args = {
//   visible: true,
//   message: 'An error occurred. Please try again later.',
//   type: 'error',
//   width: '350px',
// };
