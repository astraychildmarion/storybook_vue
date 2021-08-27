// import XYServerDetailCard from '@/components/ServerDetail/XYServerDetailCard.vue';

// export default {
//   title: 'XY Component/ServerDetailCard',
//   component: XYServerDetailCard,
//   argTypes: {
//     title: {
//       control: { type: 'text' },
//       description: 'Title for this card.',
//     },
//     content: {
//       description:
//         '`<template #content></template>` <br>Slot for card content. You can use class name`xy-server-detail-card__content-row` to build appearence fast. Inside each `.xy-server-detail-card__content-row` need 2 div, one for data name, one for data value. You can use html tag in mentioned 2 div.',
//     },
//     dataArray: {
//       control: { type: 'array' },
//       description: '*Optional.',
//     },
//   },
// };

// const Template = (args, { argTypes }) => ({
//   props: Object.keys(argTypes),
//   components: { XYServerDetailCard },
//   template: `
//   <XYServerDetailCard v-bind="$props">
//     <template #content>
//       <div class="xy-server-detail-card__content-row" v-for="data in dataArray">
//         <div v-html="data.name" />
//         <div v-html="data.value" />
//       </div>
//     </template>
//   </XYServerDetailCard>
//   `,
// });

// export const Default = Template.bind({});
// Default.args = {
//   title: 'CARD title :)',
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
