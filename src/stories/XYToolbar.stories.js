import XYToolbar from '@/components/XYToolbar.vue';
import { Button } from 'ant-design-vue';

import * as customizeDisplay from './XYCustomizeDisplay.stories';
import * as dayButton from './XYDayButton.stories';
import * as filter from './XYFilter.stories';
import * as dropdown from './XYDropdownIconButton.stories';
import * as tablePager from './XYTablePagination.stories';

export default {
  title: 'XY Component/Toolbar',
  component: XYToolbar,
  argTypes: {
    showCustomizeDisplay: {
      type: 'boolean',
    },
    showFilter: {
      type: 'boolean',
    },
    showDay: {
      type: 'boolean',
    },
    showDropdown: {
      type: 'boolean',
    },
    showRangePicker: {
      type: 'boolean',
    },
    showPagination: {
      type: 'boolean',
    },
    customizeDisplaySetting: {
      type: 'object',
      description:
        'Props data for Customize display component in Object format.<br>The object include 2 attributes: checkboxOption and defaultSelected. You can take XYCustomizeDisplay for more info.',
    },
    filterSetting: {
      type: 'object',
      description:
        'Props data for Filter component in Object format.<br>The object include 1 attrubute: filterOption, please see XYFilter for more info.',
    },
    daySetting: {
      type: 'object',
      description:
        'Props data for DayButton component in Object format.<br>The object include 3 attributes: dayOption, defaultValue, cleanDayValue. For more info pls see XYDayButton.',
    },
    cleanDayValue: {
      description:
        'A props to tell days button to cancel day choice. Inside the days button would listen to `cleanDayValue`, if it is true, then days would clean.',
      type: 'boolean',
    },
    rangePickerSetting: {
      type: 'object',
      description:
        'Props data for rangepicker component in Object format.<br>The object include 6 attributes: showTime, format, allowClear, inputReadOnly, placeholder, style. Default value see doc for reference. For more info pls see ant-design range picker .',
    },
    rangePickerDefaultValue: {
      type: 'array',
      description:
        "The array type is a moment form array. You can use it to set default range picker's value. Please follow format, the default format is YYYY-MM-DD HH:mm:ss",
    },
    dropdownSetting: {
      type: 'object',
      description:
        'Props data for Dropdown icon button component in Object format.<br>The object include 3 attributes: buttontext, icon, loading. For more info pls see XYDropdownIconButton.',
    },
    tablePageSetting: {
      type: 'object',
      description:
        'Props data for Table paginition component in Object format.<br>The object include 3 attributes: total, defaultCurrent, defaultPageSize. For more info pls see XYTablePaginition.',
    },
    changeCanlendar: {
      action: 'changeCanlendar',
      description: "Callback when date changes. Refering to ant-design RangePicker's change event.",
    },
    clickCustomizeConfirm: {
      action: 'clickCustomizeConfirm',
      description:
        "Callback when customize display changes. Refering to XYCustomizeDisplay's event.",
    },
    filterChange: {
      action: 'filterChange',
      description: "Callback when filter changes. Refering to XYFilter's event.",
    },
    filterSelectorChange: {
      description:
        'The function would be trigger when selector changes, and emit current selected dataIndex.',
      action: 'filterSelectorChange',
    },
    clickDayButton: {
      action: 'clickDayButton',
      description: "Callback when day changes. Refering toXYDayButton's event.",
    },
    clickDropdown: {
      action: 'clickDropdown',
      description: "Callback when dropdown changes. Refering to XYDropdownIconButton's event.",
    },
    changePage: {
      action: 'changePage',
      description: 'Callback when page changes. Refering to XYTablePaginition event.',
    },
    showSizeChange: {
      action: 'showSizeChange',
      description:
        'A callback function, executed when the quantity of displayed data per page is changed, and it takes the resulting page number and pageSize as its arguments',
    },
    functionalButton: {
      type: 'html',
      description: 'A slot reserve for decom and restore button.',
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { XYToolbar, Button },
  template: `
  <div style="padding: 1rem">
    <XYToolbar v-bind="$props" 
      @clickCustomizeConfirm="clickCustomizeConfirm"
      @filterChange="filterChange"
      @clickDayButton="clickDayButton"
      @clickDropdown="clickDropdown"
      @changePage="changePage"
      @showSizeChange="showSizeChange"
      @changeCanlendar="changeCanlendar"
      @filterSelectorChange="filterSelectorChange"
    >
      <template #functionalButton>
        <Button type="danger">Slot</Button>
      </template>
    </XYToolbar>
  </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  showCustomizeDisplay: true,
  showFilter: true,
  showDay: true,
  showRangePicker: true,
  showDropdown: false,
  showPagination: true,
  customizeDisplaySetting: {
    ...customizeDisplay.Default.args,
  },
  filterSetting: {
    ...filter.Default.args,
  },
  daySetting: {
    ...dayButton.Default.args,
  },
  cleanDayValue: false,
  dropdownSetting: {
    ...dropdown.Default.args,
  },
  tablePageSetting: {
    ...tablePager.Default.args,
  },
  rangePickerSetting: {
    showTimeFormat: { format: 'HH:mm:ss' },
    format: 'YYYY-MM-DD HH:mm:ss',
    allowClear: true,
    inputReadOnly: true,
    placeholder: ['Start date', 'End date'],
    buttonText: 'Confirm',
  },
  // null or time
  rangePickerDefaultValue: ['2021-08-01 15:21:01', '2021-08-03 15:21:01'],
  filterDefaultValue: [
    {
      dataIndex: 'hostname',
      sort: 'is',
      value: 'host',
    },
    {
      dataIndex: 'server_type',
      sort: 'is',
      value: 'vpy',
    },
    {
      dataIndex: 'provison_date',
      sort: 'is',
      value: '2021-08-01 18:01:44',
    },
  ],
};
