<template>
  <Dropdown class="xy-filter" v-model="visible" :trigger="['click']">
    <Button
      class="xy-filter__button"
      icon="filter"
      @click="
        (e) => {
          e.preventDefault;
        }
      "
    >
      <span class="xy-filter--media-query">Filter</span></Button
    >
    <Menu slot="overlay">
      <div class="xy-filter__wrapper">
        <div class="xy-filter__title">{{ titleText }}</div>
        <div class="xy-filter__body">
          <p v-show="filterItems.length < 1">
            Please click "Add a filter" to start, user may use multiple filters to get specific
            results.
          </p>

          <Form :form="form">
            <FormItem
              v-for="(filterItem, index) in filterItems"
              :key="index"
              class="xy-filter__body-item"
            >
              <Select
                v-model="filterItem.dataIndex"
                class="xy-filter__body-item-select"
                @change="onDataIndexChange(filterItem.dataIndex)"
              >
                <Option
                  v-for="(option, optionIndex) in filterOption"
                  :key="optionIndex"
                  :value="option.dataIndex"
                  :disabled="
                    filterItems.some((filterItem) => filterItem.dataIndex === option.dataIndex)
                  "
                >
                  {{ option.title }}
                </Option>
              </Select>
              <Select
                v-model="filterItem.sort"
                class="xy-filter__body-item-select filter__sort"
                @change="checkFormVaildation"
                :disabled="checkSortDisable(filterItem.dataIndex)"
              >
                <Option v-for="sort in filterSort" :key="sort.value" :value="sort.value">
                  {{ sort.title }}
                </Option>
              </Select>
              <template v-if="checkOptionType(filterItem.dataIndex) === 'dropdown'">
                <Select
                  v-model="filterItem.value"
                  @change="checkFormVaildation(filterItem)"
                  class="xy-filter__body-item-select-sub"
                >
                  <Option
                    v-for="subOption in getSuboption(filterItem.dataIndex)"
                    :key="subOption.dataIndex"
                    :value="subOption.dataIndex"
                  >
                    {{ subOption.title }}
                  </Option>
                </Select>
              </template>
              <template v-if="checkOptionType(filterItem.dataIndex) === 'date'">
                <DatePicker
                  @change="checkFormVaildation"
                  :disabled-date="disabledDate"
                  v-model="filterItem.value"
                />
              </template>
              <template v-if="checkOptionType(filterItem.dataIndex) === undefined">
                <Input
                  class="xy-filter__body-item-input"
                  placeholder="Value"
                  v-model="filterItem.value"
                  @change="checkFormVaildation"
                  :key="filterItem.dataIndex"
                />
              </template>
              <Button
                class="xy-filter__body-item-button"
                icon="delete"
                @click="deleteFilter(index)"
              />
            </FormItem>

            <Button
              :class="{ 'button-right': filterItems.length < 1 }"
              class="xy-filter__body-plus-button"
              @click="addFilter"
            >
              <Icon type="plus" style="fontsize: larger" />
              Add a filter
            </Button>
          </Form>
        </div>
      </div>
    </Menu>
  </Dropdown>
</template>
<script>
import Vue from 'vue';
import moment from 'moment';
import { Button, Dropdown, Select, Input, Menu, Form, Icon, DatePicker } from 'ant-design-vue';
import _ from 'lodash';

Vue.use(Menu); // to prevent Menu show error message

export default {
  name: 'XYFilter',
  props: {
    filterOption: {
      type: Array,
    },
    filterDefaultValue: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Button,
    Select,
    Option: Select.Option,
    Input,
    Dropdown,
    Icon,
    Form,
    FormItem: Form.Item,
    DatePicker,
  },
  data() {
    return {
      visible: false,
      form: this.$form.createForm(this),
      filterItems: [],
      filterTemplate: {
        dataIndex: '',
        value: '',
        sort: '',
      },
      filterSort: [
        {
          title: 'Contain',
          value: 'contain',
        },
        {
          title: 'Is',
          value: 'is',
        },
      ],
    };
  },
  watch: {
    filterDefaultValue: {
      handler(newV) {
        if (newV.length > 0) {
          this.filterItems = newV;
        }
      },
      immediate: true,
    },
  },
  computed: {
    titleText() {
      const info = 'Introduction';
      const filter = 'Filter Value';
      return this.filterItems.length > 0 ? filter : info;
    },
  },
  methods: {
    moment,
    disabledDate(current) {
      // Can not select days after today
      return current > moment().endOf('day');
    },
    checkSortDisable(dataIndex) {
      const type = this.checkOptionType(dataIndex);
      this.filterItems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        if (item.dataIndex === dataIndex && type !== undefined) item.sort = 'is';
      });
      return type !== undefined;
    },
    checkOptionType(dataIndex) {
      const result = this.filterOption.find((item) => {
        return item.dataIndex === dataIndex && item?.type !== undefined;
      });
      return result?.type;
    },
    getSuboption(dataIndex) {
      const result = this.filterOption.find((item) => {
        return item.dataIndex === dataIndex && item?.type !== undefined;
      });
      return result?.typeOption;
    },
    addFilter(e) {
      e.preventDefault();
      this.filterItems.push(Vue.util.extend({}, this.filterTemplate));
    },
    deleteFilter(index) {
      Vue.delete(this.filterItems, index);
      this.$emit('filterChange', this.form.templateContext.filterItems);
    },
    onDataIndexChange(dataIndex) {
      this.filterItems.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        if (item.dataIndex === dataIndex) item.value = '';
      });
      this.$emit('filterSelectorChange', dataIndex);
    },
    onFilterChange() {
      this.$emit('filterChange', this.form.templateContext.filterItems);
    },
    /* eslint-disable */
    checkFormVaildation: _.debounce(function(dataIndex = null) {
      if ( dataIndex !== null) this.$emit('filterSelectorChange', dataIndex)
      let pass = true;
      const itemKey = Object.keys(this.filterTemplate);
      this.form.templateContext.filterItems.forEach((item) => {
        itemKey.forEach((key) => {
          if (item[key] === '' || item[key] === null || item[key] === undefined) {
            pass = false;
            return
          }
        });
      });
      if (pass) this.onFilterChange();
    }, 500),
  },
};
</script>
<style lang="scss" scoped>
menu.ant-dropdown-content {
  padding-inline-start: 0px;
  margin-block-start: 0;
}
.xy-filter {
  &--media-query {
    @media screen and (max-width:1000px) {
      display: none;
    }
  }
  &__wrapper {
    box-shadow: $box-shadow;
    border-radius: $box-radius;
    border: $box-border;
    width: 530px;
    background-color: $filter-bg;
    ::v-deep .ant-select-selection-selected-value {
      color: $filter-title-color;
    }
  }
  &__title {
    border-bottom: $box-border;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    color: $filter-title-color;
  }
  &__body {
    padding: 24px;
    &-item {
      &-button {
        display: inline-block;
        ::v-deep &.ant-btn {
          border: none;
          box-shadow: none;
          color: $filter-text-color;
        }
      }
      &-select {
        margin-right: 8px;
        width: 170px;
        &.filter__sort {
          width: 100px;
        }
        &-sub {
          width: 150px;
          margin-right: 8px;
        }
      }
      &-input {
        width: 150px;
        margin-right: 8px;
      }
      .ant-calendar-picker {
        width: 150px;
        margin-right: 8px;
      }
    }
    &-plus-button {
      &.button-right {
        position: relative;
        right: -350px;
      }
      ::v-deep .ant-btn {
        color: $filter-text-color;
        .anticon {
          font-size: initial;
        }
      }
    }
  }
}
</style>
