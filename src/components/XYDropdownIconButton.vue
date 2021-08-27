<template>
  <Dropdown :trigger="['click']" class="xy-dropdown-icon-button">
    <Menu slot="overlay" @click="click">
      <template v-for="item in dropdownData">
        <MenuItem :key="item.value">{{ item.title }}</MenuItem>
      </template>
    </Menu>
    <Button :icon="icon" :loading="loading">
      <span class="xy-dropdown-icon-button--media-query">{{ buttonText }} </span>
    </Button>
  </Dropdown>
</template>
<script>
import { Dropdown, Button, Menu } from 'ant-design-vue';

export default {
  name: 'XYDropdownIconButton',
  components: { Dropdown, Button, Menu, MenuItem: Menu.Item },
  props: {
    icon: {
      default: 'cloud-download',
      type: String,
    },
    buttonText: {
      default: 'Export excel',
      type: String,
    },
    loading: {
      default: false,
      type: Boolean,
    },
    dropdownData: {
      type: Array,
      default() {
        return [
          { title: 'All Servers', value: '1' },
          { title: 'Current Environment', value: '2' },
          { title: 'Filtered Result', value: '3' },
        ];
      },
    },
  },
  methods: {
    click({ key }) {
      this.$emit('clickDropdown', key);
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-dropdown-icon-button--media-query {
  @media screen and (max-width: 1000px) {
    display: none;
  }
}
</style>
