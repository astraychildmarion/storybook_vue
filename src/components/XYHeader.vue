<template>
  <div class="xy-header" :style="dynamicCss">
    <div class="xy-header__bar-icon" @click="clickTopLeftCorner">
      <Icon type="appstore-o" style="color: #ffffff; font-size: 24px" />
    </div>
    <div class="xy-header__container">
      <div class="xy-header__logo">
        <a :href="logoLink">
          <img :src="logoUrl" alt="XYCloud Logo" />
        </a>
      </div>
      <div class="xy-header__user">
        <Dropdown
          :trigger="['click']"
          @visibleChange="(visible) => (manageMenuVisible = visible)"
          v-if="manageAuth"
        >
          <a class="xy-header__user-manage" className="ant-dropdown-link" href="#">
            Manage
            <Icon class="xy-header__user-manage__icon" :type="manageMenuVisible ? 'up' : 'down'" />
          </a>
          <div class="xy-header__user-manage__menu" slot="overlay">
            <div
              v-for="(item, index) in manageMenu"
              :key="index"
              class="xy-header__user-manage__menu-item"
            >
              <a :href="item.url" target="_blank">
                <span>{{ item.name }}</span>
                <Icon
                  v-if="item.icon"
                  class="xy-header__user-manage__menu-item-icon"
                  :type="item.icon"
                />
              </a>
            </div>
          </div>
        </Dropdown>
        <Dropdown :trigger="['click']">
          <a class="xy-header__user-info" className="ant-dropdown-link" href="#">
            <div class="xy-header__user-info__avatar">
              <Avatar>
                {{ userInfo.avatar }}
              </Avatar>
            </div>
            <div class="xy-header__user-info__name">{{ userInfo.name }}</div>
          </a>
          <div class="xy-header__user-manage__menu" slot="overlay">
            <div
              v-for="(item, index) in userMenu"
              :key="index"
              class="xy-header__user-manage__menu-item"
            >
              <a :href="item.url" target="_blank">
                <span>{{ item.name }}</span>
                <Icon
                  v-if="item.icon"
                  class="xy-header__user-manage__menu-item-icon"
                  :type="item.icon"
                />
              </a>
            </div>
            <div class="xy-header__user-manage__menu-item" @click="$emit('logOut')">
              <div>
                <span>Log Out</span>
                <Icon class="xy-header__user-manage__menu-item-icon" type="logout" />
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Dropdown, Avatar } from 'ant-design-vue';

export default {
  name: 'XYHeader',
  components: {
    Icon,
    Dropdown,
    Avatar,
  },
  props: {
    logoUrl: {
      type: String,
      default: '',
    },
    logoLink: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '72px',
    },
    manageMenu: {
      type: Array,
      default() {
        return [];
      },
    },
    userMenu: {
      type: Array,
      default() {
        return [];
      },
    },
    userInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    manageAuth: {
      type: Boolean,
      default: false,
    },
    isLandingPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      manageMenuVisible: false,
      isDrawerClose: true,
    };
  },
  computed: {
    dynamicCss() {
      return {
        '--height': this.height,
      };
    },
  },
  methods: {
    clickTopLeftCorner() {
      this.isDrawerClose = !this.isDrawerClose;
      this.$emit('clickTopLeftCorner', this.isDrawerClose);
    },
  },
};
</script>

<style lang="scss" scoped>
a,
a:active,
a:hover {
  color: inherit;
}
.xy-header {
  width: 100vw;
  height: var(--height);
  display: grid;
  grid-template-columns: var(--height) 1fr;
  background-color: $header-bg;

  &__bar-icon {
    cursor: pointer;
    background-color: $header-bar-icon-bg;
    display: grid;
    justify-content: center;
    align-content: center;
    height: 100%;
  }
  &__container {
    display: grid;
    grid-template-columns: min-content auto;
    padding-left: 24px;
  }
  &__logo {
    height: var(--height);
    line-height: var(--height);
  }
  &__user {
    justify-self: flex-end;
    display: flex;
    align-items: center;
  }

  &__user {
    color: $header-text;
    &-info {
      min-width: 160px;
      display: flex;
      padding: 0 10px;
      flex-direction: row;
      align-items: center;
      height: 100%;
      &:hover {
        background-color: $header-hover-bg;
      }
      &__avatar {
        margin-right: 10px;
      }
    }

    &-manage {
      display: flex;
      padding: 0 10px;
      align-items: center;
      margin-right: 16px;
      min-width: 100px;
      height: 100%;
      &:hover {
        background-color: $header-hover-bg;
      }
      &__icon {
        margin-left: 4.8px;
        font-size: 10px;
        width: 12px;
      }
    }
    &-manage__menu {
      margin-top: -4px;
      &-item {
        color: $header-text;
        height: 40px;
        line-height: 40px;
        background-color: $header-dropdown-bg;
        :hover {
          background-color: $header-hover-bg;
        }
        &-icon {
          margin-left: 12.3px;
        }
        a,
        div {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
