<template>
  <div class="xy-customize-display__wrapper">
    <Button icon="edit" @click="showCustomizeDisplay">
      <span class="xy-customize-display--media-query">Customize Display</span>
    </Button>
    <Modal
      :keyboard="keyboard"
      :visible="visible"
      :closable="closable"
      :maskClosable="maskClosable"
      wrapClassName="xy-customize-display"
      :width="640"
    >
      <template slot="title">
        <div class="xy-customize-display__section-wrapper">
          <span :class="{ 'xy-customize-display__title--alert': selectedCountWrong }">
            {{ currentNumber }}/{{ maxNumber }}
          </span>
          <span :class="{ 'xy-customize-display__title--alert': selectedCountWrong }">
            {{ headerText }}
          </span>
        </div>
      </template>
      <CheckboxGroup
        :options="checkboxOption"
        :default-value="defaultSelected"
        :value="selectedCheckbox"
        @change="onCheckboxChange"
      />
      <template slot="footer">
        <div class="xy-customize-display__section-wrapper">
          <Button @click="clickCancel">Cancel</Button>
          <Button type="primary" @click="clickConfirm">Save</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue';
import { Modal, Checkbox, Button } from 'ant-design-vue';

Vue.use(Modal);
export default {
  name: 'XYCustomizeDisplay',
  props: {
    checkboxOption: {
      type: Array,
    },
    defaultSelected: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      visible: false,
      keyboard: false,
      closable: false,
      maskClosable: false,
      maxNumber: 7,
      selectedCheckbox: this.defaultSelected || 0,
      checkedValuesLength: this.defaultSelected.length,
      lastSelected: '',
      normalText: 'Please select 1~7 columns to show on landing page',
      exceedText: 'Exceed seven columns',
      needColumnTextRight: 'Please select one column at least',
      selectedCountWrong: false,
      headerText: '',
    };
  },
  components: { Modal, CheckboxGroup: Checkbox.Group, Button },
  computed: {
    currentNumber() {
      return this.selectedCheckbox.length;
    },
  },
  watch: {
    visible: {
      handler(newV) {
        if (newV === true && this.lastSelected !== '') {
          this.selectedCheckbox = this.lastSelected;
        }
        this.selectedCountWrong = false;
        this.headerText = this.normalText;
      },
      deep: true,
    },
    checkedValuesLength: {
      handler(newV) {
        if (newV > 7) {
          this.selectedCountWrong = true;
          this.headerText = this.exceedText;
        } else if (newV < 1) {
          this.selectedCountWrong = true;
          this.headerText = this.needColumnTextRight;
        } else {
          this.selectedCountWrong = false;
          this.headerText = this.normalText;
        }
      },
      immediate: true,
    },
  },
  methods: {
    showCustomizeDisplay() {
      this.visible = true;
    },
    clickCancel() {
      this.visible = false;
      if (this.lastSelected === '') this.lastSelected = this.defaultSelected;
    },
    clickConfirm() {
      this.$emit('clickCustomizeConfirm', this.selectedCheckbox);
      this.visible = false;
      this.lastSelected = this.selectedCheckbox;
    },
    onCheckboxChange(checkedValues) {
      this.checkedValuesLength = checkedValues.length;
      if (checkedValues.length >= 1 && checkedValues.length <= 7) {
        this.selectedCheckbox = checkedValues;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-customize-display {
  &--media-query {
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  &__section {
    &-wrapper {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 14px;
        color: $customizeModal-title;
        &.xy-customize-display__title--alert {
          color: $error-color;
        }
      }
    }
  }
}
::v-deep .ant-checkbox-group {
  width: 100%;
  &-item {
    width: 33.3%;
    margin-bottom: 16px;
    margin-right: 0;
    padding-right: 8px;
  }
}
::v-deep .ant-checkbox-wrapper {
  color: $customizeModal-text;
}
::v-deep .ant-modal-body {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  padding: 27px 40px;
}
</style>
