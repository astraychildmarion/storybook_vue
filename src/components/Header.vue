<template>
  <div class="header">
    <div class="header__bar-icon" @click="$emit('clickTopLeftCorner')">
      <Icon type="appstore-o" style="color: #ffffff; font-size: 24px" />
    </div>
    <div class="header__container">
      <div class="header__logo">
        <img :src="logoUrl" alt="XYCloud Logo" />
      </div>
      <div class="header__user user">
        <Dropdown
          :trigger="['click']"
          @visibleChange="(visible) => (manageMenuVisible = visible)"
        >
          <a class="user__manage manage" className="ant-dropdown-link" href="#">
            Manage<Icon
              class="manage__icon"
              :type="manageMenuVisible ? 'up' : 'down'"
            />
          </a>
          <div class="manage__menu" slot="overlay">
            <div
              v-for="(item, index) in manageMenu"
              :key="index"
              class="manage__menu-item menu-item"
            >
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </div>
          </div>
        </Dropdown>
        <Dropdown :trigger="['click']">
          <a class="user__info" className="ant-dropdown-link" href="#">
            <div class="user__avatar">
              <img :src="userInfo.avatar" alt="User Avatar" />
            </div>
            <div class="user__name">{{ userInfo.name }}</div>
          </a>
          <div class="user__menu" slot="overlay">
            <div
              v-for="(item, index) in userMenu"
              :key="index"
              class="user__menu-item menu-item"
            >
              <a :href="item.url" target="_blank">
                <span>{{ item.name }}</span>
                <Icon
                  v-if="item.icon"
                  class="menu-item__icon"
                  :type="item.icon"
                />
              </a>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Dropdown } from "ant-design-vue";
export default {
  name: "CommonHeader",
  components: {
    Icon,
    Dropdown,
  },
  props: {
    logoUrl: {
      type: String,
      default: "",
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
  },
  data() {
    return { manageMenuVisible: false };
  },
};
</script>

<style lang="scss" scoped>
a,
a:active,
a:hover {
  color: inherit;
}
.header {
  height: 100%;
  display: grid;
  grid-template-columns: $header-height 1fr;
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
    padding: 0px 24px;
  }
  &__logo {
    padding: 24px 0px;
    height: $header-height;
  }
  &__user {
    justify-self: flex-end;
    display: flex;
    align-items: center;
  }
}
.user {
  color: #ffffff;
  &__info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 32px;
    height: 100%;
  }
  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ffffff;
    overflow: hidden;
    margin-right: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__manage {
    display: flex;
    align-items: center;
    margin-right: 16px;
    height: 100%;
  }
}
.manage {
  &__icon {
    margin-left: 4.8px;
    font-size: 10px;
    width: 12px;
  }
}
.manage__menu,
.user__menu {
  padding: 9px 12px;
  border-radius: 2px;
  box-shadow: 0 9px 28px 8px rgba(0, 0, 0, 0.05),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12);
  background-color: rgba(16, 46, 77, 0.8);
}
.menu-item {
  color: #ffffff;
  &__icon {
    margin-left: 12.3px;
  }
  a {
    display: flex;
    align-items: center;
  }
}
</style>