<template>
  <div class="xy-layout">
    <XYAppListDrawer
      :VER="VER"
      :appListDrawerData="appListDrawerData"
      :selectAppListDrawerKey="selectAppListDrawerKey"
      :appListDrawerShow="appListDrawerShow"
      :isLandingPage="isLandingPage"
      @clickAppListDrawerMenu="clickAppListDrawerMenu"
    />
    <Layout>
      <LayoutHeader
        :style="{
          width: '100%',
          padding: '0',
          height: '72px',
          lineHeight: '72px',
          position: 'fixed',
          zIndex: 2,
        }"
      >
        <XYHeader
          :manageAuth="manageAuth"
          :logoUrl="logoUrl"
          :height="height"
          :manageMenu="manageMenu"
          :userMenu="userMenu"
          :userInfo="userInfo"
          @clickTopLeftCorner="clickTopLeftCorner"
          @logOut="$emit('logOut')"
        />
      </LayoutHeader>
      <Layout>
        <LayoutSider
          v-if="!isLandingPage"
          v-model="isSiderCollapse"
          breakpoint="lg"
          collapsible
          collapsedWidth="72"
          :width="layoutSiderWidth"
          :style="{
            height: '100vh',
            top: '72px',
            visibility: 'hidden',
          }"
        />
        <LayoutSider
          v-if="!isLandingPage"
          v-model="isSiderCollapse"
          breakpoint="lg"
          collapsible
          collapsedWidth="72"
          :width="layoutSiderWidth"
          :style="{
            height: '100vh',
            position: 'fixed',
            top: '72px',
            zIndex: 2,
          }"
        >
          <template #trigger>
            <div
              :style="{
                paddingLeft: '24px',
                textAlign: 'left',
              }"
            >
              <Icon :type="isSiderCollapse ? 'menu-unfold' : 'menu-fold'" />
              <span v-show="!isSiderCollapse" :style="{ paddingLeft: '10px' }">Close</span>
            </div>
          </template>
          <XYSider
            theme="dark"
            :selectedKeys="selectedKeys"
            :stopToggle="false"
            :collapsed="isSiderCollapse"
            :siderData="siderData"
            @siderCollapse="siderCollapse"
            @clickMenu="clickMenu"
            @clickSubMenu="clickSubMenu"
          />
        </LayoutSider>
        <LayoutContent
          :style="{
            padding: '120px 0px 24px 0px',
            minHeight: '280px',
          }"
        >
          <slot name="content" />
        </LayoutContent>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { Layout, Icon } from 'ant-design-vue';
import XYHeader from '../XYHeader.vue';
import XYSider from '../XYSider.vue';
import XYAppListDrawer from '../XYAppListDrawer.vue';

export default {
  name: 'XYAppLayout',
  components: {
    Icon,
    Layout,
    LayoutHeader: Layout.Header,
    LayoutSider: Layout.Sider,
    LayoutContent: Layout.Content,
    XYHeader,
    XYSider,
    XYAppListDrawer,
  },
  data() {
    return {
      isSiderCollapse: false,
      appListDrawerShow: false,
    };
  },
  props: {
    // sider
    selectedKeys: {
      type: Array,
      default() {
        return ['1'];
      },
    },
    // defaultOpenKeys: {
    //   type: Array,
    // },
    siderData: {
      type: Array,
    },
    // app list drawer
    appListDrawerData: {
      type: Array,
    },
    selectAppListDrawerKey: {
      type: Array,
    },
    VER: {
      type: String,
    },
    // header
    logoUrl: {
      type: String,
      default: '',
    },
    logoLink: {
      type: String,
      default: '',
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
    height: {
      type: String,
      default: '72px',
    },
  },
  computed: {
    isLandingPage() {
      // 如果在首頁， app list drawer要有hover
      // 進入產品頁之後，只剩下左上角可以打開 app list drawer
      return window.location.pathname === '/';
    },
    layoutSiderWidth() {
      return this.isSiderCollapse ? '72px' : '256px';
    },
  },
  methods: {
    clickAppListDrawerMenu($event) {
      this.$emit('clickAppListDrawerMenu', $event);
    },
    clickTopLeftCorner(boo) {
      this.appListDrawerShow = !boo;
    },
    clickMenu(key) {
      this.$emit('clickMenu', key);
    },
    clickSubMenu(key) {
      this.$emit('clickSubMenu', key);
    },
    siderCollapse(boo) {
      this.isSiderCollapse = !boo;
    },
  },
};
</script>

<style lang="scss" scoped>
.xy-layout {
  position: relative;
  ::v-deep {
    .ant-layout-header {
      padding: 0;
    }
    .ant-layout-sider-trigger {
      background-color: transparent;
    }
  }
}
::-webkit-scrollbar {
  width: 6px;
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
