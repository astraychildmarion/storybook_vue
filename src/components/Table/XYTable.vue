<template>
  <div class="xy-table">
    <Table
      :columns="columns"
      :dataSource="dataSource"
      :rowKey="generateRowKey"
      :pagination="false"
      :loading="loading"
      @change="change"
    >
      <template v-for="(_, name) in $scopedSlots" :slot="name" slot-scope="slotData, record, index">
        <slot :name="name" :[name]="slotData" :record="record" :index="index" />
      </template>
    </Table>
  </div>
</template>

<script>
import { Table } from 'ant-design-vue';
import _ from 'lodash';

export default {
  name: 'XYTable',
  components: {
    Table,
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      },
    },
    loading: {
      type: [Boolean, Object],
      default() {
        return false;
      },
    },
  },
  methods: {
    change(pagination, filters, sorter, { currentDataSource }) {
      this.$emit('change', pagination, filters, sorter, { currentDataSource });
    },
    generateRowKey(record) {
      if (record.id) {
        return record.id ? record.id : _.uniqueId();
      }
      const prefix = Array.isArray(record.children) ? 'row' : 'subrow';
      return _.uniqueId(`${prefix}_`);
    },
  },
};
</script>

<style lang="scss" scoped>
.xy-table {
  ::v-deep .ant-table-thead > tr > th {
    background-color: $table-head-bg;
  }
  ::v-deep tr > * {
    padding: 12px;
    line-height: 24px;
  }
  ::v-deep .ant-table-column-title {
    color: $table-head-text;
    font-weight: bold;
  }
  ::v-deep .ant-table-tbody > tr > td {
    color: $table-body-text;
  }
  ::v-deep .ant-table-thead > tr:hover > td {
    background-color: $table-head-bg-hovered;
  }
  ::v-deep .ant-table-tbody > tr:hover > td {
    background-color: $table-body-bg-hovered;
  }
  ::v-deep .ant-btn {
    padding: 0;
  }
}
</style>
