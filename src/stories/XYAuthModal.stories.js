import AuthComponent from '@/components/XYAuthModal.vue';

export default {
  title: 'XY Component/AuthModal',
  component: AuthComponent,
  argTypes: {
    clickButton: { action: 'clickButton'}
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AuthComponent },
  template: '<AuthComponent v-bind="$props" @clickButton="clickButton" />',
});

export const Default = Template.bind({});
Default.args = {
};
