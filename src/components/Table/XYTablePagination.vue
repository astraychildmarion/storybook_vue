<template>
  <div class="xy-table-pagination">
    <div class="xy-table-pagination__page-info">{{ pageInfo }}</div>
    <Pagination
      show-size-changer
      :defaultCurrent="page"
      :defaultPageSize="pageSize"
      :pageSizeOptions="['30', '50', '100']"
      :total="total"
      @change="change"
      @showSizeChange="showSizeChange"
    />
  </div>
</template>

<script>
import { Pagination } from 'ant-design-vue';

export default {
  name: 'XYTablePagination',
  components: {
    Pagination,
  },
  props: {
    total: {
      type: Number,
      default: 100,
    },
    defaultCurrent: {
      type: Number,
      default: 1,
    },
    defaultPageSize: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      page: 1,
      pageSize: 30,
    };
  },
  computed: {
    pageInfo() {
      const start = this.pageSize * this.page - this.pageSize + 1;
      const offset =
        this.pageSize * this.page > this.total ? this.total : this.pageSize * this.page;
      return `${start.toLocaleString()}-${offset.toLocaleString()} of ${this.total.toLocaleString()}`;
    },
  },
  methods: {
    change(page, pageSize) {
      this.page = page;
      this.$emit('changePage', page, pageSize);
    },
    showSizeChange(_, size) {
      this.pageSize = size;
      this.$emit('showSizeChange', size);
    },
  },
  watch: {
    defaultCurrent: {
      immediate: true,
      handler(value) {
        this.page = value;
      },
    },
    defaultPageSize: {
      immediate: true,
      handler(value) {
        this.pageSize = value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.xy-table-pagination {
  display: flex;
  flex-direction: row;
  color: $table-pagination-text-color;
  ::v-deep .ant-pagination-item,
  ::v-deep .ant-pagination-jump-next,
  ::v-deep .ant-pagination-jump-prev {
    display: none;
  }
  ::v-deep .ant-pagination-next,
  ::v-deep .ant-pagination-prev {
    min-width: 24px;
    width: 24px;
    height: 24px;
  }
  ::v-deep .ant-pagination-item-link {
    display: grid;
    justify-content: center;
    align-content: center;
  }
  ::v-deep .ant-pagination-item-link,
  ::v-deep .ant-select-selection {
    border-radius: 2px;
  }
  ::v-deep .ant-pagination-next:not(.ant-pagination-disabled):focus .ant-pagination-item-link,
  ::v-deep .ant-pagination-prev:not(.ant-pagination-disabled):focus .ant-pagination-item-link,
  ::v-deep .ant-pagination-next:not(.ant-pagination-disabled):hover .ant-pagination-item-link,
  ::v-deep .ant-pagination-prev:not(.ant-pagination-disabled):hover .ant-pagination-item-link,
  ::v-deep .ant-select-selection:hover .ant-select-arrow,
  ::v-deep .ant-select-selection:active .ant-select-arrow,
  ::v-deep .ant-select-selection:focus .ant-select-arrow,
  ::v-deep .ant-select-open .ant-select-selection .ant-select-arrow,
  ::v-deep .ant-select-focused .ant-select-selection .ant-select-arrow {
    transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  ::v-deep .ant-select-selection-selected-value,
  ::v-deep .ant-select-selection__rendered,
  ::v-deep .ant-select-selection {
    line-height: 22px;
    height: 24px;
  }
  ::v-deep .ant-pagination-options {
    margin-left: 4px;
  }
  ::v-deep .ant-pagination-prev {
    margin-right: 4px;
    margin-left: 5px;
  }
  ::v-deep .ant-select-arrow {
    transform: translate(4px, 1.6px);
  }
  &__page-info {
    line-height: 24px;
  }
}
</style>
