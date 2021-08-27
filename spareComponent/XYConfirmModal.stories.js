// import XYComfirmModal from '@/components/XYConfirmModal.vue';

// export default {
//   title: 'XY Component/ComfirmModal',
//   component: XYComfirmModal,
//   argTypes: {
//     ok: { action: 'ok', description: 'Custom event triggered after clicking .' },
//     cancel: { action: 'cancel', description: 'Custom event triggered after clicking .' },
//     visible: { description: 'Display modal or hide it.', control: 'boolean' },
//     type: {
//       description: "Choose modal's type.",
//       control: { type: 'select', options: ['primary', 'warning', 'danger'] },
//     },
//     title: { description: 'Title displayed in modal.', control: 'text' },
//     content: { description: 'Text displayed in modal.', control: 'text' },
//     okText: { description: 'Text for button to move forward.', control: 'text' },
//     cancelText: { description: 'Text for button to stay current condition.', control: 'text' },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { XYComfirmModal },
//   template: '<XYComfirmModal v-bind="$props" @cancel="visible = false" @ok="ok" />',
// });

// export const Primary = Template.bind({});
// Primary.args = {
//   visible: true,
//   type: 'primary',
// };
// export const Warning = Template.bind({});
// Warning.args = {
//   visible: true,
//   type: 'warning',
// };
// export const Danger = Template.bind({});
// Danger.args = {
//   visible: true,
//   type: 'danger',
// };
