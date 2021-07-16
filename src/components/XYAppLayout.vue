<template>
  <div class="app-layout" :style="layoutStyles">
    <header class="app-layout__header">
      <slot name="header" />
    </header>
    <div class="app-layout__sider">
      <slot name="sider" />
    </div>
    <div class="app-layout__content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "XYAppLayout",
  props: {
    siderExpanded: {
      type: Boolean,
      default: true,
    },
    siderWidth: {
      type: Number,
      default: 72,
    },
    siderExpandedWidth: {
      type: Number,
      default: 256,
    },
  },
  computed: {
    currentsiderWidth() {
      return this.siderExpanded ? this.siderExpandedWidth : this.siderWidth;
    },
    layoutStyles() {
      return {
        gridTemplateColumns: `${this.currentsiderWidth}px 1fr`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  width: 100%;
  min-height: 100%;
  &__header {
    grid-column: 1/-1;
  }
}
</style>