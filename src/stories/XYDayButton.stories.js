import XYDayButton from '@/components/XYDayButton.vue';

export default {
  title: 'XY Component/DayButton',
  component: XYDayButton,
  argTypes: {
    dayOption: {
      description: 'Data to render days button. It has default setting as 1d, 3d,7d.',
      type: 'array',
    },
    defaultValue: {
      description: 'A value to set the default selected day.',
      type: 'string',
    },
    cleanDayValue: {
      description:
        'A props to tell days button to cancel day choice. Inside the days button would listen to `cleanDayValue`, if it is true, then days would clean..',
      type: 'boolean',
    },
    clickDayButton: {
      action: 'clickDayButton',
      description: "A customize event triggered when click. Return target's value.",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYDayButton },
  template: `
    <div style="padding: 1rem">
      <XYDayButton @clickDayButton="clickDayButton" v-bind="$props" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  dayOption: [
    { title: '3d', value: '3' },
    { title: '5d', value: '5' },
    { title: '7d', value: '7' },
  ],
  defaultValue: '7',
  cleanDayValue: false,
};
