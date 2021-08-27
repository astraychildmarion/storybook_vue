<template>
  <div>
    <Space size="small">
      <RadioGroup
        :cleanDayValue="cleanDayValue"
        :defaultValue="defaultValue"
        button-style="solid"
        v-for="item in dayOption"
        :key="item.value"
        v-model="value"
      >
        <RadioButton @click="clickRadioButton" :value="item.value">{{ item.title }}</RadioButton>
      </RadioGroup>
    </Space>
  </div>
</template>
<script>
import { Radio, Space } from 'ant-design-vue';

export default {
  name: 'XYDayButton',
  components: { RadioButton: Radio.Button, RadioGroup: Radio.Group, Space },
  props: {
    dayOption: {
      default() {
        return [
          { title: '3d', value: '3' },
          { title: '5d', value: '5' },
          { title: '7d', value: '7' },
        ];
      },
      type: Array,
    },
    defaultValue: {
      default: '7',
      type: String,
    },
    cleanDayValue: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      value: '',
      currentValue: '',
    };
  },
  watch: {
    cleanDayValue: {
      handler(newV) {
        if (newV === true) {
          this.value = null;
          this.currentValue = null;
        }
      },
      immediate: true,
    },
  },
  created() {
    this.value = this.defaultValue;
    this.currentValue = this.defaultValue;
    this.emitClickDayButtonEvent(this.value);
  },
  methods: {
    clickRadioButton({ target }) {
      if (target.value === this.currentValue) {
        this.value = null;
        this.currentValue = null;
        this.emitClickDayButtonEvent({});
      } else if (target.value !== this.currentValue) {
        this.currentValue = target.value;
        this.emitClickDayButtonEvent(target.value);
      }
    },
    emitClickDayButtonEvent(value) {
      const isNumber = (n) => typeof n === typeof 0;
      const amountOfDaysBefore = isNumber(value) ? value : parseInt(value, 10);
      let payload;
      if (isNumber(amountOfDaysBefore)) {
        const dateObjsInRange = this.calculateDateObjsInRange(amountOfDaysBefore);
        if (dateObjsInRange.length > 0) {
          payload = {
            start: dateObjsInRange[dateObjsInRange.length - 1],
            end: dateObjsInRange[0],
            dates: dateObjsInRange,
          };
        }
      }
      this.$emit('clickDayButton', payload);
    },
    calculateDateObjsInRange(amountOfDaysBefore) {
      return Array.from({ length: amountOfDaysBefore }, (_, index) => {
        const todayDateObj = new Date();
        const todayDate = todayDateObj.getDate();
        todayDateObj.setDate(todayDate - index);
        if (index > 0) {
          todayDateObj.setHours(0);
          todayDateObj.setMinutes(0);
          todayDateObj.setSeconds(0);
        }
        return new Date(todayDateObj);
      });
    },
  },
};
</script>
