import CardComponent from '@/components/XYCard.vue';
import DetailComponent from '@/components/XYTextDetail.vue'

export default {
  title: 'XY Component/Card',
  component: CardComponent,
  subcomponents : { DetailComponent },
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CardComponent, DetailComponent },
  template: '<CardComponent v-bind="$props"><DetailComponent v-bind="$props"/></CardComponent>',
});

export const Default = Template.bind({});
Default.args = {
  detail: {
    type: '整套公寓',
    add: '宜蘭縣羅東鎮公正路284巷1-3號',
    source: 'Ann\'s Story～青庭',
    price: '$7,280 TWD',
    unit: '晚',
    imageSrc: 'https://a0.muscache.com/im/pictures/5a647313-052f-48bd-873d-00094e3cb96a.jpg?im_w=480'
  }
};
