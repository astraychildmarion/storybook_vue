<template>
  <div class="xy-sider-wrapper">
    <Menu
      :default-selected-keys="defaultSelectedKey"
      :default-open-keys="defaultOpenKey"
      mode="inline"
      :inline-collapsed="collapsed"
      @click="clickMenu"
      :theme="theme"
    >
      <MenuItem key="item.name" class="sider-header">
        <span class="anticon">XY</span>
        <span>Dashboard</span>
      </MenuItem>
      <template v-for="item in siderData">
        <MenuItem v-if="item.to" :key="item.name">
          <Icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.name }}</span>
        </MenuItem>
        <Submenu v-else :key="item.name" @titleClick="clickSubmenuTitle">
          <span slot="title">
            <Icon :type="item.icon" :key="item.name" />
            <span>{{ item.name }}</span>
          </span>
          <MenuItem v-for="itemChild in item.child" :key="itemChild.name">{{
            itemChild.name
          }}</MenuItem>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import { Menu, Icon } from "ant-design-vue";
export default {
  name: 'XYSider',
  props: {
    theme: {
      type: String,
      default: "light",
    },
    defaultSelectedKey: {
      type: Array,
    },
    defaultOpenKey: {
      type: Array,
    },
    siderData: {
      type: Array,
    },
    collapsed: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {};
  },
  components: {
    Menu,
    MenuItem: Menu.Item,
    Icon,
    Submenu: Menu.SubMenu,
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    clickSubmenuTitle({ key, domEvent }) {
      console.log("clickSubmenuTitle");
      console.log(key, domEvent);
    },
    clickMenu({ item, key, keyPath }) {
      console.log("clickMenu");
      console.log(item, key, keyPath);
    },
  },
};
</script>
<style lang="scss" scoped>
.xy-sider {
  &-wrapper {
    width: 256px;
    ::v-deep .ant-menu {
      height: 100vh;
      &.ant-menu-inline-collapsed > .ant-menu-item .anticon,
      &.ant-menu-inline-collapsed
        > .ant-menu-submenu
        > .ant-menu-submenu-title
        .anticon {
        line-height: 0;
      }
      &.ant-menu-inline-collapsed {
        width: 72px;
        > .ant-menu-item {
          text-align: center;
          padding: 0 24px !important;
        }
        > .ant-menu-submenu > .ant-menu-submenu-title {
          padding: 0 24px !important;
          text-align: center;
        }
      }

      .sider-header {
        box-shadow: inset 0 -1px 0 0 $sider-text-light;
        height: 64px;
        display: flex;
        margin-bottom: 18px;
        align-items: center;
        .anticon {
          font-weight: bold;
          font-size: large;
        }
      }
      .sider-item {
        display: flex;
        align-items: center;
      }
      &-item {
        min-height: 52px;
        line-height: 52px;
        margin-top: 0px;
        margin-bottom: 0px;
        .anticon {
          vertical-align: middle;
        }
      }

      &-submenu {
        .anticon {
          vertical-align: middle;
        }
      }

      &.ant-menu-light {
        background: $sider-bg-light;
        color: $sider-text-light;

        .ant-menu-item {
          background: $sider-bg-light;
          &::after {
            border-right: 3px solid $sider-text-light;
          }
          &-selected {
            background: $sider-selected-bg-light;
            color: $sider-text-light;
          }
        }
        .ant-menu-submenu {
          > .ant-menu {
            background-color: $sider-bg-light;
          }
        }
      }
    }
  }
}
</style>

