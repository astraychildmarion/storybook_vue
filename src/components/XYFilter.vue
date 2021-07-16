<template>
  <div class="xy-filter-wapper">
    <div class="xy-filter-value-wrapper" v-if="isShowFilterModal">
      <div class="xy-filter-value-title"> {{ title }}</div>
      <div class="xy-filter-value-body">
        <div class="xy-filter-value-body-item" v-for="filter in filterSet" :key="xy-filter" :id='`filter_${filter}`'>
          <Select
            class="xy-filter-value-body-item-select"
            @change="handleChange"
          >
            <Option
              :value="item.value"
              :key="item.value"
              v-for="item in filterData"
              >{{ item.text }}</Option
            >
          </Select>
          <Input class="xy-filter-value-body-item-input" placeholder="Value" :value="filterValue[`${filter}`].value" @change="$emit('inputChange', filterValue)" />
          <Button class="xy-filter-value-body-item-button" icon="delete" @click="deleteFilter(filter)" />
        </div>
        <Button class="xy-filter-value-body-plus-button" icon="plus" @click="addFilter">
          Add a filter
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
import { Button, Select, Input } from "ant-design-vue";

export default {
  name: 'XYFilter',
  props: {
    isShowFilterModal: {
      type: Boolean,
      default: false,
    },
    filterData: {
      type: Array,
    },
    title: {
      type: String,
      default: 'Filter Value'
    }
  },
  components: { Button, Select, Option: Select.Option, Input },
  data() {
    return {
      filterIndex: 0,
      filterSet: [0],
      filterValue: {"0": 0}
    }
  },
  methods: {
    handleChange() {},
    addFilter() {
      this.filterIndex += 1;
      this.filterSet.push(this.filterIndex);
      this.filterValue[`${this.filterIndex}`] = this.filterIndex;
    },
    deleteFilter(filterNum) {
      const deleteIndex = this.filterSet.findIndex((element) => {
        return element === filterNum
      })
      this.filterSet.splice(deleteIndex, 1)
      delete this.filterValue[`${filterNum}`]
    }
  },
};
</script>
<style lang="scss" scoped>
.xy-filter-value {
  &-wrapper {
    box-shadow: $box-shadow;
    border-radius: $box-radius;
    border: $box-border;
    width: 500px;
  }
  &-title {
    border-bottom: $box-border;
    padding: 20px;
    font-size: 1.25rem;
    text-align: left;
  }
  &-body {
    padding: 1rem 2rem;
    &-item {
      display: flex;
      margin: 1rem auto;
      &-button {
        border: none;
      }
      &-select {
        margin-right: 20px;
        width: 200px;
      }
      &-input {
        width: 200px;
        margin-right: 20px;
      }
    }
    &-plus-button {
      margin: 20px 100% 20px 0;
    }
  }
}
</style>