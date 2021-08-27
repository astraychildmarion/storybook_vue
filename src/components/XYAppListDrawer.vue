<template>
  <Drawer
    placement="left"
    :visible="isDrawerShow"
    :mask="!isLandingPage"
    :maskStyle="{ opacity: '0.8' }"
    :maskClosable="true"
    :closable="false"
    :width="256"
    :wrapStyle="{ marginTop: '72px' }"
    :bodyStyle="{ padding: '0px' }"
    @close="appListDrawerSwitch"
  >
    <XYSider
      theme="light"
      :siderData="appListDrawerData"
      :selectedKeys="selectAppListDrawerKey"
      :stopToggle="!isLandingPage"
      :collapsed="false"
      @clickMenu="$emit('clickAppListDrawerMenu', $event)"
    />
    <div id="appVersion">
      {{ VER }}
    </div>
  </Drawer>
</template>
<script>
import { Drawer } from 'ant-design-vue';
import XYSider from './XYSider.vue';

export default {
  name: 'XYAppListDrawer',
  components: {
    Drawer,
    XYSider,
  },
  props: {
    appListDrawerShow: {
      type: Boolean,
      default: false,
    },
    appListDrawerData: {
      type: Array,
    },
    selectAppListDrawerKey: {
      type: Array,
    },
    isLandingPage: {
      type: Boolean,
      default: true,
    },
    VER: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      isDrawerShow: '',
    };
  },
  watch: {
    appListDrawerShow: {
      handler(newV) {
        this.isDrawerShow = newV;
      },
      immediate: true,
    },
  },
  methods: {
    appListDrawerSwitch() {
      this.$emit('appListDrawerSwitch', this.isDrawerShow);
    },
  },
};
</script>
<style lang="scss" scoped>
#appVersion {
  visibility: hidden;
  position: absolute;
  bottom: 80px;
  left: 24px;
}
</style>
