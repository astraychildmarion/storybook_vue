// import XYServerDetail from '@/components/ServerDetail/XYServerDetail.vue';
// import XYDetailCard from '@/components/ServerDetail/XYServerDetailCard.vue';

// export default {
//   title: 'XY Component/ServerDetailModal',
//   component: XYServerDetail,
//   subcomponents: { XYDetailCard },
//   argTypes: {
//     visible: {
//       control: { type: 'boolean' },
//       description: 'Show or hide the modal.',
//     },
//     title: {
//       control: { type: 'text' },
//       description: 'Title for this modal.',
//     },
//     width: {
//       control: { type: 'number' },
//       description: 'Default width is 1100px, which can contain 3 cards.',
//     },
//     content: {
//       control: { type: 'text' },
//       description:
//         '`<template #content></template>` <br>Slot for modal content. You can import `ServerDetailCard` into it.',
//     },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { XYServerDetail, XYDetailCard },
//   template: `
//   <XYServerDetail v-bind="$props">
//     <template #content>
//       <XYDetailCard v-bind="$props">
//         <template #content>
//           <div class="xy-server-detail-card__content-row" v-for="data in dataArray">
//             <div>{{ data.name }}</div>
//             <div v-html="data.value"></div>
//           </div>
//         </template>
//       </XYDetailCard>
//       <XYDetailCard v-bind="$props">
//         <template #content>
//           <div class="xy-server-detail-card__content-row" v-for="data in dataArray">
//             <div>{{ data.name }}</div>
//             <div v-html="data.value"></div>
//           </div>
//         </template>
//       </XYDetailCard>
//       <XYDetailCard v-bind="$props">
//         <template #content>
//           <div class="xy-server-detail-card__content-row" v-for="data in dataArray">
//             <div>{{ data.name }}</div>
//             <div v-html="data.value"></div>
//           </div>
//         </template>
//       </XYDetailCard>
//     </template>
//   </XYServerDetail>
//   `,
// });

// export const Default = Template.bind({});
// Default.args = {
//   visible: true,
//   title: 'Modal window',
//   width: 1100,
//   dataArray: [
//     {
//       name: 'Environment',
//       value: '1',
//     },
//     {
//       name: 'Zone',
//       value: '1',
//     },
//     {
//       name: 'Type',
//       value: 'VM',
//     },
//     {
//       name: 'BU',
//       value: '1',
//     },
//     {
//       name: 'Shared with',
//       value: '/:69GB<br>/boot:100MB...',
//     },
//     {
//       name: 'Rack',
//       value: '1',
//     },
//     {
//       name: 'Shared with',
//       value: '1',
//     },
//     {
//       name: 'Rack',
//       value: '1',
//     },
//   ],
// };
