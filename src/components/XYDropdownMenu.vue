<template>
  <div class="xy-dropdown-wrapper">
    <Dropdown>
      <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
        {{ title }} <Icon :type="dropdownIcon" />
      </a>
      <Menu slot="overlay">
        <MenuItem v-for="item in menuData" :key="item.url">
          <a :href="item.url" target="_blank">{{ item.name }}</a>
        </MenuItem>
      </Menu>
    </Dropdown>
  </div>
</template>

<script>
import { Dropdown, Icon, Menu } from "ant-design-vue";
export default {
  name: 'XYDropdownMenu',
  props: {
    menuData: {
      type: Array,
    },
    title: {
      type: String,
      default: "Hover Me",
    },
    dropdownIcon: {
      type: String,
      default: "down",
    },
  },
  components: { Dropdown, Icon, Menu, MenuItem: Menu.Item },
};
</script>
<style lang="scss" scoped>
.xy-dropdown {
  &-wrapper {
    margin: 10px;
  }
}
</style>
