import ButtonComponent from '@/components/XYButton.vue';

export default {
  title: 'XY Component/Button',
  component: ButtonComponent,
  argTypes: {
    size: { control: { type: 'select', options: ['small','default', 'large'] } },
    type: { control: { type: 'select', options: ['primary', 'default', 'danger'] } },
    shape: { control: { type: 'select', options: ['default', 'circle', 'round'] } },
    disable: { control: Boolean },
    clickButtonHandler: { action: 'clicked' }
  },
  args: {
    buttonText: 'Sample Button'
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonComponent },
  template: '<ButtonComponent @clickButton="clickButtonHandler" v-bind="$props" />',
});

export const Type = Template.bind({});
Type.args = {
  type: 'primary'
};

export const Default = Template.bind({});
Default.args = {
  type: 'default'
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...Default.args,
  icon: 'question-circle',
};

export const Shape = Template.bind({});
Shape.args = {
  ...Default.args,
  shape: 'round',
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};
