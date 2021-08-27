<template>
  <div class="xy-sider__wrapper" :style="collapseStyle">
    <Menu
      mode="inline"
      :selectedKeys="selectedKeys"
      :defaultOpenKeyss="defaultOpenKeys"
      :inline-collapsed="collapsed"
      :theme="theme"
      @click="$emit('clickMenu', $event)"
      @mouseenter="toggleCollapsed(false, $event)"
      @mouseleave="toggleCollapsed(true, $event)"
    >
      <template v-for="item in siderData">
        <MenuItem v-if="item.path" :key="item.key">
          <Icon v-if="item.icon" :type="item.icon" />
          <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
          <span>{{ item.name }}</span>
        </MenuItem>
        <Submenu v-else :key="item.key" @titleClick="$emit('clickSubmenu', $event)">
          <span slot="title">
            <Icon :type="item.icon" :key="item.name" />
            <img v-if="item.iconPath" :src="item.iconPath" class="anticon" />
            <span>{{ item.name }}</span>
          </span>
          <MenuItem v-for="itemChild in item.child" :key="itemChild.key">
            {{ itemChild.name }}
          </MenuItem>
        </Submenu>
      </template>
    </Menu>
  </div>
</template>

<script>
import { Menu, Icon } from 'ant-design-vue';
import _ from 'lodash';

export default {
  name: 'XYSider',
  props: {
    // as a sider, no hover toggle.
    // app drawer list need hover toggle
    stopToggle: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: 'light',
    },
    selectedKeys: {
      type: Array,
      default() {
        return ['1'];
      },
    },
    defaultOpenKeys: {
      type: Array,
    },
    siderData: {
      type: Array,
    },
    collapsed: {
      default: false,
      type: Boolean,
    },
    collapseWidth: {
      default: '72px',
      type: String,
    },
  },
  components: {
    Menu,
    MenuItem: Menu.Item,
    Icon,
    Submenu: Menu.SubMenu,
  },
  computed: {
    collapseStyle() {
      return {
        '--collapse--width': this.collapseWidth,
        '--wrapper--width': this.collapsed ? '72px' : '256px',
      };
    },
  },
  methods: {
    /* eslint-disable */
    toggleCollapsed: _.debounce(function (boo, $event) {
      if (this.stopToggle) return
      if (boo === this.collapsed) return;
      this.$emit('siderCollapse', boo);
    }, 300),
  },
};
</script>
<style lang="scss" scoped>
.xy-sider {
  &__wrapper {
    width: var(--wrapper--width);
    overflow: auto;
    height: 100vh;
    transition: width cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    ::v-deep .ant-menu {
      height: 100vh;
      &.ant-menu-inline-collapsed > .ant-menu-item .anticon,
      &.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title .anticon {
        line-height: 0;
      }
      &.ant-menu-inline-collapsed {
        width: var(--collapse--width);
        > .ant-menu-item {
          text-align: center;
          padding: 0 24px !important;
          width: var(--collapse--width);
        }
        > .ant-menu-submenu > .ant-menu-submenu-title {
          padding: 0 24px !important;
          text-align: center;
        }
      }
      &-root {
        > .ant-menu-item {
          &:first-child {
            margin-top: 10px;
            box-shadow: inset 0 -1px 0 0 $sider-item-text-light;
            display: flex;
            align-items: center;
            &.ant-menu-item-selected {
              box-shadow: none;
            }
          }
        }
      }
      .xy-sider__item {
        display: flex;
        align-items: center;
      }
      &-item {
        min-height: 56px;
        line-height: 56px;
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
      // dark theme
      &.ant-menu-dark {
        background-color: $sider-bg-dark;
        .ant-menu-item:hover {
          background-color: $sider-item-selected-dark;
        }
        .ant-menu-item {
          color: $sider-item-text-dark;
          &-selected {
            background-color: $sider-item-selected-dark;
            &::after {
              border-right: 3px solid $sider-item-selected-border-dark;
              transform: scaleY(1);
              opacity: 1;
            }
          }
          &-active {
            background-color: $sider-item-active-dark;
          }
          .anticon {
            color: $sider-item-icon-dark;
          }
        }
      }
      // light theme
      &.ant-menu-light {
        background: $sider-bg-light;
        color: $sider-item-text-light;

        .ant-menu-item {
          &-selected {
            background: $sider-item-selected-light;
            color: $sider-item-text-light;
            &::after {
              border-right: 3px solid $sider-item-selected-border-light;
              transform: scaleY(1);
              opacity: 1;
            }
          }
          &-active {
            background: $sider-item-active-light;
            color: $sider-item-text-light;
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
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #eee;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 8px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>
