<template>
  <div class="xy-toolbox__wrapper" :style="rightStyle">
    <Row type="flex" justify="space-between">
      <Col :sm="showRangePicker ? 24 : 14" :xl="14">
        <div class="xy-toolbox__left">
          <div class="xy-toolbox__left__left">
            <Space size="small" align="center">
              <XYCustomizeDisplay
                v-if="showCustomizeDisplay"
                :checkboxOption="customizeDisplaySetting.checkboxOption"
                :defaultSelected="customizeDisplaySetting.defaultSelected"
                @clickCustomizeConfirm="clickCustomizeConfirm"
              />
              <XYFilter
                v-if="showFilter"
                :filterOption="filterSetting.filterOption"
                :filterDefaultValue="filterDefaultValue"
                @filterChange="filterChange"
                @filterSelectorChange="filterSelectorChange"
              />
              <slot name="functionalButton" />
              <XYDayButton
                v-if="showDay"
                :dayOption="daySetting.dayOption"
                :cleanDayValue="cleanDayValueInner"
                :defaultValue="daySetting.defaultValue"
                @clickDayButton="clickDayButton"
              />
            </Space>
          </div>
          <div class="xy-toolbox__left__right">
            <Space size="small" align="center">
              <RangePicker
                v-model="rangePickerInnerValue"
                :defaultValue="this.rangePickerDefaultValue ? defaultMomentValue : null"
                :value="rangePickerInnerValue"
                v-if="showRangePicker"
                @ok="changeCalendar"
                @change="checkCalendarClear"
                :show-time="rangePickerSetting.showTimeFormat"
                :format="rangePickerSetting.format"
                :disabled-date="disabledDate"
                :allowClear="rangePickerSetting.allowClear"
                :inputReadOnly="rangePickerSetting.inputReadOnly"
                :placeholder="rangePickerSetting.placeholder"
                :style="{ marginStart: '8px' }"
              >
                <template #suffixIcon>
                  <Icon type="calendar" />
                </template>
              </RangePicker>
            </Space>
          </div>
        </div>
      </Col>
      <Col :sm="showRangePicker ? 24 : 10" :xl="10">
        <div class="xy-toolbox__right">
          <Space size="small" align="center">
            <XYDropdownIconButton
              v-if="showDropdown"
              :buttonText="dropdownSetting.buttonText"
              :icon="dropdownSetting.icon"
              :loading="dropdownSetting.loading"
              :dropdownData="dropdownSetting.dropdownData"
              @clickDropdown="clickDropdown"
            />
            <XYTablePagination
              v-if="showPagination"
              :total="tablePageSetting.total"
              :defaultCurrent="tablePageSetting.defaultCurrent"
              :defaultPageSize="tablePageSetting.dafaultPageSize"
              @changePage="changePage"
              @showSizeChange="showSizeChange"
            />
          </Space>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { Space, DatePicker, Row, Col, Icon } from 'ant-design-vue';
import XYTablePagination from '@/components/Table/XYTablePagination.vue';
import moment from 'moment';
import XYCustomizeDisplay from './XYCustomizeDisplay.vue';
import XYFilter from './XYFilter.vue';
import XYDropdownIconButton from './XYDropdownIconButton.vue';
import XYDayButton from './XYDayButton.vue';

export default {
  name: 'XYToolbox',
  components: {
    Icon,
    Row,
    Col,
    Space,
    XYDropdownIconButton,
    RangePicker: DatePicker.RangePicker,
    XYTablePagination,
    XYCustomizeDisplay,
    XYFilter,
    XYDayButton,
  },
  props: {
    showCustomizeDisplay: {
      default: false,
      type: Boolean,
    },
    showFilter: {
      default: false,
      type: Boolean,
    },
    showDay: {
      default: false,
      type: Boolean,
    },
    showRangePicker: {
      default: false,
      type: Boolean,
    },
    showDropdown: {
      default: false,
      type: Boolean,
    },
    showPagination: {
      default: false,
      type: Boolean,
    },
    customizeDisplaySetting: {
      type: Object,
    },
    filterSetting: {
      type: Object,
    },
    filterDefaultValue: {
      type: Array,
    },
    rangePickerSetting: {
      type: Object,
      default() {
        return {
          showTimeFormat: { format: 'HH:mm:ss' },
          format: 'YYYY-MM-DD HH:mm:ss',
          allowClear: true,
          inputReadOnly: true,
          placeholder: ['Start date', 'End date'],
          buttonText: 'Confirm',
        };
      },
    },
    rangePickerDefaultValue: {
      default: null,
    },
    daySetting: {
      type: Object,
      default() {
        return {
          dayOption: [
            { title: '3d', value: '3' },
            { title: '5d', value: '5' },
            { title: '7d', value: '7' },
          ],
          defaultValue: '7',
        };
      },
    },
    cleanDayValue: {
      type: Boolean,
      default: false,
    },
    dropdownSetting: {
      type: Object,
      default() {
        return {
          icon: 'cloud-download',
          loading: false,
          buttonText: 'Export excel',
          dropdownData: [
            { title: 'All Servers', value: '1' },
            { title: 'Current Environment', value: '2' },
            { title: 'Filtered Result', value: '3' },
          ],
        };
      },
    },
    tablePageSetting: {
      type: Object,
    },
  },
  created() {
    this.daysButtonValue = this.daySetting.defaultValue;
  },
  data() {
    return {
      rangePickerInnerValue: null,
      daysButtonValue: '',
      cleanDayValueInner: false,
    };
  },
  computed: {
    defaultMomentValue() {
      return [
        moment(this.rangePickerDefaultValue[0], this.rangePickerSetting.format),
        moment(this.rangePickerDefaultValue[1], this.rangePickerSetting.format),
      ];
    },
    rightStyle() {
      return {
        '--upper-margin': this.showRangePicker ? '8px' : '0',
      };
    },
  },
  watch: {
    rangePickerDefaultValue: {
      handler(newV) {
        if (newV && newV.length === 2) {
          const dateData = [
            moment(newV[0]).format(this.rangePickerSetting.format),
            moment(newV[1]).format(this.rangePickerSetting.format),
          ];
          this.daysButtonValue = '';
          this.cleanDayValueInner = true;
          this.rangePickerInnerValue = dateData;
        }
      },
      immediate: true,
    },
    cleanDayValue: {
      handler(newV) {
        this.cleanDayValueInner = newV;
      },
      immediate: true,
    },
  },
  methods: {
    moment,
    disabledDate(current) {
      // Can not select days 2 years ago or after today
      const today = new Date();
      const twoYearsAgo = new Date(today.getFullYear() - 2, today.getMonth(), today.getDate());
      return current < moment(twoYearsAgo) || current > moment();
    },
    checkCalendarClear(dates) {
      if (dates.length === 0) this.$emit('changeCanlendar', []);
    },
    changeCalendar(dates) {
      // clear days
      if (this.daysButtonValue !== '') {
        this.daysButtonValue = '';
        this.cleanDayValueInner = true;
      }
      this.rangePickerInnerValue = dates;
      this.$emit('changeCanlendar', dates);
    },
    changePage(data) {
      this.$emit('changePage', data);
    },
    showSizeChange(data) {
      this.$emit('showSizeChange', data);
    },
    clickDropdown(data) {
      this.$emit('clickDropdown', data);
    },
    clickDayButton(data) {
      // clear range picker
      if (this.rangePickerInnerValue !== null) {
        this.rangePickerInnerValue = null;
      }
      this.cleanDayValueInner = false;
      this.daysButtonValue = data;
      this.$emit('clickDayButton', data);
    },
    filterChange(data) {
      this.$emit('filterChange', data);
    },
    filterSelectorChange(data) {
      this.$emit('filterSelectorChange', data);
    },
    clickCustomizeConfirm(data) {
      this.$emit('clickCustomizeConfirm', data);
    },
  },
};
</script>
<style lang="scss">
// .ant-calendar-ok-btn {
//   ::after {
//     content: '123';
//     content: var(--okBtnText);
//     margin-left: -19px;
//     background-color: inherit;
//   }
// }
.xy-toolbox {
  &__left {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  &__right {
    text-align: right;
  }
}
@media screen and (max-width: 1200px) {
  .xy-toolbox {
    &__left {
      justify-content: space-between;
    }
    &__right {
      margin-top: var(--upper-margin);
    }
  }
}
@media screen and (max-width: 1100px) {
  .xy-toolbox {
    &__right {
      margin-top: var(--upper-margin);
      position: relative;
      right: 0;
    }
  }
}
</style>
